//Context, Reducer, Provider, Hook
import {createContext, ReactNode, useContext, useReducer} from 'react'


type StateActive = {
    active: boolean
}

type Action = {
    type: CartActions;
    payload: any;
};

type ContextType = {
    stateActive: StateActive;
    dispatchActive: (action:Action) => void
}

type FormProviderProps = {
    children: ReactNode
}

const initialData: StateActive = {
    active: false

}

// Context

const FormContext = createContext<ContextType | undefined>(undefined);

// Reducer
export enum CartActions {
    setTrue,
    setFalse
}

const formReducer = (stateActive: StateActive, action:Action) => {
    switch(action.type){
        case CartActions.setTrue:
            return {active: action.payload};
        case CartActions.setFalse:
            return {active: action.payload};
        default:
            return stateActive
    }
}

// Provider

export const FormProvider = ({children}: FormProviderProps) => {
    const [stateActive, dispatchActive] = useReducer(formReducer, initialData)
    const value = {stateActive, dispatchActive}

    return (
        <FormContext.Provider value={value }>
            {children}
        </FormContext.Provider>
    )
}


// Context Hook
export const useActive = () =>{
    const context = useContext(FormContext);
    if(context === undefined){
        throw new Error('Useform is only available inside FormProvider')
    } 
    return context
}
