import React from 'react';
import PropTypes from 'prop-types';

const TotalPrice = (props) => {
  if (props.price) {
    const totalPrice = props.price.reduce((a, b) => a + b, 0);
    return <>{totalPrice}</>;
  }
};

TotalPrice.propTypes = {
  price: PropTypes.array,
};

export default TotalPrice;
