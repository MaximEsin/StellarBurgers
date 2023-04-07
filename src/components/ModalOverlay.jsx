import React from 'react';
import styles from '../styles/Modal.module.css';
import Modal from './Modal';

const ModalOverlay = (props) => {
  return (
    <div className={styles.modalOverlay}>
      <Modal modalType={props} />
    </div>
  );
};

export default ModalOverlay;
