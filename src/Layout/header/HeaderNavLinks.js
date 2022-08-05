
import { Link } from "react-router-dom";

function HeaderNavLinks() {

    const path = new URL(window.location.href).pathname;

    return (
        <div className="main__header__nav__container__links">

            <Link to="/daily" 
                className={path==="/daily" || path==="/"? "main__header__nav__container__links__active":""}>Daily</Link>

            <Link to="/weekly" 
                className={path==="/weekly"?"main__header__nav__container__links__active":""}>Weekly</Link>

            <Link to="/monthly" 
                className={path==="/monthly"?"main__header__nav__container__links__active":""}>Monthly</Link>
            
        </div>
    );
}

export default HeaderNavLinks;