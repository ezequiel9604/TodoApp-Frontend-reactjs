
import "./sass-styles/stylesheet.scss";

function Home(props) {
    return (
        <div>
            <div className="main__section__welcome">

                <div className="main__section__welcome__greeting">
                    <span>Good morning, <strong>John</strong></span>
                    <span>Today</span>
                    <span>22 July, 2022</span>
                </div>

                <div className="main__section__welcome__status">
                    <span>Completed 
                    <strong className="main__section_welcome__status_imcomplete">4</strong>/10</span>
                </div>

            </div>

            <div className="main__section__samples">

                <div className="main__section__samples__status">
                    <input type="checkbox" />
                </div>

                <div className="main__section__samples__description">
                    <time>7:00 am</time>
                    <div>
                        <p title="Eat a good breakfast. Lorem ipsum dolor sit amet consectetur adipisicing elit.">
                            Eat a good breakfast. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>Health</span>
                    </div>
                </div>

                <div className="main__section__samples__action">
                    <a href="#1">
                        <i className="bi bi-pencil"></i>
                    </a>
                    <button className="main__section__samples__action__deleteButton">
                        <i className="bi bi-trash"></i>
                    </button>              
                </div>
            </div>

            <div className="main__section__samples">

                <div className="main__section__samples__status">
                    <input type="checkbox" />
                </div>

                <div className="main__section__samples__description">
                    <time>7:00 am <br /> &nbsp; Tues</time>
                    <div>
                        <p title="Eat a good breakfast. Lorem ipsum dolor sit amet consectetur adipisicing elit.">Eat a good breakfast. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>Health</span>
                    </div>
                </div>

                <div className="main__section__samples__action">
                    <a href="#1">
                        <i className="bi bi-pencil"></i>
                    </a>
                    <button className="main__section__samples__action__deleteButton">
                        <i className="bi bi-trash"></i>
                    </button>
                    
                </div>
            </div>

            <div className="main__section__samples">

                <div className="main__section__samples__status">
                    <input type="checkbox" checked />
                </div>

                <div className="main__section__samples__description">
                    <time>24 Dec <br /> &nbsp;2022</time>
                    <div>
                        <p className="main__section__samples__description_completed" 
                            title="Eat a good breakfast. Lorem ipsum dolor sit amet consectetur adipisicing elit.">
                            Eat a good breakfast. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <span>Health</span>
                    </div>
                </div>

                <div className="main__section__samples__action">
                    <a href="#1">
                        <i className="bi bi-pencil"></i>
                    </a>
                    <button className="main__section__samples__action__deleteButton">
                        <i className="bi bi-trash"></i>
                    </button>
                    
                </div>
            </div>

            <div className="main__section__completed__banner">
                <figure className="main__section__completed__banner__image">
                    <i className="bi bi-emoji-wink-fill"></i>
                </figure>
                <span className="main__section__completed__banner__title">All done for today.</span>                
                <span className="main__section__completed__banner__subtitle">You can take a break.</span>
            </div>

        </div>
    );
}

export default Home;