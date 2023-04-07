import React from 'react';
import OrderDetails from './OrderDetails';
import IngredientDetails from './IngredientDetails';

const Modal = (props) => {
  if (props.modalType.modalType === 'Order') {
    return <OrderDetails />;
  } else {
    return <IngredientDetails data={props} />;
  }
};

export default Modal;
