import React, { SyntheticEvent, useEffect } from 'react';
import styles from '../styles/Modal.module.css';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { onClose } from '../utils';

interface IModalOverlay {
  active: boolean;
  children?: any;
  setActive: any;
}

const ModalOverlay: FC<IModalOverlay> = ({ active, children, setActive }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isOpen = active;

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    function closeByEscape(evt: KeyboardEvent) {
      if (evt.key === 'Escape') {
        onClose(location.pathname, navigate(-1));
        setActive(false);
      }
    }
    document.addEventListener('keydown', closeByEscape);
    return () => {
      document.removeEventListener('keydown', closeByEscape);
    };
  }, [isOpen]);

  return (
    <div
      className={active ? styles.modalOverlay_active : styles.modalOverlay}
      onClick={(event: SyntheticEvent) => {
        if (event.target === event.currentTarget) {
          setActive(false);
          onClose(location.pathname, navigate(-1));
        }
      }}
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
