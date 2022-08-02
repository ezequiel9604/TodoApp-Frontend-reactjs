
import "./scss-styles/stylesheet.scss";

import LoginTitle from "./LoginTitle";
import LoginAction from "./LoginAction";
import LoginSocialMedia from "./LoginSocialMedia";

function Login() {
    return (
        <div class="main__login">

            <LoginTitle />

            <div class="main__login__content">

                <div class="main__login__content__inputs">
                    <i class="bi bi-envelope"></i>
                    <input type="email" placeholder="Email" />
                </div>

                <div class="main__login__content__inputs">
                    <i class="bi bi-lock"></i>
                    <input type="password" placeholder="Password" />
                </div>

            </div>

            <LoginAction />

            <LoginSocialMedia />

        </div>
    );
}

export default Login;