import React from 'react';
import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/Registration.module.css';
import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading + ' text text_type_main-medium mb-6'}>
          Регистрация
        </h1>
        <div>
          <Input type={'text'} placeholder={'Имя'} extraClass="mb-6" />
          <Input type={'email'} placeholder={'e-mail'} extraClass="mb-6" />
          <Input
            type={'password'}
            placeholder={'Пароль'}
            icon={'ShowIcon'}
            extraClass="mb-6"
          />
          <Button htmlType="button" type="primary" size="medium">
            Зарегестрироваться
          </Button>
        </div>
        <p className="text text_type_main-default text_color_inactive mt-20">
          Уже зарегестрированы?{''}
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
  );
};

export default Registration;
