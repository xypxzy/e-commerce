import {LoginContext} from "./LoginContext.ts";
import {ReactNode, useState} from "react";

const LoginProvider = ({children}: {children: ReactNode}) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('userToken') ?? null)



    return (
        <LoginContext.Provider value={{token, setToken}} >
            {children}
        </LoginContext.Provider>
    )
}

export default LoginProvider;