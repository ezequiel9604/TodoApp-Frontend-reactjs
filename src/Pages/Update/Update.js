
import { Link } from "react-router-dom";

import LoginSubtitle from "../Login/LoginSubtitle";

function Update() {

    function handleSubmit(e){
        e.preventDefault();
        
    }

    return (
        <form onSubmit={handleSubmit} className="main__login">

            <div className="main__login__title">
                PASSWORD UPDATED
            </div>

            <div className="main__login__image">
                <figure>
                    <i className="bi bi-check-circle-fill"></i>
                </figure>
            </div>

            <LoginSubtitle title="Your password has been updated!" />

            <div className="main__login__action">
                <Link to="/login" className="main__login__action__login">LOG IN</Link>
            </div>

        </form>
    );
}

export default Update;