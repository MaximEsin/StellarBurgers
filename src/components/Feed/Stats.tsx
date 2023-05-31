import React from 'react';
import styles from '../../styles/Feed.module.css';

const Stats = () => {
  return (
    <section className={styles.statsSection + ' ml-15'}>
      <div className={styles.statsContainer}>
        <div className={styles.statContainer}>
          <p className="text text_type_main-medium mb-6">Готовы:</p>
          <p
            className={
              styles.preparedOrder + ' text text_type_main-default mb-2'
            }
          >
            034533
          </p>
          <p
            className={
              styles.preparedOrder + ' text text_type_main-default mb-2'
            }
          >
            034532
          </p>
          <p className={styles.preparedOrder + ' text text_type_main-default'}>
            034527
          </p>
        </div>
        <div className={styles.statContainer + ' ml-9'}>
          <p className="text text_type_main-medium mb-6">В работе:</p>
          <p className="text text_type_main-default mb-2">034538</p>
          <p className="text text_type_main-default">034541</p>
        </div>
      </div>
      <p className="mt-15 text text_type_main-medium">
        Выполнено за все время:
      </p>
      <p className={styles.statNumbers + ' text text_type_digits-large'}>
        28 752
      </p>
      <p className="mt-15 text text_type_main-medium">Выполнено за сегодня:</p>
      <p className={styles.statNumbers + ' text text_type_digits-large'}>138</p>
    </section>
  );
};

export default Stats;
