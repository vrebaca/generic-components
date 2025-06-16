import React from 'react';
import StepTracker from '../../packages/steptracker/StepTracker';
import { CopyBlock } from 'react-code-blocks';
import { Card, Table } from 'antd';
import PropertyDescription from '../../packages/antd/tables/PropertyDescription';
import { ComponentBadge } from '../../packages/badges/AntdBadges';
import { ContentWrapper, PageWrapper } from '../../packages/containers/Containers';
import { IStepTracker } from '../../packages/steptracker/Models/IStepTracker';

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
        <PageWrapper>
            <ContentWrapper>
                <div>
                    <h4>Step tracker <ComponentBadge /></h4>
                    <p>The Step Tracker component is designed for scenarios where users need to complete a sequence of 3 to 7 steps. It provides a clear visual representation of the user's progress within the process. Only completed steps are clickable, allowing users to navigate back to their respective URLs. This ensures a guided and intuitive user experience.</p>
                    <p>The component also supports an optional parameter, <code>onStepSelected</code>, which allows developers to define custom actions when a step is clicked. This adds flexibility for handling specific interactions based on user actions.</p>
                    <p>Additionally, the Step Tracker is fully responsive, adapting seamlessly to different screen sizes to ensure usability across devices.</p>
                    <p>Below, you will find technical details for all configurable properties of the Step Tracker component.</p>
                    <Card title="Step tracker preview" variant="borderless">
                        <StepTracker stepTracker={stepTracker} />
                    </Card>
                    <br />
                    <br />
                    <Table dataSource={dataSource} columns={columns} pagination={false} />
                </div>
                <div>
                    <CopyBlock
                        text={code}
                        language={"typescript"}
                        showLineNumbers
                    />
                </div>
            </ContentWrapper>
        </PageWrapper>
    );
};

export default StepTrackerOverview;