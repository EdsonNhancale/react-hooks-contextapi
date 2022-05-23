import Users from "../../model/Users"
import { GlobalContext } from "../context/GlobalContext"

export const GlobalProvider = ({ children }) => {
    const user = Users()

    // podemos colocar todas as variaveis que quisermos
    return <GlobalContext.Provider value={{ ...user }}>{children}</GlobalContext.Provider>
}