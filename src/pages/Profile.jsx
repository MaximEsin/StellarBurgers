import React from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/Profile.module.css';

const Profile = () => {
  return (
    <section className={styles.profile}>
      <div className={styles.profileContainer}>
        <div className={styles.sidebar}>
          <p className="text text_type_main-medium mb-6">Профиль</p>
          <p className="text text_type_main-medium mb-6 text_color_inactive">
            История заказов
          </p>
          <p className="text text_type_main-medium mb-20 text_color_inactive">
            Выход
          </p>
          <p
            className={
              styles.description +
              ' text text_type_main-small text_color_inactive'
            }
          >
            В этом разделе вы можете изменить свои персональные данные
          </p>
        </div>
        <div className="ml-15">
          <Input placeholder="Имя" extraClass="mb-6" icon={'EditIcon'} />
          <Input placeholder="Логин" extraClass="mb-6" icon={'EditIcon'} />
          <Input placeholder="Пароль" extraClass="mb-6" icon={'EditIcon'} />
        </div>
      </div>
    </section>
  );
};

export default Profile;
