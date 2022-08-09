
import { useState, useEffect } from "react";

import "./scss-styles/stylesheet.scss";

import { 
    Days,
    WeekDays,
    YearMonths,
    Categories, 
    Frequencies,
    getRenderedTime,
    getRenderedDate, 
    createDateWithStringTime } from "../../Helpers/Helpers";

import { GetSelectedTask, GetTaskByUserId, EditTask } from "../../Apis/TaskApi";

function Edit({ user, tasks }) {

    const taskid = parseInt(new URL(window.location.href).searchParams.get("taskId"));
    const [taskDescription, setTaskDescription] = useState("");
    const [taskCategory, setTaskCategory] = useState("");
    const [taskFrequency, setTaskFrequency] = useState("");
    const [taskDate, setTaskDate] = useState(new Date(0, 0, 0, 0, 0));
    const [taskSelectedId, setTaskSelectedId] = useState(0);

    useEffect(() => {

        async function fetchData() {
            let userTasks;
            let selectedTask;
            if(tasks)
                userTasks = [...tasks];
            else
                userTasks = await GetTaskByUserId(user.id);

            selectedTask = GetSelectedTask(userTasks, taskid);
            
            setTaskSelectedId(selectedTask.id);
            setTaskDescription(selectedTask.description);
            setTaskCategory(selectedTask.category);
            setTaskFrequency(selectedTask.frequency);
            setTaskDate(new Date(selectedTask.year, selectedTask.month, 
                selectedTask.day, selectedTask.hour, selectedTask.minute, 0));

        }

        fetchData();   

    }, []);

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

    async function handleSubmit(e){
        e.preventDefault();

        const res = await EditTask({
            id: taskSelectedId,
            description: taskDescription,
            category: taskCategory,
            frequency: taskFrequency,
            hours: taskDate.getHours(),
            minutes: taskDate.getMinutes(),
            year: taskDate.getFullYear(),
            month: taskDate.getMonth(),
            day: taskDate.getDate()
        });

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