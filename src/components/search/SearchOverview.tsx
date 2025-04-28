import React, { useState } from 'react';
import { DFlex } from '../common/Containers';
import { ComponentBadge } from '../common/badges/Badges';
import { Card, Table } from 'antd';
import Search from './Search';
import { CopyBlock } from 'react-code-blocks';
import PropertyDescription from '../common/antd/tables/PropertyDescription';

const dataSource = [
    {
        key: '1',
        description: <PropertyDescription
            properyName='onChange'
            propertyType='(event: React.ChangeEvent<HTMLInputElement>) => void'
            isRequired={true}
            description='Callback triggered when the input value changes.'
        />
    },
    {
        key: '3',
        description: <PropertyDescription
            properyName='placeholder'
            propertyType='string'
            isRequired={true}
            description='Placeholder text for the input field.'
        />
    },
    {
        key: '2',
        description: <PropertyDescription
            properyName='onClearText'
            propertyType='() => void'
            isRequired={false}
            description='Callback triggered when the clear action is performed.'
        />
    },
    {
        key: '4',
        description: <PropertyDescription
            properyName='value'
            propertyType='string'
            isRequired={false}
            description='The current value of the input field.'
        />
    },
    {
        key: '5',
        description: <PropertyDescription
            properyName='debounceTime'
            propertyType='number'
            isRequired={false}
            description='Time in milliseconds to debounce the onChange callback.'
        />
    },
    {
        key: '6',
        description: <PropertyDescription
            properyName='aria'
            propertyType='string'
            isRequired={false}
            description='Accessibility label for the input field.'
        />
    },
    {
        key: '7',
        description: <PropertyDescription
            properyName='isclear'
            propertyType='boolean'
            isRequired={false}
            description='Boolean to reset the input field.'
        />
    }
];

const columns = [
    {
        title: 'Search Properties',
        dataIndex: 'description',
        key: 'description',
    },
];

const SearchOverview: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [clearFilter, setClearFilter] = useState<boolean>(false);

    const code = `<Search
        placeholder='Search...'
        onChange={(e) => console.log(e.target.value)}
        onClearText={() => console.log('Clear text')}
        value=''
        isclear={false}
        debounceTime={300}
    />`;

    return (
        <>
            <DFlex>
                <h4>Search <ComponentBadge /></h4>
                <p>The Search component is a reusable React component designed for implementing a search bar with debounced input handling.</p>
                <p>This component is ideal for scenarios where a responsive and accessible search bar is needed, with support for debounced input and clear functionality. Let me know if you'd like further details or modifications!</p>
                <Card title="Search preview" variant="borderless">
                    <Search
                        placeholder='Search...'
                        onChange={(e) => {
                            setClearFilter(false);
                            setSearchTerm(e.target.value);
                        }}
                        onClearText={() => {
                            setSearchTerm("");
                            setClearFilter(true);
                        }}
                        value={searchTerm}
                        isclear={clearFilter}
                        debounceTime={0} />
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

export default SearchOverview;