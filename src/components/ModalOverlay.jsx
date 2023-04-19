import React, { useEffect } from 'react';
import styles from '../styles/Modal.module.css';
import PropTypes from 'prop-types';

const ModalOverlay = (props) => {
  useEffect(() => {
    function closeByEscape(evt) {
      if (evt.key === 'Escape') {
        props.data.setActive(false);
      }
    }
    document.addEventListener('keydown', closeByEscape);
    return () => {
      document.removeEventListener('keydown', closeByEscape);
    };
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

ModalOverlay.propTypes = {
  children: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  setActive: PropTypes.func,
};

export default ModalOverlay;
