
import "./sass-styles/stylesheet.scss";

function Header(props) {
    return (
        <header className="main__header">

            <div className="main__container">

                <div className="main__header__title__container">
                    
                    <h2 className="main__header__title__container__title">ThInGs ToDo</h2>

                    <div className="main__header__title__container__buttons">
                        <a className="main__header__title__container__buttons__addbutton" href="#1">
                            <i className="bi bi-plus"></i>
                        </a>
                        <div className="main__header__title__container__buttons__dropdown">
                            
                            <button id="header__dropdown__button"><i className="bi bi-person"></i></button>

                            <div className="main__header__title__container__buttons__dropdown__menu" id="header__dropdown__menu">
                                <a href="#1">Edit profile</a>
                                <a href="#1">Sign out</a>
                            </div>

                        </div>

                    </div>

                </div>

                <nav className="main__header__nav__container">

                    <div className="main__header__nav__container__searchinput">
                        <input type="text" placeholder="Search task..." />
                        <a href="#1"><i className="bi bi-search"></i></a>
                    </div>

                    <div className="main__header__nav__container__links">
                        <a className="main__header__nav__container__links__active" href="#1">Daily</a>
                        <a href="#2">Weekly</a>
                        <a href="#3">Monthly</a>
                    </div>

                </nav>

            </div>

        </header>
    );
}

export default Header;