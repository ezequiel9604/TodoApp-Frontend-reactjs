
import { Link } from "react-router-dom";

import "./sass-styles/stylesheet.scss";

import HeaderButtons from "./HeaderButtons";
import HeaderNav from "./HeaderNav";

function Header() {

    return (
        <header className="main__header">

            <div className="main__container">

                <div className="main__header__title__container">
                    
                    <Link to="/" className="main__header__title__container__title">ThInGs ToDo</Link>

                    <HeaderButtons />

                </div>

                <HeaderNav />

            </div>

        </header>
    );
}

export default Header;