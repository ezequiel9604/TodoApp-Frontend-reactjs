

function HomeWelcome({ user, tasks }) {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    function getFormatedDate(){
        const t = new Date();
        return `${t.getDate()} ${monthNames[t.getMonth()]}, ${t.getFullYear()}`;
    }

    function getCompletedTasks(){
        const counter = [...tasks].filter((value)=>{
            return value.isCompleted === true;
        }).length;
        return counter;
    }

    return (
        <div className="main__section__welcome">

            <div className="main__section__welcome__greeting">
                <span>Good morning, <strong> { user.name } </strong></span>
                <span>Today</span>
                <span>{getFormatedDate()}</span>
            </div>

            <div className="main__section__welcome__status">
                <span>Completed &nbsp;
                <strong className="main__section_welcome__status_imcomplete">
                    {getCompletedTasks()}
                </strong> / {tasks.length}</span>
            </div>

        </div>
    );
}

export default HomeWelcome;