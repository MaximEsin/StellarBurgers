import React, { useEffect } from 'react';
import BurgerIngredients from '../components/Main/BurgerIngredients';
import BurgerConstructor from '../components/Main/BurgerConstructor';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from '../styles/App.module.css';
import { refresh } from '../utils';
import Modal from '../components/Modal';
import OrderDetails from '../components/Main/OrderDetails';
import { FC } from 'react';

interface IMain {
  data: [];
  modalIngredientActive: boolean;
  modalOrderActive: boolean;
  setModalIngredientActive: any;
  setModalOrderActive: any;
}

const Main: FC<IMain> = ({
  data,
  modalIngredientActive,
  modalOrderActive,
  setModalIngredientActive,
  setModalOrderActive,
}) => {
  useEffect(() => {
    if (!localStorage.accessToken && localStorage.refeshToken) {
      refresh();
    }
  }, []);

  return (
    <main className={styles.main}>
      <Modal
        data={data}
        active={modalIngredientActive}
        setActive={setModalIngredientActive}
      >
        <OrderDetails />
      </Modal>
      <div className={styles.container}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients setActive={setModalOrderActive} />
          <BurgerConstructor setActive={setModalIngredientActive} />
        </DndProvider>
      </div>
    </main>
  );
};

export default Main;
