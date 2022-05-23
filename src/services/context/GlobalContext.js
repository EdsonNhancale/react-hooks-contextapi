import { createContext } from "react";


//É bom inicializarmos as variaveis 
export const GlobalContext = createContext({
    user: {},
    logout: {},
    login: {}
})