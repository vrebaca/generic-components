import React, { useState } from 'react';
import { IBox, IBoxContent, IBoxTitle } from '../../common/Containers/BootstrapContainers';
import { FlexAlignGapContainer } from '../../common/Containers/FlexContainers';
import { Check } from '../../common/checkbox/Check';
import { DefaultMdIcon } from '../../common/icons/Icons';
import CardHeader from '../CardHeader';
import { LinkLgSemiBold, TextBodyMdSemiBold } from '../../../packages/typography';


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

const AccountCard: React.FC<Props> = (props) => {

    const [isOpen, setIsOpen] = useState(props.IsOpen || false);
    return (
        <IBox
            cursor={props.IsCheckboxEnabled ? "default" : "pointer"}
            margin="0px 0px 10px 0px"
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                if (!props.IsCheckboxEnabled) {
                    e.preventDefault();
                    props.onItemSelected && props.onItemSelected(props.Id);
                }
            }}>
            <IBoxTitle>
                <FlexAlignGapContainer>
                    <CardHeader
                        Id={props.Id}
                        HeaderTitle={props.HeaderTitle}
                        IsOpen={isOpen}
                        IsExpanderButtonEnabled={props.IsExpanderEnabled}
                        IsCopyButtonEnabled
                        IsBadgeEnabled
                        BadgeText='test badge'
                        setIsOpen={setIsOpen} />
                </FlexAlignGapContainer>
                <FlexAlignGapContainer>
                    {props.IsCheckboxEnabled &&
                        <>
                            <Check
                                id={`check-${props.Id}`}
                                style={{ padding: "10px" }}
                                checked={props.IsSelected ?? false}
                                onChange={(e) => {
                                    e.stopPropagation();
                                    props.onItemChange && props.onItemChange(props.Id, e.target.checked);
                                }}
                            />
                            &nbsp;&nbsp;
                        </>
                    }
                    <LinkLgSemiBold>
                        {props.LargeHeaderTitle}
                    </LinkLgSemiBold>
                </FlexAlignGapContainer>
                <FlexAlignGapContainer>
                    <DefaultMdIcon className='fa fa-user-o' />
                    &nbsp; &nbsp;
                    <TextBodyMdSemiBold>{props.Description}</TextBodyMdSemiBold>
                </FlexAlignGapContainer>
            </IBoxTitle>
            {props.IsExpanderEnabled && props.ExpanderContent && isOpen && (
                <IBoxContent padding="10px 20px 10px 20px">
                    {props.ExpanderContent}
                </IBoxContent>
            )}
        </IBox>
    );
};

export default AccountCard;