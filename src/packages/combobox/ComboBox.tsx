import React, { useState } from 'react';
import './ComboBox.css'
import { ButtonIcon } from '../icons/Icons';
import { TextButtonMdRegular } from '../text/Typography';

export type Option = {
  label: string;
  value: string;
  count?: number;
  leftIcon?: string;
  rightIcon?: string;
  isDisabled?: boolean;
};

export type ComboBoxProps = {
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const ComboBox: React.FC<ComboBoxProps> = ({
  options,
  selectedValue,
  onChange,
  placeholder = 'Select...'
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedOption = options.find(opt => opt.value === selectedValue);

  return (
    <div className="dropdown">
      <button
        className="btn btn-dropdown dropdown-toggle form-control"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption?.leftIcon &&<><ButtonIcon className={selectedOption.leftIcon}/> &nbsp;</>}
        {selectedOption? <TextButtonMdRegular>{selectedOption.label} {selectedOption.count && ` (${selectedOption.count})`}</TextButtonMdRegular> : placeholder}
        <span className="caret pull-right"></span>
      </button>

      {isOpen && (
        <ul
          className="dropdown-menu"
          style={{
            display: 'block',
            maxHeight: '280px',
            overflowY: options.length > 8 ? 'auto' : 'visible',
            width: '100%',
            borderRadius: 0
          }}
        >
          {options.map((option) => (
            <li
              key={option.value}
              className={`menu-item ${option.isDisabled ? 'disabled' : ''}`}
              onClick={() => {
                if (!option.isDisabled) {
                  onChange(option.value);
                  setIsOpen(false);
                }
              }}
              style={{ opacity: option.isDisabled ? 0.5 : 1 }}
            >
              <a className='item-content' tabIndex={option.isDisabled ? -1 : 0} aria-disabled={option.isDisabled}>
                {option.leftIcon && <><ButtonIcon className={option.leftIcon}/> &nbsp;</>}
                <TextButtonMdRegular>{option.label} {option.count && ` (${option.count})`}</TextButtonMdRegular>

                {selectedValue === option.value && <ButtonIcon className='fa fa-check dropdown-icon pull-right' style={{marginTop: "5px"}}/>}
                {option.rightIcon && <><ButtonIcon className={`pull-right ${option.rightIcon}`}  style={{marginTop: "5px"}}/> &nbsp;</>}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};