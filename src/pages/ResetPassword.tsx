import React, { ChangeEvent, FormEvent, useEffect } from 'react';
import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/Registration.module.css';
import { Form, Link } from 'react-router-dom';
import { request } from '../utils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleFormSubmit } from '../utils';
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState<string>('');
  const [code, setCode] = useState<string>('');
  const navigate = useNavigate();
  const prevRoute = useLocation();

  const resetPassword = (password: string, code: string) => {
    request('/password-reset/reset', {
      method: 'POST',
      headers: {
        authorization: 'd5b34af3-ad0b-4c78-bdcc-85f9d783b0bc',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        password: password,
        token: code,
      }),
    })
      .then(() => navigate('/login', { replace: true }))
      .catch((err) => {
        console.log(err);
      });
  };

  if (
    prevRoute.state &&
    prevRoute.state.prevRoute.pathname === '/forgot-password'
  ) {
    return (
      <>
        <section className={styles.main}>
          <div className={styles.container}>
            <h1 className={styles.heading + ' text text_type_main-medium mb-6'}>
              Восстановление пароля
            </h1>
            <form
              onSubmit={(event: FormEvent<HTMLFormElement>) =>
                handleFormSubmit(event, resetPassword(password, code))
              }
            >
              <Input
                type={'password'}
                placeholder={'Введите новый пароль'}
                extraClass="mb-6"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
                value={password || ''}
              />
              <Input
                type={'text'}
                placeholder={'Введите код из письма'}
                extraClass="mb-6"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setCode(e.target.value)
                }
                value={code || ''}
              />
              <Button htmlType="submit" type="primary" size="medium">
                Сохранить
              </Button>
            </form>
            <p className="text text_type_main-default text_color_inactive mt-20">
              Вспомнили пароль?{''}
              <Link to="/login">
                <Button
                  extraClass={styles.button}
                  htmlType="button"
                  type="secondary"
                  size="small"
                >
                  Войти
                </Button>
              </Link>
            </p>
          </div>
        </section>
      </>
    );
  } else {
    return <Navigate to="/forgot-password" replace />;
  }
};

export default ResetPassword;
