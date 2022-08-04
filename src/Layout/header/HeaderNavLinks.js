
import { Link } from "react-router-dom";

function HeaderNavLinks() {
    return (
        <div className="main__header__nav__container__links">

            <Link to="/daliy" className="main__header__nav__container__links__active">Daily</Link>

            <Link to="/weekly">Weekly</Link>

            <Link to="/monthly">Monthly</Link>
            
        </div>
    );
}

export default HeaderNavLinks;