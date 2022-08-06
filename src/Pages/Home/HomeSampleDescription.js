
import { WeekDays, YearMonths } from "../../Helpers/Helpers";

function HomeSampleDescription(props) {


    function getHour(){
        const hour = new Date(props.year, props.month, props.day, props.hour, props.minute);

        if(props.hour >= 12)
            return `${(hour.getHours()<10)? '0'+hour.getHours():hour.getHours()}:${(hour.getMinutes()<10)? 
                '0'+hour.getMinutes():hour.getMinutes()} pm`;
        else
        return `${(hour.getHours()<10)? '0'+hour.getHours():hour.getHours()}:${(hour.getMinutes()<10)? 
            '0'+hour.getMinutes():hour.getMinutes()} am`;
    }

    function getRenderedTime(){
        let result;
        const d = new Date(props.year, props.month, props.day);
        
        if(props.frequency === "Daily"){
            result= (<time>{getHour()}</time>);
        }
        else if(props.frequency === "Weekly"){
            WeekDays.forEach((current, index)=>{
                if(index === (d.getDay()))
                    result= (<time>{getHour()} <br /> &nbsp;&nbsp;&nbsp; {current}</time>);
                
            });
        }
        else if(props.frequency === "Monthly"){
            YearMonths.forEach((current, index)=>{
                if(index === (props.month))
                    result= (<time>{`${d.getDate()} ${current}`}<br /> {props.year}</time>);
                
            });
        }
        return result;
    }

    return (
        <div className="main__section__samples__description">

            {getRenderedTime()}

            <div>
                <p className={props.status? "main__section__samples__description_completed": ""}
                    title={props.description}>
                    {props.description}
                </p>
                <span>{props.category}</span>
            </div>
        </div>
    );
}

export default HomeSampleDescription;