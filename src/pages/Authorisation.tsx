import React, { ChangeEvent, FormEvent } from 'react';
import styles from '../styles/Registration.module.css';
import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Auth } from '../services/actions/Auth';
import { handleFormSubmit } from '../utils';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useLocation } from 'react-router-dom';

const Authorisation = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const location = useLocation();
  const { isLoggedIn } = useAppSelector((state) => state.tokenReducer);

  const from = location.state?.from || '/';
  if (isLoggedIn || localStorage.isLoggedIn === 'true') {
    navigate(from, { replace: true });
  }

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading + ' text text_type_main-medium mb-6'}>
          Вход
        </h1>
        <form
          onSubmit={(event: FormEvent<HTMLFormElement>) =>
            handleFormSubmit(
              event,
              dispatch(
                Auth(email, password, () => navigate(from, { replace: true }))
              )
            )
          }
        >
          <Input
            type={'email'}
            placeholder={'E-mail'}
            extraClass="mb-6"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            value={email || ''}
          />
          <Input
            type={'password'}
            placeholder={'Пароль'}
            icon={'ShowIcon'}
            extraClass="mb-6"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            value={password || ''}
          />
          <Button htmlType="submit" type="primary" size="medium">
            Войти
          </Button>
        </form>
        <p className="text text_type_main-default text_color_inactive mt-20">
          Вы — новый пользователь?{''}
          <Link to="/register">
            <Button
              extraClass={styles.button}
              htmlType="button"
              type="secondary"
              size="small"
            >
              Зарегистрироваться
            </Button>
          </Link>
        </p>
        <p className="text text_type_main-default text_color_inactive mt-4">
          Забыли пароль?{''}
          <Link to="/forgot-password">
            <Button
              extraClass={styles.button}
              htmlType="button"
              type="secondary"
              size="small"
            >
              Восстановить пароль
            </Button>
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Authorisation;
