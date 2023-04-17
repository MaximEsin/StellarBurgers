import React from 'react';

const TotalPrice = (props) => {
  const totalPrice = props.price.reduce((a, b) => a + b, 0);
  return <>{totalPrice}</>;
};

export default TotalPrice;
