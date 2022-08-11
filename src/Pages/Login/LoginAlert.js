

import "./scss-styles/loginalertstyle.scss";

function LoginAlert({ title, setResponse }) {

    function handleClose(){
        setResponse(null);
    }

    return (
        <div className="main__login__alert">
            <p>{title}</p>
            <button onClick={handleClose} type="button">
                <i className="bi bi-x"></i>
            </button>
        </div>
    );
}

export default LoginAlert;