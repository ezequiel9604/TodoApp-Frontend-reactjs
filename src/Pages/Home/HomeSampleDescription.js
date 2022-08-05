
function HomeSampleDescription(props) {
    return (
        <div className="main__section__samples__description">
            <time>{`${props.hour}:${props.minute<10? "0"+props.minute:props.minute }`} am</time>
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