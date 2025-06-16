import React from 'react';
import { Badge } from '../badges/Badges';
import { IconButton } from '../buttons/IconButtons';
import { DefaultIcon } from '../icons/Icons';
import CopyIconButton from '../buttons/CopyIconButton';
import { H4SemiBold } from '../text/Typography';


type Props = {
    HeaderTitle?: string;
    Id: string;
    IsExpanderButtonEnabled?: boolean;
    IsCopyButtonEnabled?: boolean;
    IsBadgeEnabled?: boolean;
    BadgeText?: string;
    IsOpen?: boolean;
    setIsOpen?: (isOpen: boolean) => void;
}

const CardHeader: React.FC<Props> = (props) => {
    return (
        <>
            {props.IsBadgeEnabled && <Badge className='pull-right'>{props.BadgeText}</Badge>}
            {props.HeaderTitle && <H4SemiBold IsInline>{props.HeaderTitle}</H4SemiBold>}
            {props.IsExpanderButtonEnabled && <IconButton onClick={(e) => {
                e.stopPropagation();
                props.setIsOpen && props.setIsOpen(!props.IsOpen);
            }} className='pull-right'>
                <DefaultIcon className={`fa fa-chevron-${props.IsOpen ? "up" : "down"}`} />
            </IconButton>}
            {props.IsCopyButtonEnabled && <CopyIconButton text={props.Id} className='pull-right' />}
        </>
    );
};

export default CardHeader;