import React, { ReactNode, SyntheticEvent, useEffect } from 'react';
import styles from '../styles/Modal.module.css';
import { FC } from 'react';

interface IModalOverlay {
  active: boolean;
  children?: ReactNode;
  closeModal: () => void;
}

const ModalOverlay: FC<IModalOverlay> = ({ active, children, closeModal }) => {
  const isOpen = active;

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    function closeByEscape(evt: KeyboardEvent) {
      if (evt.key === 'Escape') {
        closeModal();
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
          closeModal();
        }
      }}
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
