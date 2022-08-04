
import { Link } from "react-router-dom";

function ForgotSocialMedia() {
    return (
        <div class="main__login__socialMedia">
            <span>Go back to&nbsp;
                <Link to="/login">Log in now</Link>.</span>
        </div>
    );
}

export default ForgotSocialMedia;