
import "./scss-styles/stylesheet.scss";

import RegisterSocialMedia from "./RegisterSocialMedia";
import RegisterAction from "./RegisterAction";
import LoginTitle from "../Login/LoginTitle";

function Register() {
    return (
        <div class="main__login">

            <LoginTitle />

            <div class="main__login__content">

                <div class="main__login__content__inputs">
                    <i class="bi bi-person"></i>
                    <input type="text" placeholder="Full name" />
                </div>

                <div class="main__login__content__inputs">
                    <i class="bi bi-envelope"></i>
                    <input type="email" placeholder="Email" />
                </div>

                <div class="main__login__content__inputs">
                    <i class="bi bi-lock"></i>
                    <input type="password" placeholder="Password" />
                </div>

            </div>

            <RegisterAction />

            <RegisterSocialMedia />

        </div>
    );
}

export default Register;