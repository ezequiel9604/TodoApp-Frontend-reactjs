
import { WeekDays, YearMonths, getRenderedSampleTime } from "../../Helpers/Helpers";

function HomeSampleDescription({ day, hour, year, minute, month, category, status, frequency, description}) {


    return (
        <div className="main__section__samples__description">

            {getRenderedSampleTime(WeekDays, YearMonths, frequency, year, month, day, hour, minute)}

            <div>
                <p className={status? "main__section__samples__description_completed": ""}
                    title={description}>
                    {description}
                </p>
                <span>{category}</span>
            </div>
        </div>
    );
}

export default HomeSampleDescription;