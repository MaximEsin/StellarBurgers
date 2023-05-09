import React from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/Profile.module.css';
import { useNavigate } from 'react-router-dom';
import { request } from '../utils';

const Profile = () => {
  const navigate = useNavigate();

  const logOut = () => {
    request('/auth/logout', {
      method: 'POST',
      headers: {
        authorization: 'd5b34af3-ad0b-4c78-bdcc-85f9d783b0bc',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: localStorage.refreshToken,
      }),
    }).then((res) => {
      navigate('/', { replace: true });
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      console.log(res);
    });
  };

  return (
    <section className={styles.profile}>
      <div className={styles.profileContainer}>
        <div className={styles.sidebar}>
          <p
            className={styles.sidebarItem + ' text text_type_main-medium mb-6'}
          >
            Профиль
          </p>
          <p
            className={
              styles.sidebarItem +
              ' text text_type_main-medium mb-6 text_color_inactive'
            }
          >
            История заказов
          </p>
          <p
            className={
              styles.sidebarItem +
              ' text text_type_main-medium mb-20 text_color_inactive'
            }
            onClick={() => logOut()}
          >
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
