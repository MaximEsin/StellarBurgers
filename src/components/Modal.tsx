import React from 'react';
import ModalOverlay from './ModalOverlay';
import styles from '../styles/Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface IModal {
  active: boolean;
  children?: any;
  data: [];
  setActive: any;
}

const Modal: FC<IModal> = ({ active, children, data, setActive }) => {
  const navigate = useNavigate();
  return (
    <ModalOverlay active={active} setActive={setActive}>
      <section className={styles.modal}>
        <div className={styles.cross + ' mt-15'}>
          <CloseIcon
            type="primary"
            onClick={(): void => {
              setActive(false);
              navigate('/', { replace: true });
            }}
          />
        </div>
        {children}
      </section>
    </ModalOverlay>
  );
};

export default Modal;
