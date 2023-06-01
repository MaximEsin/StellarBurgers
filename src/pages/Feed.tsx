import React from 'react';
import styles from '../styles/Feed.module.css';
import ScrollList from '../components/Feed/ScrollList';
import Stats from '../components/Feed/Stats';

const Feed = () => {
  return (
    <section className={styles.feedSection}>
      <h1 className="text text_type_main-large">Лента заказов</h1>
      <div className={styles.feedContainer}>
        <ScrollList />
        <Stats />
      </div>
    </section>
  );
};

export default Feed;
