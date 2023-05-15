import React, { useEffect } from 'react';
import BurgerIngredients from '../components/Main/BurgerIngredients';
import BurgerConstructor from '../components/Main/BurgerConstructor';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from '../styles/App.module.css';
import {
  BurgerIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { refresh } from '../utils';

const Main = (props) => {
  useEffect(() => {
    props.setConstructor(
      <div className={styles.navItem + ' pt-4 pb-4 ml-5 mr-5'}>
        <BurgerIcon type="primary" />
        <p className={styles.activeText + ' text text_type_main-default pl-2'}>
          Конструктор
        </p>
      </div>
    );
    props.setProfile(
      <div className={styles.navItem + ' pt-4 pb-4 ml-5 mr-5'}>
        <ProfileIcon type="secondary" />
        <p className="text text_type_main-default text_color_inactive pl-2">
          Личный кабинет
        </p>
      </div>
    );
  }, []);

  useEffect(() => {
    if (!localStorage.accessToken && localStorage.refeshToken) {
      refresh();
    }
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients setActive={props.setModalOrderActive} />
          <BurgerConstructor setActive={props.setModalIngredientActive} />
        </DndProvider>
      </div>
    </main>
  );
};

export default Main;
