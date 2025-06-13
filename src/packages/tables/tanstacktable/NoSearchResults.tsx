import React from 'react';
import { DefaultIcon } from '../../../components/common/icons/Icons';
import { H4SemiBold } from '../../typography/Typography';

const NoSearchResults: React.FC<{ searchTerm: string, height: string }> = ({ searchTerm, height }) => {
    return (
        <div
            style={{
                height: height,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <DefaultIcon className="fa fa-search" fontsize="64px" />
            <H4SemiBold>{`No data found for "${searchTerm}"`}</H4SemiBold>
        </div>
    );
};

export default NoSearchResults;