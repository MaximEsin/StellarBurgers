import React, { useEffect } from 'react';
import BurgerIngredients from '../components/Main/BurgerIngredients';
import BurgerConstructor from '../components/Main/BurgerConstructor';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from '../styles/App.module.css';
import { refresh } from '../services/actions/Auth';
import Modal from '../components/Modal';
import OrderDetails from '../components/Main/OrderDetails';
import { FC } from 'react';
import { useAppSelector } from '../hooks';

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
  setModalIngredientActive,
  setModalOrderActive,
}) => {
  const { isLoggedIn } = useAppSelector((state) => state.tokenReducer);
  useEffect(() => {
    if (!isLoggedIn && sessionStorage.refeshToken) {
      refresh();
    }
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <DndProvider backend={HTML5Backend}>
          <Modal
            data={data}
            active={modalIngredientActive}
            setActive={setModalIngredientActive}
          >
            <OrderDetails />
          </Modal>
          <BurgerIngredients setActive={setModalOrderActive} />
          <BurgerConstructor setActive={setModalIngredientActive} />
        </DndProvider>
      </div>
    </main>
  );
};

export default Main;
