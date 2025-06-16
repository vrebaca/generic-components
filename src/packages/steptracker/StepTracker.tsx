import React from 'react';
import { Steps } from 'antd';
import './StepTracker.css';
import { IStepTracker } from './Models/IStepTracker';

type Props = {
    stepTracker: IStepTracker;
    onStepSelected?: (step: number) => void;
}

const StepTracker: React.FC<Props> = (props) => {
    const steps = props.stepTracker.Steps.map((step, index) => {
        return {
            title: step.Title,
            style: { cursor: `${props.stepTracker.CurrentStep > index ? "pointer" : ""}` },
            onClick: () => {
                if (props.stepTracker.CurrentStep <= index) return;
                if (step.CurrentUrl) {
                    if (props.onStepSelected) {
                        props.onStepSelected(index)
                    }
                }
            }
        };
    });
    return (
        <Steps
            style={{ marginTop: props.stepTracker.MarginTop ?? "", marginBottom: props.stepTracker.MarginBottom ?? "", paddingRight: props.stepTracker.PaddingRight ?? "" }}
            current={props.stepTracker.CurrentStep}
            items={steps}
        />
    );
};

export default StepTracker;