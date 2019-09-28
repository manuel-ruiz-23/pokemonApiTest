import React from 'react';

const Button = ({ handleClick, label}) => (
    <button style={style} onClick={handleClick}>
        {label}
    </button>
);

const style = {
    margin: '8px',
    padding: '4px',
    outline: 'none',
    borderRadius: '8px'
}

export default Button;