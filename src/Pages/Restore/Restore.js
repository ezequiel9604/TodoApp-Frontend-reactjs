
import { useState } from "react";

import "./scss-styles/stylesheet.scss";

import LoginTitle from "../Login/LoginTitle";
import LoginSubtitle from "../Login/LoginSubtitle";
import LoginAlert from "../Login/LoginAlert";
import ForgotSocialMedia from "../Forgot/ForgotSocialMedia";

import { RestorePasswordUser } from "../../Apis/UserApi";

function Restore() {

    const query = new URL(window.location.href);
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [response, setResponse] = useState(null);

    async function handleSubmit(e){
        e.preventDefault();
        
        if(newPassword !== confirmPassword){
            setResponse({
                status: 400,
                data: "Passwords do not match!"
            });
            return;
        }

        if(newPassword === "" || confirmPassword === ""){
            setResponse({
                status: 400,
                data: "Fields can not be empty!"
            });
            return;
        }

        const res = await RestorePasswordUser({
            email: query.searchParams.get("User"),
            code: query.searchParams.get("Code"),
            password: confirmPassword,
        });

        if(res.status === 400)
            setResponse(res);

    }

    return (
        <form onSubmit={handleSubmit} className="main__login">

            { response && <LoginAlert title={response.data} type="warning" setResponse={setResponse} />}

            <LoginTitle />

            <LoginSubtitle title="Your account has been verified! Set your new password." />

            <div className="main__login__content">

                <div className="main__login__content__inputs">
                    <i className="bi bi-lock"></i>
                    <input defaultValue={newPassword} onChange={(e) => setNewPassword(e.target.value)} 
                        type="password" placeholder="New password" required />
                </div>

                <div className="main__login__content__inputs">
                    <i className="bi bi-lock"></i>
                    <input defaultValue={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password" placeholder="Confirm password" required />
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