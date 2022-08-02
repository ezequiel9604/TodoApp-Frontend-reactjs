
function HomeWelcome() {
    return (
        <div className="main__section__welcome">

            <div className="main__section__welcome__greeting">
                <span>Good morning, <strong>John</strong></span>
                <span>Today</span>
                <span>22 July, 2022</span>
            </div>

            <div className="main__section__welcome__status">
                <span>Completed &nbsp;
                <strong className="main__section_welcome__status_imcomplete">4</strong> / 10</span>
            </div>

        </div>
    );
}

export default HomeWelcome;