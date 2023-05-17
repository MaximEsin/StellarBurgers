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
