
import { useState } from "react";

import "./sass-styles/stylesheet.scss";

import LoginAlert from "../Login/LoginAlert";

import { 
    Days, 
    WeekDays,
    Categories, 
    YearMonths, 
    Frequencies, 
    getRenderedDate, 
    getRenderedTime,
    createDateWithStringTime } from "../../Helpers/Helpers";

import { CreateTask } from "../../Apis/TaskApi";

function Add({ user }) {

    const [description, setDescription] = useState("");
    const [frequency, setFrequency] = useState("Daily");
    const [category, setCategory] = useState("Family");
    const [date, setDate] = useState(new Date(new Date().getFullYear(),
        new Date().getMonth(), new Date().getDate(), 0, 0));
    const [response, setResponse] = useState(null);

    function handleDay(e){
        const dayofweek = e.target.value;
        // todo
    }

    function handleTime(e){
        const result = createDateWithStringTime(e.target.value, date.getFullYear(), 
            date.getMonth(), date.getDate());
        setDate(result);
    }

    function handleDate(e){
        const day = parseInt(e.target.value);
        const result = new Date(date.getFullYear(), date.getMonth(), day, 
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

    async function handleSubmit(e){
        e.preventDefault();
        
        const res = await CreateTask({
            description: description,
            frequency: frequency,
            category: category,
            hours: date.getHours(),
            minutes: date.getMinutes(),
            year: date.getFullYear(),
            month: date.getMonth(),
            day: date.getDate(),
            userId: user.id
        });

        setResponse(res);

    }

    return (
        <div className="main__container">

            <form onSubmit={handleSubmit} className="main__section__form">

                { response && <LoginAlert title={response.data} setResponse={setResponse} />}

                <span className="main__section__form__title">Add new task:</span>

                <div className="main__section__form__inputs">

                    <input type="text" onChange={(e) => setDescription(e.target.value)} 
                        defaultValue={description} placeholder="Type a description of your task" />

                    <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                        {Categories.map((current)=>{
                            return <option value={current} key={current}>{current}</option>;
                        })}
                    </select>

                    <select value={frequency} onChange={(e)=>setFrequency(e.target.value)}>
                        {Frequencies.map((current)=>{
                            return <option value={current} key={current}>{current}</option>;
                        })}
                    </select>

                    {getRenderedTime(Days, frequency, date, handleTime, handleDate)}

                    {getRenderedDate(WeekDays, YearMonths, frequency, date, handleDay, handleMonth)}

                </div>

                <div className="main__section__form__action">
                    <button type="submit" className="main__section__form__action__create">Create</button>
                </div>

            </form>
                
        </div>
    );
}

export default Add;