
import { useState, useContext } from "react";
import { AppContext } from "../../context/Context";

import HeaderNavLinks from "./HeaderNavLinks";

function HeaderNav() {

    const { handleSearchTask } = useContext(AppContext);
    const [search, setSearch] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        handleSearchTask(search);
    }

    return (
        <nav className="main__header__nav__container">

            <div className="main__header__nav__container__searchinput">
                <input defaultValue={search} onChange={(e) => setSearch(e.target.value)} 
                    type="text" placeholder="Search task..." />
                <button onClick={handleSubmit} type="button">
                    <i className="bi bi-search"></i>
                </button>        
            </div>

            <HeaderNavLinks />

        </nav>
    );
}

export default HeaderNav;