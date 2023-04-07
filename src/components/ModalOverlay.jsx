import React from 'react';
import styles from '../styles/Modal.module.css';
import Modal from './Modal';
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
  ModalOverlay.propTypes = {
    modalType: PropTypes.string,
    data: PropTypes.object,
  };
  return (
    <div className={styles.modalOverlay}>
      <Modal modalType={props} />
    </div>
  );
};

export default ModalOverlay;
