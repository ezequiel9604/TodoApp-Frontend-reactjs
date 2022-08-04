
import { Link } from "react-router-dom";

function RegisterSocialMedia() {
    return (
        <div class="main__login__socialMedia">

            <span>Already have an account?&nbsp;
                <Link to="/login">Log in now</Link>.</span>

        </div>
    );
}

export default RegisterSocialMedia;