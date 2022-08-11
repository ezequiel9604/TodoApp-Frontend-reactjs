
import { useState } from "react";

import "./scss-styles/stylesheet.scss";

import LoginTitle from "../Login/LoginTitle";
import LoginSubtitle from "../Login/LoginSubtitle";
import ForgotSocialMedia from "./ForgotSocialMedia";
import LoginAlert from "../Login/LoginAlert";

import { ForgotPasswordUser } from "../../Apis/UserApi";

function Forgot() {

    const [email, setEmail] = useState("johndeacon01@gmail.com");
    const [response, setResponse] = useState(null);

    async function handleSubmit(e){
        e.preventDefault();
        
        const res = await ForgotPasswordUser({
            email: email
        });

        console.log(res);

        // if(res.status === 400){
        //     setResponse(res);
        // }
    }

    return (
        <form onSubmit={handleSubmit} className="main__login">

            { response && <LoginAlert title={response.data} setResponse={setResponse} />}

            <LoginTitle />

            <LoginSubtitle title="Provide account’s email for which you want to reset your password." />

            <div className="main__login__content">

                <div className="main__login__content__inputs">
                    <i className="bi bi-envelope"></i>
                    <input defaultValue={email} onChange={(e) => setEmail(e.target.value)} 
                        type="email" placeholder="Email" required />
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