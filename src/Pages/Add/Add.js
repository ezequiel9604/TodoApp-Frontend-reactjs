
import "./sass-styles/stylesheet.scss";

function Add() {
    return (
        <div className="main__container">

            <div className="main__section__form">

                <span className="main__section__form__title">Add new task:</span>

                <div className="main__section__form__inputs">

                    <input type="text" placeholder="Type a description of your task" />

                    <select>
                        <option defaultValue="">Select category</option>
                    </select>

                    <select>
                        <option defaultValue="">Select frequency</option>
                    </select>

                    <input type="time" />

                </div>

                <div className="main__section__form__action">
                    <button className="main__section__form__action__create" type="button">Create</button>
                </div>

            </div>
                
        </div>
    );
}

export default Add;