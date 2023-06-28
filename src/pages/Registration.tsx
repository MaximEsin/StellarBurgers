import React, { ChangeEvent, FormEvent } from 'react';
import {
  Input,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/Registration.module.css';
import { Link } from 'react-router-dom';
import { register } from '../services/actions/Auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleFormSubmit } from '../utils';

const Registration = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const navigate = useNavigate();

  return (
    <section className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.heading + ' text text_type_main-medium mb-6'}>
          Регистрация
        </h1>
        <form
          onSubmit={(event: FormEvent<HTMLFormElement>) =>
            handleFormSubmit(
              event,
              register(email, password, name, () =>
                navigate('/login', { replace: true })
              )
            )
          }
        >
          <Input
            type={'text'}
            placeholder={'Имя'}
            extraClass="mb-6"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            value={name || ''}
          />
          <Input
            type={'email'}
            placeholder={'e-mail'}
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
            Зарегестрироваться
          </Button>
        </form>
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
