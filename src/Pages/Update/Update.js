
import UpdateAction from "./UpdateAction";
import LoginSubtitle from "../Login/LoginSubtitle";

function Update() {
    return (
        <div class="main__login">

            <div class="main__login__title">
                PASSWORD UPDATED
            </div>

            <div class="main__login__image">
                <figure>
                    <i class="bi bi-check-circle-fill"></i>
                </figure>
            </div>

            <LoginSubtitle title="Your password has been updated!" />

            <UpdateAction />

        </div>
    );
}

export default Update;