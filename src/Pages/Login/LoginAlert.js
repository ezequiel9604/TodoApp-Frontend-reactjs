

import "./scss-styles/loginalertstyle.scss";

function LoginAlert({ title, setResponse, type }) {

    function handleClose(){
        setResponse(null);
    }

    return (
        <div className={type==="warning"?"main__login__alert__warning":"main__login__alert__success"}>
            <p>{title}</p>
            <button onClick={handleClose} type="button">
                <i className="bi bi-x"></i>
            </button>
        </div>
    );
}

export default LoginAlert;