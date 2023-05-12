import React from 'react';
import styles from '../styles/Header.module.css';
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.navItemContainer}>
          <Link style={{ textDecoration: 'none' }} to="/">
            {props.constructor}
          </Link>
          <div className={styles.navItem + ' pt-4 pb-4 ml-5 mr-5'}>
            <ListIcon type="secondary" />
            <p className="text text_type_main-default text_color_inactive pl-2">
              Лента заказов
            </p>
          </div>
        </div>
        <div className={styles.logo}>
          <Logo />
        </div>
        <Link style={{ textDecoration: 'none' }} to="/profile">
          {props.profile}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
