
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../context/Context";

function HomeSampleAction(props) {

    const { setModalWindOpen } = useContext(AppContext);

    function handleDelete(){
        setModalWindOpen(true);
    }

    return (
        <div className="main__section__samples__action">
            <Link to={"/edit?taskId="+props.taskId}>
                <i className="bi bi-pencil"></i>
            </Link>
            <button onClick={handleDelete} className="main__section__samples__action__deleteButton">
                <i className="bi bi-trash"></i>
            </button>              
        </div>
    );
    
}

export default HomeSampleAction;