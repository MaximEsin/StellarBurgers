import React from 'react';
import PropTypes from 'prop-types';
import ModalOverlay from './ModalOverlay';

const Modal = (props) => {
  Modal.propTypes = {
    active: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    setActive: PropTypes.func.isRequired,
  };

  return <ModalOverlay data={props}>{props.children}</ModalOverlay>;
};

export default Modal;
