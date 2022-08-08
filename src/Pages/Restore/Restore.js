
import { useState } from "react";

import "./scss-styles/stylesheet.scss";

import LoginTitle from "../Login/LoginTitle";
import LoginSubtitle from "../Login/LoginSubtitle";
import ForgotSocialMedia from "../Forgot/ForgotSocialMedia";

function Restore() {

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    function handleSubmit(e){
        e.preventDefault();
        
        if(newPassword !== confirmPassword){
            alert("Passwords do not match.");
            return;
        }

        const data = {
            password: confirmPassword
        };
        
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit} className="main__login">

            <LoginTitle />

            <LoginSubtitle title="Your account has been verified! Set your new password." />

            <div className="main__login__content">

                <div className="main__login__content__inputs">
                    <i className="bi bi-lock"></i>
                    <input defaultValue={newPassword} onChange={(e) => setNewPassword(e.target.value)} 
                        type="password" placeholder="New password" />
                </div>

                <div className="main__login__content__inputs">
                    <i className="bi bi-lock"></i>
                    <input defaultValue={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password" placeholder="Confirm password" />
                </div>

            </div>

            <div className="main__login__action">
                <button type="submit" className="main__login__action__update">Update</button>
            </div>

            <ForgotSocialMedia />

        </form>
    );
}

export default Restore;