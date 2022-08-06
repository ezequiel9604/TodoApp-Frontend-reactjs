
import { useState } from "react";

import "./scss-styles/stylesheet.scss";

import { 
    Days,
    WeekDays,
    YearMonths,
    Categories, 
    Frequencies,
    getRenderedTime,
    getRenderedDate, 
    createDateWithStringTime} from "../../Helpers/Helpers";

function Edit({ tasks }) {

    const tskid = parseInt(new URL(window.location.href).searchParams.get("taskId"))-1;
    const [taskDescription, setTaskDescription] = useState(tasks[tskid].description);
    const [taskCategory, setTaskCategory] = useState(tasks[tskid].category);
    const [taskFrequency, setTaskFrequency] = useState(tasks[tskid].frequency);
    const [taskDate, setTaskDate] = useState(new Date(tasks[tskid].year, tasks[tskid].month, 
        tasks[tskid].day, tasks[tskid].hour, tasks[tskid].minute, 0));

    
    function handleDay(e){
        // TODO
    }

    function handleMonth(e){
        let month;
        YearMonths.forEach((current, index)=>{
            if(current === e.target.value)
                month = index;
        });
        const result = new Date(taskDate.getFullYear(), month, taskDate.getDate(), 
            taskDate.getHours(), taskDate.getMinutes());

        setTaskDate(result);
    }

    function handleDate(e){
        const day = parseInt(e.target.value);
        const result = new Date(taskDate.getFullYear(), taskDate.getMonth(), day, 
            taskDate.getHours(), taskDate.getMinutes());
        setTaskDate(result);
    }

    function handleTime(e){
        const result = createDateWithStringTime(e.target.value, taskDate.getFullYear(), 
            taskDate.getMonth(), taskDate.getDate());
        setTaskDate(result);
    }

    function handleSubmit(e){
        e.preventDefault();
        
        const data = {
            id: tasks[tskid].id,
            description: taskDescription,
            category: taskCategory,
            frequency: taskFrequency,
            hours: taskDate.getHours(),
            minutes: taskDate.getMinutes(),
            year: taskDate.getFullYear(),
            month: taskDate.getMonth(),
            day: taskDate.getDate()
        };

        console.log(data)
    }


    return (
        <div className="main__container">

            <form onSubmit={handleSubmit} className="main__section__form">

                <span className="main__section__form__title">Edit task:</span>

                <div className="main__section__form__inputs">

                    <input type="text" defaultValue={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)} />

                    <select value={taskCategory} onChange={(e) => setTaskCategory(e.target.value)}> 
                        {Categories.map((current) => {
                            return (<option value={current} key={current}>{current}</option>);
                        })}
                    </select>

                    <select value={taskFrequency} onChange={(e) => setTaskFrequency(e.target.value)}>
                        {Frequencies.map((current) => {
                            return (<option value={current} key={current}>{current}</option>);
                        })}
                    </select>

                    {getRenderedTime(Days, taskFrequency, taskDate, handleTime, handleDate)}

                    {getRenderedDate(WeekDays, YearMonths, taskFrequency, taskDate, handleDay, handleMonth)}

                </div>

                <div className="main__section__form__action">
                    <button type="submit" className="main__section__form__action__edit">Update</button>
                </div>

            </form>
                
        </div>
    );
}

export default Edit;