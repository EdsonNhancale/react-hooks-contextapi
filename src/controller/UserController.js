import Users from "../model/Users";
const users = [
    {
        email: "edsonnhancale97@gmail.com",
        password: "0000"
    }
]

export const UserController = () => {
    const { login, logout, user } = Users()


    const onLogin = ({ email, password }) => {
        // Podemos usar requests
        let access = users.filter(x => x.email === email && x.password === password)
        if (access.length > 0) {
            login(access[0])
        }
    }

    const onLogout = () => {
        // Podemos usar requests
        logout()
    }

    const isAuthenticated = () => {
        return !!user
    }

    const currentUser = () => {
        return user
    }

    return {
        onLogin,
        onLogout,
        isAuthenticated,
        currentUser
    }
}