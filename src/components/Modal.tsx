import React, { ReactNode } from 'react';
import ModalOverlay from './ModalOverlay';
import styles from '../styles/Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';

interface IModal {
  active: boolean;
  children?: ReactNode;
  data: Array<object>;
  closeModal: () => void;
}

const Modal: FC<IModal> = ({ active, children, data, closeModal }) => {
  return (
    <ModalOverlay active={active} closeModal={closeModal}>
      <section className={styles.modal}>
        <div className={styles.cross + ' mt-15'}>
          <CloseIcon
            type="primary"
            onClick={(): void => {
              closeModal();
            }}
          />
        </div>
        {children}
      </section>
    </ModalOverlay>
  );
};

export default Modal;
