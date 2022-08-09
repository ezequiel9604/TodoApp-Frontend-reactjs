
import { useState } from "react";

import "./scss-styles/stylesheet.scss";

import { EditUser } from "../../Apis/UserApi";

function Account({ user }) {

    const [userName, setUserName] = useState(user.name);
    const [userEmail, setUserEmail] = useState(user.email);
    const [userNewPassword, setUserNewPassword] = useState("");
    const [userConfirmPassword, setUserConfirmPassword] = useState("");

    async function handleSubmit(e){
        e.preventDefault();

        await EditUser({
            id: user.id,
            name: userName,
            email: userEmail,
            password: userConfirmPassword,
        });

    }

    return (
        <div className="main__container">

            <form onSubmit={handleSubmit} className="main__section__form">

                <span className="main__section__form__title">Edit account:</span>

                <div className="main__section__form__inputs">

                    <input onChange={(e) => setUserName(e.target.value)} 
                        type="text"  defaultValue={userName} placeholder="Enter full name" />

                    <input onChange={(e) => setUserEmail(e.target.value)} 
                        type="email" defaultValue={userEmail} placeholder="Enter email" />

                    <input onChange={(e) => setUserNewPassword(e.target.value)} 
                        type="password" defaultValue={userNewPassword} placeholder="New password" />

                    <input onChange={(e) => setUserConfirmPassword(e.target.value)} 
                        type="password" defaultValue={userConfirmPassword} placeholder="Confirm password" />

                </div>

                <div className="main__section__form__action">
                    <button type="submit" className="main__section__form__action__edit">Update</button>
                </div>

            </form>
                
        </div>
    );
}

export default Account;