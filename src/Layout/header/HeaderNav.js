
import HeaderNavLinks from "./HeaderNavLinks";

function HeaderNav() {
    return (
        <nav className="main__header__nav__container">

            <div className="main__header__nav__container__searchinput">

                <input type="text" placeholder="Search task..." />

                <a href="#1"><i className="bi bi-search"></i></a>
                
            </div>

            <HeaderNavLinks />

        </nav>
    );
}

export default HeaderNav;