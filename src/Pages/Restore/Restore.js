
import "./scss-styles/stylesheet.scss";

import RestoreAction from "./RestoreAction";
import LoginTitle from "../Login/LoginTitle";
import LoginSubtitle from "../Login/LoginSubtitle";
import ForgotSocialMedia from "../Forgot/ForgotSocialMedia";

function Restore() {
    return (
        <div class="main__login">

            <LoginTitle />

            <LoginSubtitle title="Your account has been verified! Set your new password." />

            <div class="main__login__content">

                <div class="main__login__content__inputs">
                    <i class="bi bi-lock"></i>
                    <input type="password" placeholder="New password" />
                </div>

                <div class="main__login__content__inputs">
                    <i class="bi bi-lock"></i>
                    <input type="password" placeholder="Old password" />
                </div>

            </div>

            <RestoreAction />

            <ForgotSocialMedia />

        </div>
    );
}

export default Restore;