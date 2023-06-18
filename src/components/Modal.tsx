import React, { ReactNode } from 'react';
import ModalOverlay from './ModalOverlay';
import styles from '../styles/Modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { onClose } from '../utils';

interface IModal {
  active: boolean;
  children?: ReactNode;
  data: Array<object>;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: FC<IModal> = ({ active, children, data, setActive }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ModalOverlay active={active} setActive={setActive}>
      <section className={styles.modal}>
        <div className={styles.cross + ' mt-15'}>
          <CloseIcon
            type="primary"
            onClick={(): void => {
              setActive(false);
              onClose(location.pathname, navigate(-1));
            }}
          />
        </div>
        {children}
      </section>
    </ModalOverlay>
  );
};

export default Modal;
