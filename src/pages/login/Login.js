import React, { useState } from 'react'
import { UsersView } from '../../view/UsersView'
import "./login.css"

function Login() {
    const { isAuthenticated, onLogin, onLogout, currentUser } = UsersView()
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    return (
        <>
            {!isAuthenticated() ?
                <>
                    <div>Login</div>
                    <div>
                        <label>Email</label>
                        <input
                            value={email}
                            onChange={(e) => setemail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                        />
                    </div>
                    <button onClick={() => onLogin({ email, password })}>
                        Login
                    </button>
                </>
                :
                <>
                    <div>{currentUser().email}</div>
                    <button onClick={() => onLogout()}>
                        Logout
                    </button>
                </>
            }
        </>
    )
}

export default Login