import React from 'react';
import styles from '../styles/Feed.module.css';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import ScrollList from '../components/Feed/ScrollList';
import { useAppDispatch } from '../hooks';
import {
  WS_CONNECTION_ORDERS_START,
  WS_GET_ORDERS_MESSAGE,
} from '../services/actions/constants';
import { FC } from 'react';

interface IProfileOrders {
  setActive: any;
}

const ProfileOrders: FC<IProfileOrders> = ({ setActive }) => {
  const accessToken = sessionStorage.accessToken.slice(7);
  const ws = new WebSocket(
    `wss://norma.nomoreparties.space/orders?token=${accessToken}`
  );
  const dispatch = useAppDispatch();

  let data;

  ws.onopen = (event: Event) => {
    dispatch({
      type: WS_CONNECTION_ORDERS_START,
      info: event.type,
    });
  };

  ws.onmessage = (event: MessageEvent) => {
    data = JSON.parse(event.data);
    dispatch({
      type: WS_GET_ORDERS_MESSAGE,
      orders: data.orders,
    });
  };
  return (
    <section className={styles.profileOrdersSection}>
      <div className={styles.sidebarContainer + ' mr-15'}>
        <ProfileSidebar />
      </div>
      <ScrollList setActive={setActive} />
    </section>
  );
};

export default ProfileOrders;
