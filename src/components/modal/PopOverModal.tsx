import React, { useState } from 'react'
import { ActionButton } from '../common/buttons/ActionButton';
import PopupContentModal from './PopupContentModal';

interface IPopOverProps {
    children?: React.ReactNode
    buttonIcon?: string;
    disabled?: boolean;
    id?: string;
    showTooltip?: boolean;
    disabledText?: string;
    useLayerPosition?: boolean;
}


const PopOverModal = ({ children, buttonIcon, disabled, id, showTooltip, disabledText, useLayerPosition }: IPopOverProps) => {
    buttonIcon = buttonIcon || 'fa fa-ellipsis-v';
    const [isShown, setIsShown] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handlePopupClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setPosition({
            x: useLayerPosition ?  event.nativeEvent.layerX : event.pageX,
            y: useLayerPosition ? event.nativeEvent.layerY : event.pageY,
        });
        console.log(event.pageX, event.pageY);
        setIsShown(true);
        event.stopPropagation();
    };  

    const onClose = () => {
        setIsShown(false);
    };

    return (
        <>
            <div>
                {
                    showTooltip ?
                        <>
                            <span title={disabledText} data-toggle="tooltip" data-placement="top" data-for={`tooltip-${id}`}>
                                <ActionButton
                                    disabled={disabled}
                                    role="button"
                                    type="button"
                                    >
                                    <i className={buttonIcon}></i>
                                </ActionButton>
                            </span>
                        </>
                        :
                        <ActionButton
                            onClick={handlePopupClick}
                            disabled={disabled}
                            type="button"
                        >
                            <i className={buttonIcon}></i>
                        </ActionButton>
                }
            </div>
            {
                isShown && (
                    <PopupContentModal onClose={onClose}
                        position={position}>
                        {children}
                    </PopupContentModal>
                )
            }
        </>
    )
}

export default PopOverModal