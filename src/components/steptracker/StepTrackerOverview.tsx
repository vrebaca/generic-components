import React from 'react';
import { IStepTracker } from './Models/IStepTracker';
import StepTracker from './StepTracker';
import './StepTracker.css';
import { CodeBlock, CopyBlock } from 'react-code-blocks';
import { PrimaryButton } from '../buttons/Buttons';

const code = `
const stepTracker: IStepTracker = {
        CurrentStep: 1,
        MarginTop: "20px",
        MarginBottom: "20px",
        PaddingRight: "20px",
        IsTextReduced: false,
        Steps: [{
            NextPageUrl: "#",
            Title: "Step 1",
            CurrentUrl: "#"
        },
        {
            NextPageUrl: "#",
            Title: "Step 2",
            CurrentUrl: "#"
        },
        {
            NextPageUrl: "#",
            Title: "Step 3",
            CurrentUrl: "#"
        }, {
            NextPageUrl: "#",
            Title: "Step 4",
            CurrentUrl: "#"
        }]
    };
    <StepTracker stepTracker={stepTracker} />
`;

const StepTrackerOverview: React.FC = () => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const stepTracker: IStepTracker = {
        CurrentStep: 1,
        MarginTop: "20px",
        MarginBottom: "20px",
        PaddingRight: "20px",
        IsTextReduced: false,
        Steps: [{
            NextPageUrl: "#",
            Title: "Step 1",
            CurrentUrl: "#"
        },
        {
            NextPageUrl: "#",
            Title: "Step 2",
            CurrentUrl: "#"
        },
        {
            NextPageUrl: "#",
            Title: "Step 3",
            CurrentUrl: "#"
        }, {
            NextPageUrl: "#",
            Title: "Step 4",
            CurrentUrl: "#"
        }]
    };
    return (
        <div id="steptracker">
            <h4>Step tracker</h4>
            <p>The step tracker is used in all scenarios where the user needs to complete between 3 and 7 steps. It provides a clear visual indication of the user's current position within the process.
                Only completed steps are clickable, allowing the user to navigate back to the configured URL. Additionally, the step tracker supports an optional parameter, onStepSelected, which enables custom actions to be executed when a step is clicked.</p>
            <p>Step tracker is responsive and will adapt to the screen size.</p>
            <p>I will add some techical details here for all properties that are configureable.</p>

            <StepTracker stepTracker={stepTracker} />
            <br />
            <PrimaryButton onClick={() => setIsExpanded(!isExpanded)}>
                Show code
            </PrimaryButton>
            <br />
            <br />
            <div className="collapse" id="collapseExample" style={{ display: `${isExpanded ? "block" : "none"}` }}>
                <CopyBlock
                    text={code}
                    language={"typescript"}
                    showLineNumbers
                />
            </div>
        </div>
    );
};

export default StepTrackerOverview;