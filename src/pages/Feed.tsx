import React from 'react';
import styles from '../styles/Feed.module.css';
import FeedCard from '../components/Feed/FeedCard';
import Stats from '../components/Feed/Stats';

const Feed = () => {
  return (
    <section className={styles.feedSection}>
      <h1 className="text text_type_main-large">Лента заказов</h1>
      <div className={styles.feedContainer}>
        <div className={styles.orders}>
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
          <FeedCard />
        </div>
        <Stats />
      </div>
    </section>
  );
};

export default Feed;
