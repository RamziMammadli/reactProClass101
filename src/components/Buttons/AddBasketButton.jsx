import React from 'react';

const AddBasketButton = ({sebeteAt}) => {
  const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: 'yellow',
    color: 'red',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '15px'
  };

  return (
      <button onClick={sebeteAt} style={buttonStyle}>Add to basket</button>
  );
};

export default AddBasketButton;
