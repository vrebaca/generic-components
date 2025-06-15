import React from 'react';
import { ComboBox } from '../packages/combobox/ComboBox';
import { ContentWrapper, PageWrapper } from '../components/common/Containers';

const ComboBoxOverview: React.FC = () => {
    const [selected, setSelected] = React.useState<string>('all');
    return (
        <PageWrapper>
            <ContentWrapper>
                <ComboBox
                    options={[
                        { label: 'All', value: 'all', count: 10 },
                        { label: 'Item Name', value: '2', leftIcon: 'fa fa-cube', count: 12 },
                        { label: 'Item Name', value: '3', leftIcon: 'fa fa-cube', isDisabled: true, count: 5 },
                        { label: 'Item Name', value: '4', leftIcon: 'fa fa-cube', rightIcon: 'fa fa-cube' },
                        { label: 'Item Name', value: '5', count: 10 },
                        { label: 'Item Name', value: '6', leftIcon: 'fa fa-cube', count: 10 },
                        { label: 'Item Name', value: '7', leftIcon: 'fa fa-cube', count: 10 },
                        { label: 'Item Name', value: '8', leftIcon: 'fa fa-cube', count: 10 },
                    ]}
                    selectedValue={selected}
                    onChange={setSelected}
                />
            </ContentWrapper>
        </PageWrapper>

    );
};

export default ComboBoxOverview;