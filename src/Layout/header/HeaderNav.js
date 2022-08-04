
import { Link } from "react-router-dom";

import HeaderNavLinks from "./HeaderNavLinks";

function HeaderNav() {
    return (
        <nav className="main__header__nav__container">

            <div className="main__header__nav__container__searchinput">

                <input type="text" placeholder="Search task..." />

                <Link to="/search"><i className="bi bi-search"></i></Link>
                
            </div>

            <HeaderNavLinks />

        </nav>
    );
}

export default HeaderNav;