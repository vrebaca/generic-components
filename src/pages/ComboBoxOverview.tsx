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
                        { label: 'All (1)', value: 'all' },
                        { label: 'Item Name (2)', value: '2' },
                    ]}
                    selectedValue={selected}
                    onChange={setSelected}
                />
            </ContentWrapper>
        </PageWrapper>

    );
};

export default ComboBoxOverview;