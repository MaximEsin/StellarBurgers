import React from 'react';
import PropTypes from 'prop-types';

const TotalPrice = (props) => {
  const totalPrice = props.price.reduce((a, b) => a + b, 0);
  return <>{totalPrice}</>;
};

TotalPrice.propTypes = {
  price: PropTypes.array.isRequired,
};

export default TotalPrice;
