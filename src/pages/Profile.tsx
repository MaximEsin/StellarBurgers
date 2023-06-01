import React, { ChangeEvent } from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/Profile.module.css';
import { request } from '../utils';
import { useEffect, useState } from 'react';
import { refresh } from '../utils';
import ProfileSidebar from '../components/Profile/ProfileSidebar';

const Profile = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  useEffect(() => {
    if (!localStorage.accessToken && localStorage.refreshToken) {
      refresh();
    }
  }, []);

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

  const editUserInfo = (name: string, email: string, password: string) => {
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
    function onEnter(evt: KeyboardEvent) {
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
        <ProfileSidebar />
        <div className="ml-15">
          <Input
            placeholder="Имя"
            extraClass="mb-6"
            icon={'EditIcon'}
            value={name || ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
          <Input
            placeholder="Логин"
            extraClass="mb-6"
            icon={'EditIcon'}
            value={email || ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <Input
            placeholder="Пароль"
            extraClass="mb-6"
            icon={'EditIcon'}
            value={password || ''}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;
