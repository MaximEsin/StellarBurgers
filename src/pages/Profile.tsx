import React, { ChangeEvent } from 'react';
import { Input } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/Profile.module.css';
import { useEffect, useState } from 'react';
import { refresh } from '../services/actions/Auth';
import ProfileSidebar from '../components/Profile/ProfileSidebar';
import { useAppSelector } from '../hooks';
import { getUserInfo } from '../services/actions/Auth';
import { editUserInfo } from '../services/actions/Auth';

const Profile = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { isLoggedIn, token } = useAppSelector((state) => state.tokenReducer);

  useEffect(() => {
    if (!isLoggedIn && sessionStorage.refeshToken) {
      refresh();
    }
  }, []);

  useEffect(() => {
    getUserInfo(setName, setEmail, setPassword, password, token);
  }, []);

  useEffect(() => {
    function onEnter(evt: KeyboardEvent) {
      if (evt.key === 'Enter') {
        editUserInfo(name, email, password, token);
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
