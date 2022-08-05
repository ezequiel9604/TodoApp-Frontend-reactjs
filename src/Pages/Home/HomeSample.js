
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
                minute={props.task.minute}
                month={props.task.month}
                category={props.task.category}
                status={props.task.isCompleted}
                description={props.task.description} />

            <HomeSampleAction taskId={props.task.id} />
            
        </div>
    );
}

export default HomeSample;