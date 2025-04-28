import React from 'react';
import { IStepTracker } from './Models/IStepTracker';
import StepTracker from './StepTracker';
import './StepTracker.css';
import { CopyBlock } from 'react-code-blocks';
import { DFlex } from '../common/Containers';
import { Card, Table } from 'antd';
import { ComponentBadge } from '../common/badges/Badges';
import PropertyDescription from '../common/antd/tables/PropertyDescription';

const code = `const stepTracker: IStepTracker = {
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
    const dataSource = [
        {
            key: '1',
            description: <PropertyDescription
                properyName='stepTracker'
                propertyType='string'
                isRequired={true}
                description='Object that contains all StepTracker data configuration.'
            />
        },
        {
            key: '2',
            description: <PropertyDescription
                properyName='onStepSelected'
                propertyType='(step: number) => void'
                isRequired={true}
                description='Function that is triggered when it is cliecked on a step. The step number is passed as a parameter.'
            />
        }
    ];
    const columns = [
        {
            title: 'Step tracker',
            dataIndex: 'description',
            key: 'description',
        },
    ];
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
        <>
            <DFlex>
                <h4>Step tracker <ComponentBadge /></h4>
                <p>The step tracker is used in all scenarios where the user needs to complete between 3 and 7 steps. It provides a clear visual indication of the user's current position within the process.
                    Only completed steps are clickable, allowing the user to navigate back to the configured URL. Additionally, the step tracker supports an optional parameter, onStepSelected, which enables custom actions to be executed when a step is clicked.</p>
                <p>Step tracker is responsive and will adapt to the screen size.</p>
                <p>I will add some techical details here for all properties that are configureable.</p>
                <Card title="Step tracker preview" variant="borderless">
                    <StepTracker stepTracker={stepTracker} />
                </Card>
                <br />
                <br />
                <Table dataSource={dataSource} columns={columns} pagination={false} />
            </DFlex>
            <DFlex>
                <CopyBlock
                    text={code}
                    language={"typescript"}
                    showLineNumbers
                />
            </DFlex>
        </>
    );
};

export default StepTrackerOverview;