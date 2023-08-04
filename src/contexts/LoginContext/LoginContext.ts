import {createContext} from "react";

interface LoginContextProps {
    token: string | null,
    setToken: (token: string) => void
}

const initialValue: LoginContextProps = {
    token: null,
    setToken: (token: string) => {}
}

export const LoginContext = createContext<LoginContextProps>(initialValue)