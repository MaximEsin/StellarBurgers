import React, { useEffect, useState } from 'react';
import styles from '../styles/App.module.css';
import Header from './Header';
import BurgerIngredients from './BurgerIngredients';
import BurgerConstructor from './BurgerConstructor';
import Modal from './Modal';
import OrderDetails from './OrderDetails';
import IngredientDetails from './IngredientDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../services/actions';
import Loader from './Loader';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {
  const [modalIngredientActive, setModalIngredientActive] = useState(false);
  const [modalOrderActive, setModalOrderActive] = useState(false);
  const { data, dataRequest, dataFailed } = useSelector(
    (state) => state.dataReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  if (dataFailed) {
    return <p>Произошла ошибка при получении данных</p>;
  } else if (dataRequest) {
    return <Loader />;
  } else {
    return (
      <div className={styles.App}>
        <Modal
          data={data}
          active={modalIngredientActive}
          setActive={setModalIngredientActive}
        >
          <OrderDetails />
        </Modal>
        <Modal
          data={data}
          active={modalOrderActive}
          setActive={setModalOrderActive}
        >
          <IngredientDetails data={data} />
        </Modal>
        <Header />
        <main className={styles.main}>
          <div className={styles.container}>
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients data={data} setActive={setModalOrderActive} />
              <BurgerConstructor setActive={setModalIngredientActive} />
            </DndProvider>
          </div>
        </main>
      </div>
    );
  }
}
export default App;
