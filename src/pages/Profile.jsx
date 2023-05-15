import React from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/Profile.module.css';
import { useNavigate } from 'react-router-dom';
import { request } from '../utils';
import { useEffect, useState } from 'react';
import {
  BurgerIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { refresh } from '../utils';

const Profile = (props) => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    props.setConstructor(
      <div className={styles.navItem + ' pt-4 pb-4 ml-5 mr-5'}>
        <BurgerIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive pl-2">
          Конструктор
        </p>
      </div>
    );
    props.setProfile(
      <div className={styles.navItem + ' pt-4 pb-4 ml-5 mr-5'}>
        <ProfileIcon type="primary" />
        <p className={styles.activeText + ' text text_type_main-default  pl-2'}>
          Личный кабинет
        </p>
      </div>
    );
  }, []);

  useEffect(() => {
    if (!localStorage.accessToken && localStorage.refreshToken) {
      refresh();
    }
  }, []);

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
      .then((res) => {
        navigate('/', { replace: true });
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserInfo = () => {
    request('/auth/user', {
      method: 'GET',
      headers: {
        authorization: localStorage.accessToken,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        setName(res.user.name);
        setEmail(res.user.email);
        setPassword(password);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const editUserInfo = (name, email, password) => {
    request('/auth/user', {
      method: 'PATCH',
      headers: {
        authorization: localStorage.accessToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    }).catch((err) => {
      console.log(err);
    });
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    function onEnter(evt) {
      if (evt.key === 'Enter') {
        editUserInfo(name, email, password);
      }
    }
    document.addEventListener('keydown', onEnter);
    return () => {
      document.removeEventListener('keydown', onEnter);
    };
  }, [name, email, password]);

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
          <Input
            placeholder="Имя"
            extraClass="mb-6"
            icon={'EditIcon'}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="Логин"
            extraClass="mb-6"
            icon={'EditIcon'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Пароль"
            extraClass="mb-6"
            icon={'EditIcon'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
