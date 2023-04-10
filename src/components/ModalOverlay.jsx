import React, { useEffect } from 'react';
import styles from '../styles/Modal.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
  ModalOverlay.propTypes = {
    children: PropTypes.array.isRequired,
    data: PropTypes.object.isRequired,
  };

  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        props.data.setActive(false);
      }
    });
    if (!props.data.active) {
      window.removeEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          props.data.setActive(false);
        }
      });
    }
  }, []);

  return (
    <div
      className={
        props.data.active ? styles.modalOverlay_active : styles.modalOverlay
      }
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          props.data.setActive(false);
        }
      }}
    >
      {props.children}
    </div>
  );
};

export default ModalOverlay;
