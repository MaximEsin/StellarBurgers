import React from 'react';
import OrderDetails from './OrderDetails';
import IngredientDetails from './IngredientDetails';
import PropTypes from 'prop-types';
import ModalOverlay from './ModalOverlay';

const Modal = (props) => {
  Modal.propTypes = {
    active: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    modalType: PropTypes.string,
    setActive: PropTypes.func.isRequired,
  };
  if (props.modalType === 'Order') {
    return (
      <ModalOverlay data={props}>
        <OrderDetails data={props} />;
      </ModalOverlay>
    );
  } else {
    return (
      <ModalOverlay data={props}>
        <IngredientDetails data={props} />;
      </ModalOverlay>
    );
  }
};

export default Modal;
