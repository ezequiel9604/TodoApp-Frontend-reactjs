
import { useMemo } from "react";

import "./sass-styles/stylesheet.scss";

import HomeWelcome from "./HomeWelcome";
import HomeSample from "./HomeSample";
import HomeBanner from "./HomeBanner";

function Home({ user, frequency,  tasks }) {

    const renderHomeBanner = useMemo(() => {
        if(frequency === "Daily")
            return <HomeBanner title="All done for today" subtitle="You can take a break" />;
        else if(frequency === "Weekly")
            return <HomeBanner title="You have no task for this week" subtitle="No pressure for the moment" />;
        else if(frequency === "Monthly")
            return <HomeBanner title="No appoiments for the rest of the year" subtitle="It's a strange year isn't it" />
    }, [frequency]);

    return (
        <div className="main__container">

            <HomeWelcome 
                user={user} 
                tasks={tasks} />

            <div className="main__section__samples__container">

                {tasks.length > 0?
                    tasks.map((current)=>{
                        return <HomeSample task={current} key={current.id} />;
                    })
                    :
                    renderHomeBanner
                }

            </div>

        </div>
    );
}

export default Home;