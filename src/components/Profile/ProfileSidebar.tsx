import React from 'react';
import styles from '../../styles/Profile.module.css';
import { request } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const ProfileSidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
    })
      .then(() => {
        navigate('/', { replace: true });
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.sidebar}>
      <Link style={{ textDecoration: 'none' }} to="/profile">
        <p
          className={
            `${
              pathname === '/profile'
                ? styles.activeText
                : 'text_color_inactive'
            }` + ' text text_type_main-medium mb-6'
          }
        >
          Профиль
        </p>
      </Link>
      <Link style={{ textDecoration: 'none' }} to="/profile/orders">
        <p
          className={
            `${
              pathname === '/profile/orders'
                ? styles.activeText
                : 'text_color_inactive'
            }` + ' text text_type_main-medium mb-6'
          }
        >
          История заказов
        </p>
      </Link>
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
          styles.description + ' text text_type_main-small text_color_inactive'
        }
      >
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </div>
  );
};

export default ProfileSidebar;
