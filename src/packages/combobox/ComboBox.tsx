import React from 'react';
import './ComboBox.css';

type Option = {
  label: string;
  value: string;
  icon?: React.ReactNode; // Note: Icons are not supported inside <option>
};

type GenericSelectProps = {
  options: Option[];
  selectedValue: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export const ComboBox: React.FC<GenericSelectProps> = ({
  options,
  selectedValue,
  onChange,
  placeholder = 'Select...'
}) => {
  return (
    <div className="form-group" style={{ width: '100%' }}>
      <select
        className="form-control"
        value={selectedValue}
        onChange={(e) => onChange(e.target.value)}
        style={{ maxHeight: '80px', overflowY: options.length > 8 ? 'auto' : 'visible' }}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label} {/* Icons not shown in <option> tags */}
          </option>
        ))}
      </select>
    </div>
  );
};