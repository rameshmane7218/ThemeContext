import { createContext } from "react";

export const ReducerContext = createContext();

export const ReducerContextProvider = ({children})=>{

    return <ReducerContext.Provider value={30}>{children}</ReducerContext.Provider>
}