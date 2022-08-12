
import { useState, useEffect } from "react";

import "./scss-styles/stylesheet.scss";
import LoginAlert from "../Login/LoginAlert";

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
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [frequency, setFrequency] = useState("");
    const [date, setDate] = useState(new Date(0, 0, 0, 0, 0));
    const [selectedId, setSelectedId] = useState(0);
    const [response, setResponse] = useState(null);

    useEffect(() => {

        async function fetchData() {
            let userTasks;
            let selectedTask;
            if(tasks)
                userTasks = [...tasks];
            else
                userTasks = await GetTaskByUserId(user.id);

            selectedTask = GetSelectedTask(userTasks, taskid);
            
            setSelectedId(selectedTask.id);
            setDescription(selectedTask.description);
            setCategory(selectedTask.category);
            setFrequency(selectedTask.frequency);
            setDate(new Date(selectedTask.year, selectedTask.month, 
                selectedTask.day, selectedTask.hour, selectedTask.minute, 0));

        }

        fetchData();   

    }, []);

    function handleDay(e){
        const dayofweek = e.target.value;
        const diff = dayofweek - date.getDay();
        const result = new Date(date.getFullYear(), date.getMonth(), (date.getDate() + diff), 
            date.getHours(), date.getMinutes());
        setDate(result);
    }

    function handleMonth(e){
        let month;
        YearMonths.forEach((current, index)=>{
            if(current === e.target.value)
                month = index;
        });
        const result = new Date(date.getFullYear(), month, date.getDate(), 
            date.getHours(), date.getMinutes());

        setDate(result);
    }

    function handleDate(e){
        const day = parseInt(e.target.value);
        const result = new Date(date.getFullYear(), date.getMonth(), day, 
            date.getHours(), date.getMinutes());
        setDate(result);
    }

    function handleTime(e){
        const result = createDateWithStringTime(e.target.value, date.getFullYear(), 
            date.getMonth(), date.getDate());
        setDate(result);
    }

    async function handleSubmit(e){
        e.preventDefault();

        const res = await EditTask({
            id: selectedId,
            description: description,
            category: category,
            frequency: frequency,
            hours: date.getHours() === 0? 12:date.getHours(),
            minutes: date.getMinutes() === 0? 12:date.getMinutes(),
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate()
        });

        setResponse(res);
    }


    return (
        <div className="main__container">

            <form onSubmit={handleSubmit} className="main__section__form">

                { response && <LoginAlert title={response.data} type="warning" setResponse={setResponse} />}

                <span className="main__section__form__title">Edit task:</span>

                <div className="main__section__form__inputs">

                    <input type="text" defaultValue={description}
                        onChange={(e) => setDescription(e.target.value)} />

                    <select value={category} onChange={(e) => setCategory(e.target.value)}> 
                        {Categories.map((current) => {
                            return (<option value={current} key={current}>{current}</option>);
                        })}
                    </select>

                    <select value={frequency} onChange={(e) => setFrequency(e.target.value)}>
                        {Frequencies.map((current) => {
                            return (<option value={current} key={current}>{current}</option>);
                        })}
                    </select>

                    {getRenderedTime(Days, frequency, date, handleTime, handleDate)}

                    {getRenderedDate(WeekDays, YearMonths, frequency, date, handleDay, handleMonth)}

                </div>

                <div className="main__section__form__action">
                    <button type="submit" className="main__section__form__action__edit">Update</button>
                </div>

            </form>
                
        </div>
    );
}

export default Edit;