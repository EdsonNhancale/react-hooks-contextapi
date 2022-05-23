import { useState } from "react"

export const Users = () => {
    const [user, setuser] = useState("")

    const login = (data) => {
        setuser(data)
    }

    const logout = () => {
        setuser("")
    }

    return {
        user,
        login,
        logout
    }
}


