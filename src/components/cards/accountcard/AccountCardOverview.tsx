import React from 'react';
import { DFlex } from '../../common/Containers';
import { ComponentBadge } from '../../common/badges/Badges';
import { Card, Table } from 'antd';
import { CopyBlock } from 'react-code-blocks';
import AccountIbox from './AccountIbox';
import PropertyDescription from '../../common/antd/tables/PropertyDescription';

const AccountCardOverview: React.FC = () => {

    const code = `<AccountIbox
    key={"unique-key"}
    Id={posoperatorid}
    Description={description}
    LargeHeaderTitle={posoperatorname}
    HeaderTitle={title}
    IsSelected={set-condition}
    IsCheckboxEnabled={set-condition}
    IsExpanderEnabled={set-condition}
    ExpanderContent={"Here is some default content for expander"}
    onItemChange={onItemChange}
    onItemSelected={onItemSelected} />
`;

    const dataSource = [
        {
            key: '1',
            description: <PropertyDescription
                properyName='stepTracker'
                propertyType='string'
                isRequired={true}
                description='Object that contains all StepTracker data configuration. dsandashndjkashdjkas skldnasklndklasnd asdnkasdnaslkd asdklasndklas dasdnaslkdnas dasndklas'
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

    return (
        <>
            <DFlex>
                <h4>AccountIbox <ComponentBadge /></h4>
                <p>Here goes some description for AccountIbox component.</p>
                <Card title="Step tracker preview" variant="borderless">
                    <AccountIbox
                        Id='1'
                        IsCheckboxEnabled={true}
                        IsExpanderEnabled={true}
                        ExpanderContent={<p>Here is some default content for expander</p>}
                        LargeHeaderTitle='Fiskaltrust'
                        HeaderTitle='POS operator'
                        Description='Alpenstrasse 99, 5020 Salzburg' />
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

export default AccountCardOverview;