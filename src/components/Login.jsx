import React from 'react';
import "../css/Login.css";

const Login = () => {
    return (
        <div className="login">
            <div className="login__screen">
                <span>YouTube Clone By Dhruv Maradiya</span>
                <img src="https://imgr.search.brave.com/84nRtrWkLno7k8sxeJyhqwOGQWs6_zkD-i2OcM3386I/fit/800/600/no/1/aHR0cHM6Ly9jbGlw/Z3JvdW5kLmNvbS9p/bWFnZXMveW91dHVi/ZS1wbmctdHJhbnNw/YXJlbnQtbG9nby03/LnBuZw" alt="" />
                <button>Login With Google</button>
            </div>
        </div>
    )
}

export default Login;
