
import { useState } from "react";

import "./scss-styles/stylesheet.scss";

import RegisterSocialMedia from "./RegisterSocialMedia";
import LoginTitle from "../Login/LoginTitle";
import LoginAlert from "../Login/LoginAlert";

import { SignUpUser } from "../../Apis/UserApi";

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState(null);

    async function handleSubmit(e){
        e.preventDefault();
        
        const res = await SignUpUser({
            name: name,
            email: email,
            password: password
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
                    <i className="bi bi-person"></i>
                    <input defaultValue={name} onChange={(e) => setName(e.target.value)} 
                        type="text" placeholder="Full name" required />
                </div>

                <div className="main__login__content__inputs">
                    <i className="bi bi-envelope"></i>
                    <input defaultValue={email} onChange={(e) => setEmail(e.target.value)}  
                        type="email" placeholder="Email" required />
                </div>

                <div className="main__login__content__inputs">
                    <i className="bi bi-lock"></i>
                    <input defaultValue={password} onChange={(e) => setPassword(e.target.value)} 
                        type="password" placeholder="Password" required />
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