//Context, Reducer, Provider, Hook
import {createContext, ReactNode, useContext, useReducer} from 'react'

import {State} from './CurrentCartContext'



type StateCart = {
    Card: State[]
}

type Action = {
    type: CartActions;
    payload: any;
};

type ContextType = {
    state: StateCart;
    dispatch: (action:Action) => void
}

type FormProviderProps = {
    children: ReactNode
}

const initialData: StateCart = {
    Card: []

}

// Context

const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum CartActions {
    setCard,
    removeCard
}

const formReducer = (state: StateCart, action:Action) => {
    switch(action.type){
        case CartActions.setCard:
            return {...state, currentCard: action.payload};
        default:
            return state
    }
}

// Provider

export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData)
    const value = {state, dispatch}

    return (
        <FormContext.Provider value={value }>
            {children}
        </FormContext.Provider>
    )
}


// Context Hook
export const useForm = () =>{
    const context = useContext(FormContext);
    if(context === undefined){
        throw new Error('Useform is only available inside FormProvider')
    } 
    return context
}
