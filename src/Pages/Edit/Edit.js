
import { useState } from "react";

import "./scss-styles/stylesheet.scss";

function Edit(props) {

    const taskid = parseInt(new URL(window.location.href).searchParams.get("taskId"))-1;
    const [taskDescription, setTaskDescription] = useState(props.tasks[taskid].description);
    const [taskCategory, setTaskCategory] = useState(props.tasks[taskid].category);
    const [taskFrequency, setTaskFrequency] = useState(props.tasks[taskid].frequency);
    const [taskHour, setTaskHour] = useState(
        new Date(props.tasks[taskid].year, props.tasks[taskid].month, props.tasks[taskid].day, 
        props.tasks[taskid].hour, props.tasks[taskid].minute, 0).toLocaleTimeString());

    const categories = [
        "Family",
        "Health",
        "Home",
        "Work",
    ];

    const frequencies = [
        "Daily",
        "Weekly",
        "Monthly",
    ];

    function handleSubmit(e){
        e.preventDefault();
        console.log("form submitted!");
    }

    return (
        <div className="main__container">

            <form onSubmit={handleSubmit} className="main__section__form">

                <span className="main__section__form__title">Edit task:</span>

                <div className="main__section__form__inputs">

                    <input type="text" defaultValue={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)} />

                    <select value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)}> 
                        {categories.map((value) => {
                            return (<option value={value} key={value}>{value}</option>);
                        })}
                    </select>

                    <select value={taskFrequency} onChange={(e) => setTaskFrequency(e.target.value)}>
                        {frequencies.map((value) => {
                            return (<option value={value} key={value}>{value}</option>);
                        })}
                    </select>

                    <input type="time" defaultValue={props.tasks[taskid].hour<10? "0"+taskHour:taskHour}
                        onChange={(e) => setTaskHour(e.target.value)} />

                </div>

                <div className="main__section__form__action">
                    <button type="submit" className="main__section__form__action__edit">Update</button>
                </div>

            </form>
                
        </div>
    );
}

export default Edit;