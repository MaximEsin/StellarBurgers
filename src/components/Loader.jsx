import React from 'react';
import styles from '../styles/App.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <p className={styles.loader}>Загрузка...</p>
    </div>
  );
};

export default Loader;
