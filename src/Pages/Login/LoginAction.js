
import { Link } from "react-router-dom";

function LoginAction() {
    return (
        <div class="main__login__action">
            <button class="main__login__action__login">LOG IN</button>
            <span><Link to="/">Forgot password?</Link></span>
            <span>New here? <Link to="/">Register now</Link></span>
        </div>
    );
}

export default LoginAction;