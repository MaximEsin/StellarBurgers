import React from 'react';
import OrderDetails from './OrderDetails';
import IngredientDetails from './IngredientDetails';
import PropTypes from 'prop-types';

const Modal = (props) => {
  if (props.modalType.modalType === 'Order') {
    return <OrderDetails data={props} />;
  } else {
    return <IngredientDetails data={props} />;
  }
};

export default Modal;
