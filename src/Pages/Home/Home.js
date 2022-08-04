
import "./sass-styles/stylesheet.scss";

import HomeWelcome from "./HomeWelcome";

function Home(props) {

    return (
        <div className="main__container">

            <HomeWelcome />

            {props.children}

        </div>
    );
}

export default Home;