
import "./sass-styles/stylesheet.scss";

import HomeWelcome from "./HomeWelcome";
import HomeSample from "./HomeSample";
import HomeBanner from "./HomeBanner";

function Home({ user, tasks }) {

    return (
        <div className="main__container">

            <HomeWelcome 
                user={user} 
                tasks={tasks} />

            <div className="main__section__samples__container">

                {tasks.length > 0?
                    tasks.map((value)=>{
                        return <HomeSample task={value} key={value.id} />;
                    })
                    :
                    <HomeBanner />
                }

            </div>

        </div>
    );
}

export default Home;