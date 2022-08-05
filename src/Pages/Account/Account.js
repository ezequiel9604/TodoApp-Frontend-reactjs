
import { useState } from "react";

import "./scss-styles/stylesheet.scss";

function Account({ user }) {

    const [userName, setUserName] = useState(user.name);
    const [userEmail, setUserEmail] = useState(user.email);
    const [userOldPassword, setUserOldPassword] = useState("");
    const [userNewPassword, setUserNewPassword] = useState("");

    function handleSubmit(e){
        e.preventDefault();
        console.log("form submitted!");
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

                    <input onChange={(e) => setUserOldPassword(e.target.value)} 
                        type="password" defaultValue={userOldPassword} placeholder="Old password" />

                    <input onChange={(e) => setUserNewPassword(e.target.value)} 
                        type="password" defaultValue={userNewPassword} placeholder="New password" />

                </div>

                <div className="main__section__form__action">
                    <button type="submit" className="main__section__form__action__edit">Update</button>
                </div>

            </form>
                
        </div>
    );
}

export default Account;