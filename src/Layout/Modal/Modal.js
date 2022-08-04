
import { useContext } from "react";
import { AppContext } from "../../context/Context";

import "./scss-styles/stylesheet.scss";

function Modal() {

    const { setModalWindOpen, handleModalDelete } = useContext(AppContext);

    function handleCancel(){
        setModalWindOpen(false);
    }

    function handleDelete(){
        handleModalDelete();
    }

    return (
        <div className="main__modal" id="main__modal">

            <div className="main__modal__message">

                <div className="main__modal__message__container">

                    <span className="main__modal__message__container__title">Are you sure want to delete the task?</span>

                    <div className="main__modal__message__container__action">

                        <button onClick={handleDelete} 
                            className="main__modal__message__container__action__acceptButton">Yes, delete</button>

                        <button onClick={handleCancel}
                            className="main__modal__message__container__action__cancelButton">No, cancel</button>

                    </div>

                </div>

            </div>

        </div>
    );
}

export default Modal;