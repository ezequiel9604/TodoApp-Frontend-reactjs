
import { Link } from "react-router-dom";
import { useState } from "react";

import "./scss-styles/stylesheet.scss";

import LoginTitle from "./LoginTitle";
import LoginSocialMedia from "./LoginSocialMedia";

import { LoginUser } from "../../Apis/UserApi";

function Login({ setUser }) {

    const [email, setEmail] = useState("brainmay01@gmail.com");
    const [password, setPassword] = useState("brianmay1234");

    async function handleSubmit(e){
        e.preventDefault();
        
        const res = await LoginUser({ 
            email,
            password 
        });

        //setUser(res.user);
    }

    return (
        <form onSubmit={handleSubmit} className="main__login">

            <LoginTitle />

            <div className="main__login__content">

                <div className="main__login__content__inputs">
                    <i className="bi bi-envelope"></i>
                    <input defaultValue={email}  type="email" placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="main__login__content__inputs">
                    <i className="bi bi-lock"></i>
                    <input defaultValue={password} type="password" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

            </div>

            <div className="main__login__action">
                <button type="submit" className="main__login__action__login">LOG IN</button>
                <span><Link to="/forgotpassword">Forgot password?</Link></span>
                <span>New here? <Link to="/register">Register now</Link></span>
            </div>

            <LoginSocialMedia />

        </form>
    );
}

export default Login;