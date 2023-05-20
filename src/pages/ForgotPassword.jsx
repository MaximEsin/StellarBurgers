import React from 'react';
import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/Registration.module.css';
import { Link } from 'react-router-dom';
import { request } from '../utils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleFormSubmit } from '../utils';
import { useLocation } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const prevRoute = useLocation();

  const getEmailCode = (email) => {
    request('/password-reset', {
      method: 'POST',
      headers: {
        authorization: 'd5b34af3-ad0b-4c78-bdcc-85f9d783b0bc',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((res) => {
        if (res.success) {
          navigate('/reset-password', { state: { prevRoute }, replace: true });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <section className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.heading + ' text text_type_main-medium mb-6'}>
            Восстановление пароля
          </h1>
          <form
            onSubmit={(event) => handleFormSubmit(event, getEmailCode(email))}
          >
            <Input
              type={'email'}
              placeholder={'Укажите e-mail'}
              extraClass="mb-6"
              onChange={(e) => setEmail(e.target.value)}
              value={email || ''}
            />
            <Button htmlType="submit" type="primary" size="medium">
              Восстановить
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
};

export default ForgotPassword;
