
import { Link } from "react-router-dom";

function LoginSocialMedia() {
    return (
        <div className="main__login__socialMedia">

            <span>Log in using social media.</span>

            <div className="main__login__socialMedia__figures">
                <Link to="/" className="main__login__socialMedia__figures__facebook">
                    <i className="bi bi-facebook"></i>
                </Link>
                <Link to="/" className="main__login__socialMedia__figures__twitter">
                    <i className="bi bi-twitter"></i>
                </Link>
                <Link to="/" className="main__login__socialMedia__figures__google">
                    <i className="bi bi-google"></i>
                </Link>
            </div>

        </div>
    );
}

export default LoginSocialMedia;