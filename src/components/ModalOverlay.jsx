import React from 'react';
import styles from '../styles/Modal.module.css';
import Modal from './Modal';
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      props.setActive(false);
    }
  });
  return (
    <div
      className={
        props.active ? styles.modalOverlay_active : styles.modalOverlay
      }
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          props.setActive(false);
        }
      }}
    >
      <Modal modalType={props} />
    </div>
  );
};

export default ModalOverlay;
