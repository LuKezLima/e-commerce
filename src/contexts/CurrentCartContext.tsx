//Context, Reducer, Provider, Hook
import {createContext, ReactNode, useContext, useReducer} from 'react'

export type State = {
    idItem: number | undefined;
    quantify: number;
}

type Action = {
    type: CartActions;
    payload: any;
};

type ContextType = {
    state: State;
    dispatch: (action:Action) => void
}

type FormProviderProps = {
    children: ReactNode
}

const initialData: State = {
    idItem: 1,
    quantify: 1,

}

// Context

const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum CartActions {
    setIdItem,
    setQuantify,
    CleanCart
}

const formReducer = (state: State, action:Action) => {
    switch(action.type){
        case CartActions.setIdItem:
            return {...state, idItem: action.payload};
        case CartActions.setQuantify:
            return {...state, quantify: action.payload};
        case CartActions.CleanCart:
            return {...state = initialData};
        default:
            return state
    }
}

// Provider

export const FormProvider = ({children}: FormProviderProps) => {
    const [state, dispatch] = useReducer(formReducer, initialData)
    const value = {state, dispatch}

    return (
        <FormContext.Provider value={value}>
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
