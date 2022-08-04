
import "./scss-styles/stylesheet.scss";

import LoginTitle from "../Login/LoginTitle";
import LoginSubtitle from "../Login/LoginSubtitle";
import ForgotSocialMedia from "./ForgotSocialMedia";
import ForgotAction from "./ForgotAction";

function Forgot() {
    return (
        <div class="main__login">

            <LoginTitle />

            <LoginSubtitle title="Provide account’s email for which you want to reset your password." />

            <div class="main__login__content">

                <div class="main__login__content__inputs">
                    <i class="bi bi-envelope"></i>
                    <input type="email" placeholder="Email" />
                </div>

            </div>

            <ForgotAction />

            <ForgotSocialMedia />

        </div>
    );
}

export default Forgot;