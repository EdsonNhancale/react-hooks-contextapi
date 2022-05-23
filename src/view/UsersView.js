import { UserController } from "../controller/UserController"

export const UsersView = () => {
    const { currentUser, onLogin, onLogout } = UserController()

    // podemos criar outras views
    const isAuthenticated = () => {
        return currentUser().hasOwnProperty("email")
    }

    return {
        isAuthenticated,
        onLogin,
        onLogout,
        currentUser
    }
}