import { useState } from "react";
import { Link } from "react-router-dom";

import { LogOutUser } from "../../Apis/UserApi";

function HeaderButtons() {

    const [dropdownMenuOpen, setDropdownMenuOpen] = useState(false);

    function handleDropdownMenuOpen(){
        setDropdownMenuOpen(!dropdownMenuOpen);
    }

    function handleSignout(e){
        e.preventDefault();
       
        LogOutUser();  
    }

    return (
        <div className="main__header__title__container__buttons">

            <Link to="/add" className="main__header__title__container__buttons__addbutton">
                <i className="bi bi-plus"></i>
            </Link>
            
            <div className="main__header__title__container__buttons__dropdown">
                
                <button onClick={handleDropdownMenuOpen}>
                    <i className="bi bi-person"></i> 
                </button>

                <div className="main__header__title__container__buttons__dropdown__menu" 
                    style={{ display: (dropdownMenuOpen)? "block":"none" }}>

                    <Link to="/editaccount">Edit account</Link>
                    
                    <Link onClick={handleSignout} to="/signout">Sign out</Link>
                    
                </div>

            </div>

        </div>
    );
}

export default HeaderButtons;