import React from 'react';
import { DefaultIcon } from './Icons';
import './ChevronIcon.css';

const ChevronIcon: React.FC<{ isOpen: boolean; onClick: () => void }> = ({ isOpen, onClick }) => {
    return (
        <DefaultIcon className={isOpen ? "fa fa-chevron-right chevron-icon open" : "fa fa-chevron-right chevron-icon"} onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            onClick();
        }} />
    );
};

export default ChevronIcon;