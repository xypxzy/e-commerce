import {useContext, useState} from 'react';
import {LoginContext} from "../../contexts/LoginContext/LoginContext.ts";
import axios from "axios";
import {NavLink} from "react-router-dom";

function Login() {
    const {setToken} = useContext(LoginContext)
    const [username, setUsername] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')


    const loginHandler = () => {
        axios.post('https://fakestoreapi.com/auth/login', {
            username: username,
            password: password
        })
            .then(response => {
                setToken(response.data)
                localStorage.setItem('userToken', response.data)
            })
            .catch(error => {
                setError(error.response.data)
            });
    }

    return (
        <div
            className={"w-full min-h-[80vh] flex items-center justify-center flex-col"}
        >
            <div className={"flex flex-col text-center items-center gap-y-4"}>
                <input
                    className={"px-5 py-2 w-[300px] border border-gray-500 rounded-lg"}
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    type="text"
                    placeholder={"Username"}
                />
                <input
                    className={"px-5 py-2 w-[300px] border border-gray-500 rounded-xl"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    placeholder={"Password"}
                />
                { error && <p className={"text-red-500"}>{error}</p>}
                <button
                    onClick={loginHandler}
                    className={"px-5 py-2 w-[300px] bg-black text-white rounded-xl"}
                >
                    Login
                </button>
                <NavLink
                    className={"px-5  w-[300px]"}
                    to="/">Go to Products</NavLink>
            </div>
        </div>
    );
}

export default Login;