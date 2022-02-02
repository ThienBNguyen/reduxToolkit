import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

function Login() {
    //use the reducer method by using useDispatch
    const dispatch = useDispatch();

    return (
        <div>
            <button
                onClick={() => {
                    dispatch(login({ name: "Pedro", age: 20, email: "pedro@gmail.com" })); //alter the object in the state 
                }}
            >
                Login
      </button>

            <button
                onClick={() => {
                    dispatch(logout());
                }}
            >
                LOGOUT
      </button>
        </div>
    );
}

export default Login;