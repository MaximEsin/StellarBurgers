import React, { useEffect, useState } from 'react';
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
  data: Array<object>;
  modalOrderActive: boolean;
  setModalOrderActive: React.Dispatch<React.SetStateAction<boolean>>;
  closeModal: () => void;
}

const Main: FC<IMain> = ({ data, closeModal, setModalOrderActive }) => {
  const [modalIngredientActive, setModalIngredientActive] =
    useState<boolean>(false);
  const { isLoggedIn } = useAppSelector((state) => state.tokenReducer);
  useEffect(() => {
    if (!isLoggedIn && sessionStorage.refeshToken) {
      refresh();
    }
  }, []);

  const closeOrderModal = () => {
    setModalIngredientActive(false);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <DndProvider backend={HTML5Backend}>
          <Modal
            data={data}
            active={modalIngredientActive}
            closeModal={closeOrderModal}
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
