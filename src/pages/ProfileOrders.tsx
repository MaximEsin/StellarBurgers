import React, { useEffect } from 'react';
import styles from '../styles/Feed.module.css';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import ScrollList from '../components/Feed/ScrollList';
import { useAppDispatch } from '../hooks';
import { WS_CONNECTION_START } from '../services/actions/constants';
import { FC } from 'react';
import { useAppSelector } from '../hooks';

interface IProfileOrders {
  setActive: any;
}

const ProfileOrders: FC<IProfileOrders> = ({ setActive }) => {
  const { token } = useAppSelector((state) => state.tokenReducer);
  const accessToken = token.slice(7);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START,
      payload: `?token=${accessToken}`,
    });
  }, []);

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
