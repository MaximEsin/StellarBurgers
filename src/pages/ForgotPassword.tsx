import React, { ChangeEvent, FormEvent } from 'react';
import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/Registration.module.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleFormSubmit } from '../utils';
import { useLocation } from 'react-router-dom';
import { getEmailCode } from '../services/actions/Auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>('');
  const navigate = useNavigate();
  const prevRoute = useLocation();

  return (
    <>
      <section className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.heading + ' text text_type_main-medium mb-6'}>
            Восстановление пароля
          </h1>
          <form
            onSubmit={(event: FormEvent<HTMLFormElement>) =>
              handleFormSubmit(
                event,
                getEmailCode(email, () =>
                  navigate('/reset-password', {
                    state: { prevRoute },
                    replace: true,
                  })
                )
              )
            }
          >
            <Input
              type={'email'}
              placeholder={'Укажите e-mail'}
              extraClass="mb-6"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
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
