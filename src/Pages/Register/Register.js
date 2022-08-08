
import { useState } from "react";

import "./scss-styles/stylesheet.scss";

import RegisterSocialMedia from "./RegisterSocialMedia";
import LoginTitle from "../Login/LoginTitle";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        
        const data = {
            name: name,
            email: email,
            password: password
        };

        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit} className="main__login">

            <LoginTitle />

            <div className="main__login__content">

                <div className="main__login__content__inputs">
                    <i className="bi bi-person"></i>
                    <input defaultValue={name} onChange={(e) => setName(e.target.value)} 
                        type="text" placeholder="Full name" />
                </div>

                <div className="main__login__content__inputs">
                    <i className="bi bi-envelope"></i>
                    <input defaultValue={email} onChange={(e) => setEmail(e.target.value)}  
                        type="email" placeholder="Email" />
                </div>

                <div className="main__login__content__inputs">
                    <i className="bi bi-lock"></i>
                    <input defaultValue={password} onChange={(e) => setPassword(e.target.value)} 
                        type="password" placeholder="Password" />
                </div>

            </div>

            <div className="main__login__action">
                <button type="submit" className="main__login__action__register">Register</button>
            </div>

            <RegisterSocialMedia />

        </form>
    );
}

export default Register;