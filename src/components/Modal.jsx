import React from 'react';
import PropTypes from 'prop-types';
import ModalOverlay from './ModalOverlay';
import styles from '../styles/Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Modal = (props) => {
  Modal.propTypes = {
    active: PropTypes.bool,
    data: PropTypes.array.isRequired,
    setActive: PropTypes.func.isRequired,
  };

  return (
    <ModalOverlay data={props}>
      <section className={styles.modal}>
        <div className={styles.cross + ' mt-15'}>
          <CloseIcon
            alt="Закрыть окно"
            onClick={() => {
              props.setActive(false);
            }}
          />
        </div>
        {props.children}
      </section>
    </ModalOverlay>
  );
};

export default Modal;
