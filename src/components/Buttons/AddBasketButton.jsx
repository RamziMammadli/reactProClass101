import React from 'react';

const AddBasketButton = ({sebeteAt,text}) => {
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: 'yellow',
    color: 'red',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '15px'
  };

  return (
      <button onClick={sebeteAt} style={buttonStyle}>{text}</button>
  );
};

export default AddBasketButton;
