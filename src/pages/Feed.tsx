import React from 'react';
import styles from '../styles/Feed.module.css';
import ScrollList from '../components/Feed/ScrollList';
import Stats from '../components/Feed/Stats';
import { useAppDispatch } from '../hooks';
import {
  WS_CONNECTION_START,
  WS_GET_MESSAGE,
} from '../services/actions/constants';
import { FC } from 'react';

interface TFeed {
  setActive: any;
}

const Feed: FC<TFeed> = ({ setActive }) => {
  const ws = new WebSocket('wss://norma.nomoreparties.space/orders/all');
  const dispatch = useAppDispatch();

  let data;

  ws.onopen = (event: Event) => {
    dispatch({
      type: WS_CONNECTION_START,
      info: event.type,
    });
  };

  ws.onmessage = (event: MessageEvent) => {
    data = JSON.parse(event.data);
    dispatch({
      type: WS_GET_MESSAGE,
      orders: data.orders,
      total: data.total,
      totalToday: data.totalToday,
    });
  };

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
