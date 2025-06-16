import React, { useEffect, useRef } from 'react'

interface IPopupProps {
    position: { x: number, y: number };
    onClose: () => void; // Adjusted to not require an event argument
    children?: React.ReactNode;
}



const PopupContentModal = ({ onClose, position, children }: IPopupProps) => {
    const modalRef = useRef<HTMLDivElement>(null); 
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                onClose();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (

        <div
            ref={modalRef}
            className="popup-modal"
            onClick={onClose}
            style={{
                minWidth: '175px',
                maxWidth: '200px',
                paddingLeft: '15px',
                paddingRight: '15px',
                position: 'absolute',
                top: position.y + 10,
                left: position.x - 350,
            }}
            >
            <div
                style={{
                top: position.y + 10,
                left: position.x - 110,
                borderRadius: '4px',
                }}
                className="custom-context-menu"
            >
                {children}
            </div>
        </div>
    )       
      
}

export default PopupContentModal