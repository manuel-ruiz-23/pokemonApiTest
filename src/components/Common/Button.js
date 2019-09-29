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
    border: 'none',
    backgroundColor: '#00000000',
    borderBottom: '2px solid black'
}

export default Button;