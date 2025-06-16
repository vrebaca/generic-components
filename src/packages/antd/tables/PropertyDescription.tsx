import React from 'react';
import { RequiredBadge, TypeBadge } from '../../badges/AntdBadges';

const PropertyDescription: React.FC<{ properyName: string, propertyType: string, isRequired?: boolean, description: string }> = (props) => {
    return (
        <>
            <span><b><i>{props.properyName}</i></b> <i>{TypeBadge(props.propertyType)}</i> {props.isRequired && RequiredBadge()}</span>
            <br />
            <span>{props.description}</span>
        </>
    );
};

export default PropertyDescription;