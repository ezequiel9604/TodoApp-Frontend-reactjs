
import { Link } from "react-router-dom";

function LoginSocialMedia() {
    return (
        <div class="main__login__socialMedia">

            <span>Log in using social media.</span>

            <div class="main__login__socialMedia__figures">
                <Link to="/" class="main__login__socialMedia__figures__facebook">
                    <i class="bi bi-facebook"></i>
                </Link>
                <Link to="/" class="main__login__socialMedia__figures__twitter">
                    <i class="bi bi-twitter"></i>
                </Link>
                <Link to="/" class="main__login__socialMedia__figures__google">
                    <i class="bi bi-google"></i>
                </Link>
            </div>

        </div>
    );
}

export default LoginSocialMedia;