import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import "../css/Login.css";
import { login } from '../redux/actions/auth.action';

const Login = () => {
    const accessToken = useSelector(state => state.auth.accessToken)
    const dispatch = useDispatch()
    const handleLogin = () => {
        dispatch(login());
    }
    const history = useHistory();
    useEffect(() => {
        if (accessToken) {
            history.push("/");
        }
    }, [accessToken])
    return (
        <div className="login">
            <div className="login__screen">
                <span>YouTube Clone By Dhruv Maradiya</span>
                <img src="https://imgr.search.brave.com/84nRtrWkLno7k8sxeJyhqwOGQWs6_zkD-i2OcM3386I/fit/800/600/no/1/aHR0cHM6Ly9jbGlw/Z3JvdW5kLmNvbS9p/bWFnZXMveW91dHVi/ZS1wbmctdHJhbnNw/YXJlbnQtbG9nby03/LnBuZw" alt="" />
                <button onClick={handleLogin}>Login With Google</button>
            </div>
        </div>
    )
}

export default Login;
