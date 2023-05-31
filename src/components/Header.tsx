import React from 'react';
import styles from '../styles/Header.module.css';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navItemContainer}>
          <Link style={{ textDecoration: 'none' }} to="/">
            <div className={styles.navItem + ' pt-4 pb-4 ml-5 mr-5'}>
              <BurgerIcon
                type={`${pathname === '/' ? 'primary' : 'secondary'}`}
              />
              <p
                className={
                  `${
                    pathname === '/' ? styles.activeText : 'text_color_inactive'
                  }` + ' text text_type_main-default pl-2'
                }
              >
                Конструктор
              </p>
            </div>
          </Link>
          <Link style={{ textDecoration: 'none' }} to="/feed">
            <div className={styles.navItem + ' pt-4 pb-4 ml-5 mr-5'}>
              <ListIcon
                type={`${pathname === '/feed' ? 'primary' : 'secondary'}`}
              />
              <p
                className={
                  `${
                    pathname === '/feed'
                      ? styles.activeText
                      : 'text_color_inactive'
                  }` + ' text text_type_main-default pl-2'
                }
              >
                Лента заказов
              </p>
            </div>
          </Link>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <Link style={{ textDecoration: 'none' }} to="/profile">
          <div className={styles.navItem + ' pt-4 pb-4 ml-5 mr-5'}>
            <ProfileIcon
              type={`${pathname === '/profile' ? 'primary' : 'secondary'}`}
            />
            <p
              className={
                `${
                  pathname === '/profile'
                    ? styles.activeText
                    : 'text_color_inactive'
                }` + ' text text_type_main-default pl-2'
              }
            >
              Личный кабинет
            </p>
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
