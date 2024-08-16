import React from 'react';
import './Checkbox.css';

function Checkbox({ label, checked, onChange, name, disabled }) {
    return (
        <div className="checkboxContainer">
            <input 
                type="checkbox" 
                checked={checked} 
                onChange={onChange} 
                name={name}
                id={name}
                disabled={disabled}
            />
            <label htmlFor={name}>{label}</label>
        </div>
    );
}

export default Checkbox;