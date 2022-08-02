
import "./scss-styles/stylesheet.scss";

function Account() {
    return (
        <div class="main__container">

            <div class="main__section__form">

                <span class="main__section__form__title">Edit account:</span>

                <div class="main__section__form__inputs">

                    <input type="text" defaultValue="John Doe" placeholder="Enter full name" />

                    <input type="email" defaultValue="johndoe01@gmail.com" placeholder="Enter email address" />

                    <input type="password" defaultValue="" placeholder="Old password" />

                    <input type="password" defaultValue="" placeholder="New password" />

                </div>

                <div class="main__section__form__action">

                    <button class="main__section__form__action__edit" type="button">Update</button>

                </div>

            </div>
                
        </div>
    );
}

export default Account;