import 'bootstrap/dist/css/bootstrap.min.css';
import Intro from './components/intro/Intro';
import StepTrackerOverview from './components/steptracker/StepTrackerOverview';

const ComponentsOverview = () => {
    return (
        <>
            <div className="d-flex flex-column" style={{ height: "100vh", width: "calc(100vw - 300px)", overflowY: "auto", padding: "20px" }}>
                <Intro />
                <hr />
                <StepTrackerOverview />
            </div>
        </>

    );
};

export default ComponentsOverview;