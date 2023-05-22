import React, { useEffect } from 'react';
import styles from '../styles/Modal.module.css';
import { useNavigate } from 'react-router-dom';
import { FC } from 'react';

interface IModalOverlay {
  active: boolean;
  children?: any;
  setActive: any;
}

const ModalOverlay: FC<IModalOverlay> = ({ active, children, setActive }) => {
  const navigate = useNavigate();
  const isOpen = active;

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    function closeByEscape(evt: any) {
      if (evt.key === 'Escape') {
        navigate('/', { replace: true });
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
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setActive(false);
          navigate('/', { replace: true });
        }
      }}
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
