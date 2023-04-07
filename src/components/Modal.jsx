import React from 'react';
import OrderDetails from './OrderDetails';
import IngredientDetails from './IngredientDetails';
import PropTypes from 'prop-types';

const Modal = (props) => {
  Modal.propTypes = {
    modalType: PropTypes.string,
    data: PropTypes.object,
  };
  if (props.modalType.modalType === 'Order') {
    return <OrderDetails />;
  } else {
    return <IngredientDetails data={props} />;
  }
};

export default Modal;
