
import "./sass-styles/stylesheet.scss";

import HomeSample from "./HomeSample";
import HomeBanner from "./HomeBanner";
import HomeWelcome from "./HomeWelcome";

function Home(props) {
    return (
        <div className="main__container">

            <HomeWelcome />

            <div className="main__section__samples__container">

                <HomeSample />

            </div>

            <HomeBanner />

        </div>
    );
}

export default Home;