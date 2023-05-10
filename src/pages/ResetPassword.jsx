import React from 'react';
import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/Registration.module.css';
import { Link } from 'react-router-dom';
import { request } from '../utils';
import { useState } from 'react';
import { refresh } from '../utils';

const ResetPassword = () => {
  const [password, setPassword] = useState();

  const resetPassword = (password) => {
    if (!localStorage.accessToken) {
      refresh();
    } else {
      request('/reset-password/reset', {
        method: 'POST',
        headers: {
          authorization: 'd5b34af3-ad0b-4c78-bdcc-85f9d783b0bc',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          password: password,
          token: localStorage.refreshToken,
        }),
      }).then((res) => console.log(res));
    }
  };

  return (
    <>
      <section className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.heading + ' text text_type_main-medium mb-6'}>
            Восстановление пароля
          </h1>
          <div>
            <Input
              type={'password'}
              placeholder={'Введите новый пароль'}
              extraClass="mb-6"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type={'text'}
              placeholder={'Введите код из письма'}
              extraClass="mb-6"
            />
            <Button
              htmlType="button"
              type="primary"
              size="medium"
              onClick={() => resetPassword(password)}
            >
              Сохранить
            </Button>
          </div>
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
};

export default ResetPassword;
