
import HomeSampleStatus from "./HomeSampleStatus";
import HomeSampleDescription from "./HomeSampleDescription";
import HomeSampleAction from "./HomeSampleAction";

function HomeSample(props) {
    
    return (
        <div className="main__section__samples">

            <HomeSampleStatus status={props.task.isCompleted} />

            <HomeSampleDescription 
                day={props.task.day}
                hour={props.task.hour}
                year={props.task.year}
                month={props.task.month}
                minute={props.task.minute}
                category={props.task.category}
                status={props.task.isCompleted}
                frequency={props.task.frequency}
                description={props.task.description} />

            <HomeSampleAction taskId={props.task.id} />
            
        </div>
    );
}

export default HomeSample;