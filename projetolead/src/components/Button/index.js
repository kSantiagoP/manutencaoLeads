import React from 'react';
import './Button.css';

const Button = ({ color = '#26C05B', centralize = false, handleClick, children, ...props }) => {
    return (
        <button
            className={`button ${centralize ? 'centralize' : ''}`}
            style={{ backgroundColor: color }}
            onClick={handleClick}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;