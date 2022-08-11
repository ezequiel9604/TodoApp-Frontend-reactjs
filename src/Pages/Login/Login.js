
import { Link } from "react-router-dom";
import { useState } from "react";

import "./scss-styles/stylesheet.scss";

import LoginTitle from "./LoginTitle";
import LoginAlert from "./LoginAlert";
import LoginSocialMedia from "./LoginSocialMedia";

import { LoginUser } from "../../Apis/UserApi";

function Login() {

    const [email, setEmail] = useState("brainmay01@gmail.com");
    const [password, setPassword] = useState("brianmay1234");
    const [response, setResponse] = useState(null);

    async function handleSubmit(e){
        e.preventDefault();
        
        const res = await LoginUser({ 
            email,
            password 
        });

        if(res.status === 400){
            setResponse(res);
        }

    }

    return (
        <form onSubmit={handleSubmit} className="main__login">

            { response && <LoginAlert title={response.data} setResponse={setResponse} />}

            <LoginTitle />

            <div className="main__login__content">

                <div className="main__login__content__inputs">
                    <i className="bi bi-envelope"></i>
                    <input defaultValue={email}  type="email" placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="main__login__content__inputs">
                    <i className="bi bi-lock"></i>
                    <input defaultValue={password} type="password" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)} required />
                </div>

            </div>

            <div className="main__login__action">
                <button type="submit" className="main__login__action__login">Log in</button>
                <span><Link to="/forgotpassword">Forgot password?</Link></span>
                <span>New here? <Link to="/register">Register now</Link></span>
            </div>

            <LoginSocialMedia />

        </form>
    );
}

export default Login;