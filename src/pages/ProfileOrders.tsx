import React from 'react';
import styles from '../styles/Feed.module.css';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import ScrollList from '../components/Feed/ScrollList';

const ProfileOrders = () => {
  return (
    <section className={styles.profileOrdersSection}>
      <div className={styles.sidebarContainer + ' mr-15'}>
        <ProfileSidebar />
      </div>
      <ScrollList />
    </section>
  );
};

export default ProfileOrders;
