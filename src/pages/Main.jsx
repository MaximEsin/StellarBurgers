import React from 'react';
import BurgerIngredients from '../components/Main/BurgerIngredients';
import BurgerConstructor from '../components/Main/BurgerConstructor';
import Modal from '../components/Modal';
import OrderDetails from '../components/Main/OrderDetails';
import IngredientDetails from '../components/Main/IngredientDetails';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import styles from '../styles/App.module.css';

const Main = (props) => {
  return (
    <>
      <Modal
        data={props.data}
        active={props.modalIngredientActive}
        setActive={props.setModalIngredientActive}
      >
        <OrderDetails />
      </Modal>
      <Modal
        data={props.data}
        active={props.modalOrderActive}
        setActive={props.setModalOrderActive}
      >
        <IngredientDetails data={props.data} />
      </Modal>

      <main className={styles.main}>
        <div className={styles.container}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients setActive={props.setModalOrderActive} />
            <BurgerConstructor setActive={props.setModalIngredientActive} />
          </DndProvider>
        </div>
      </main>
    </>
  );
};

export default Main;
