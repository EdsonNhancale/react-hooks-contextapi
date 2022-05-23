import { useState } from "react"

const Users = () => {
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

export default Users