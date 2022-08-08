
import { useState } from "react";

function HomeSampleStatus({ status }) {

    const [taskStatus, setTaskStatus] = useState(status);

    function handleStatus(){
        setTaskStatus(!status);
        console.log(taskStatus);
    }

    return (
        <div className="main__section__samples__status">
            <input onChange={handleStatus} defaultChecked={status} type="checkbox" />
        </div>
    );
}

export default HomeSampleStatus;