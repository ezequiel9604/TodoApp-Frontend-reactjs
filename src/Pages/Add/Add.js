
import { useState } from "react";

import "./sass-styles/stylesheet.scss";

function Add() {

    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [frequency, setFrequency] = useState("");
    const [time, setTime] = useState("00:00");

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

                <span className="main__section__form__title">Add new task:</span>

                <div className="main__section__form__inputs">

                    <input type="text" onChange={(e) => setDescription(e.target.value)} 
                        defaultValue={description} placeholder="Type a description of your task" />

                    <select value={category} onChange={(e)=>setCategory(e.target.value)}>
                        {categories.map((current)=>{
                            return <option value={current} key={current}>{current}</option>;
                        })}
                    </select>

                    <select value={frequency} onChange={(e)=>setFrequency(e.target.value)}>
                        {frequencies.map((current)=>{
                            return <option value={current} key={current}>{current}</option>;
                        })}
                    </select>

                    <input type="time" defaultValue={time} onChange={(e)=>setTime(e.target.value)} />

                </div>

                <div className="main__section__form__action">
                    <button type="submit" className="main__section__form__action__create">Create</button>
                </div>

            </form>
                
        </div>
    );
}

export default Add;