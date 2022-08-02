
import HomeSampleStatus from "./HomeSampleStatus";
import HomeSampleDescription from "./HomeSampleDescription";
import HomeSampleAction from "./HomeSampleAction";

function HomeSample() {
    return (
        <div className="main__section__samples">

            <HomeSampleStatus />

            <HomeSampleDescription />

            <HomeSampleAction />
            
        </div>
    );
}

export default HomeSample;