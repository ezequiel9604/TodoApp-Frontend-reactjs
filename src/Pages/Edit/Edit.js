
import "./scss-styles/stylesheet.scss";

function Edit() {
    return (
        <div className="main__container">

            <div className="main__section__form">

                <span className="main__section__form__title">Edit task:</span>

                <div className="main__section__form__inputs">

                    <input type="text" value="Eat a good breakfast. Lorem ipsum dolor sit amet consectetur adipisicing elit." />

                    <select>
                        <option defaultValue="">Select category</option>
                        <option defaultValue="">Health</option>
                    </select>

                    <select>
                        <option defaultValue="">Select frequency</option>
                        <option defaultValue="">Daily</option>
                    </select>

                    <input type="time" />

                </div>

                <div className="main__section__form__action">

                    <button className="main__section__form__action__edit" type="button">Update</button>

                </div>

            </div>
                
        </div>
    );
}

export default Edit;