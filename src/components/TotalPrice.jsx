import React from 'react';
import PropTypes from 'prop-types';

const TotalPrice = (props) => {
  TotalPrice.propTypes = {
    price: PropTypes.array.isRequired,
  };
  console.log(props);
  const totalPrice = props.price.reduce((a, b) => a + b, 0);
  return <>{totalPrice}</>;
};

export default TotalPrice;
