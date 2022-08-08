
import { useState } from "react";

import "./scss-styles/stylesheet.scss";

import LoginTitle from "../Login/LoginTitle";
import LoginSubtitle from "../Login/LoginSubtitle";
import ForgotSocialMedia from "./ForgotSocialMedia";

function Forgot() {

    const [email, setEmail] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        
        const data = {
            email: email
        };

        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit} className="main__login">

            <LoginTitle />

            <LoginSubtitle title="Provide account’s email for which you want to reset your password." />

            <div className="main__login__content">

                <div className="main__login__content__inputs">
                    <i className="bi bi-envelope"></i>
                    <input defaultValue={email} onChange={(e) => setEmail(e.target.value)} 
                        type="email" placeholder="Email" />
                </div>

            </div>

            <div className="main__login__action">
                <button type="submit" className="main__login__action__login">Next</button>
            </div>

            <ForgotSocialMedia />

        </form>
    );
}

export default Forgot;