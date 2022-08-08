
import { Link } from "react-router-dom";
import { useState } from "react";

import "./scss-styles/stylesheet.scss";

import LoginTitle from "./LoginTitle";
import LoginSocialMedia from "./LoginSocialMedia";

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        
        const data = {
            email: email,
            password: password
        };

        console.log(data);
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