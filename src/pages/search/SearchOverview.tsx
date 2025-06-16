import React, { useState } from 'react';
import { Card, Table } from 'antd';
import Search from '../../packages/search/Search';
import { CopyBlock } from 'react-code-blocks';
import PropertyDescription from '../../packages/antd/tables/PropertyDescription';
import { ComponentBadge } from '../../packages/badges/AntdBadges';
import { ContentWrapper, PageWrapper } from '../../packages/containers/Containers';

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
        <PageWrapper>
            <ContentWrapper>
                <div>
                    <h4>Search <ComponentBadge /></h4>
                    <p>The Search component is a reusable React component designed to provide a robust and user-friendly search bar. It is built with accessibility and performance in mind, making it suitable for a wide range of applications. The component supports debounced input handling, ensuring that the onChange callback is not triggered excessively during rapid user input, which is particularly useful for optimizing performance in scenarios like API calls or filtering large datasets.
                    </p>
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

export default SearchOverview;