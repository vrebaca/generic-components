import React from 'react';
import { RequiredBadge, TypeBadge } from '../../badges/Badges';

const PropertyDescription: React.FC<{ properyName: string, propertyType: string, isRequired?: boolean, description: string }> = (props) => {
    return (
        <>
            <p><b><i>{props.properyName}</i></b> <i>{TypeBadge(props.propertyType)}</i> {props.isRequired && RequiredBadge()}</p>
            <p>{props.description}</p>
        </>
    );
};

export default PropertyDescription;