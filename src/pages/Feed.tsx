import React, { useEffect } from 'react';
import styles from '../styles/Feed.module.css';
import ScrollList from '../components/Feed/ScrollList';
import Stats from '../components/Feed/Stats';
import { useAppDispatch } from '../hooks';
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_START,
} from '../services/actions/constants';
import { FC } from 'react';

interface TFeed {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Feed: FC<TFeed> = ({ setActive }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
      payload: '/all',
    });
    return () => {
      dispatch({
        type: WS_CONNECTION_CLOSED,
      });
    };
  }, []);

  return (
    <section className={styles.feedSection}>
      <h1 className="text text_type_main-large">Лента заказов</h1>
      <div className={styles.feedContainer}>
        <ScrollList setActive={setActive} />
        <Stats />
      </div>
    </section>
  );
};

export default Feed;
