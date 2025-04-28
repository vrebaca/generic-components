import React, { useState } from 'react';
import { BootstrapFlexAlignGap, IBox, IBoxContent, IBoxTitle } from '../../common/Containers';
import { H4SemiBold, LinkLgSemiBold, TextBodySmSemiBold } from '../../common/textformats/PageHeadings';
import { IconButton } from '../../common/buttons/IconButtons';
import { DefaultIcon, DefaultMdIcon } from '../../common/icons/Icons';
import CopyIconButton from '../../common/buttons/CopyIconButton';
import { Check } from '../../common/checkbox/Check';

type Props = {
    Id: string;
    HeaderTitle?: string;
    LargeHeaderTitle: string;
    IsCheckboxEnabled: boolean;
    onItemChange?: (id: string, isSelected: boolean) => void;
    onItemSelected?: (id: string) => void;
    IsSelected?: boolean;
    Description?: string;
    TitleUrl?: string;
    IsExpanderEnabled?: boolean;
    IsOpen?: boolean;
    ExpanderContent?: React.ReactNode;
}

const AccountIbox: React.FC<Props> = (props) => {

    const [isOpen, setIsOpen] = useState(props.IsOpen || false);
    return (
        <IBox marginBottom="10px">
            <IBoxTitle>
                <BootstrapFlexAlignGap>
                    {props.HeaderTitle && <H4SemiBold>{props.HeaderTitle}</H4SemiBold>}
                    <IconButton onClick={() => setIsOpen(!isOpen)} className='float-right'>
                        <DefaultIcon className={`fa fa-chevron-${isOpen ? "up" : "down"}`} />
                    </IconButton>
                    <CopyIconButton text={props.Id} className='float-right' />
                </BootstrapFlexAlignGap>
                <BootstrapFlexAlignGap onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    if (!props.IsCheckboxEnabled) {
                        e.preventDefault();
                        if(props.onItemSelected){
                            props.onItemSelected(props.Id);
                        }
                    }
                }}>
                    {props.IsCheckboxEnabled &&
                        <>
                            <Check
                                id={`check-${props.Id}`}
                                style={{ padding: "10px" }}
                                checked={props.IsSelected ?? false}
                                checkSize='normal'
                                onChange={(e) => {
                                    e.stopPropagation();
                                    if(props.onItemChange){
                                        props.onItemChange(props.Id, e.target.checked);
                                    }
                                }}
                            />
                            &nbsp;&nbsp;
                        </>
                    }
                    <LinkLgSemiBold>
                        {props.LargeHeaderTitle}
                    </LinkLgSemiBold>
                </BootstrapFlexAlignGap>
                <BootstrapFlexAlignGap>
                    <DefaultMdIcon className='fa fa-user-o' />
                    &nbsp; &nbsp;
                    <TextBodySmSemiBold>{props.Description}</TextBodySmSemiBold>
                </BootstrapFlexAlignGap>
            </IBoxTitle>
            {props.IsExpanderEnabled && props.ExpanderContent && isOpen && (
                <IBoxContent>
                    {props.ExpanderContent}
                </IBoxContent>
            )}
        </IBox>
    );
};

export default AccountIbox;