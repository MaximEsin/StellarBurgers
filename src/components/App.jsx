import React, { useEffect, useState } from 'react';
import styles from '../styles/App.module.css';
import Header from './Header';
import BurgerIngredients from './BurgerIngredients';
import BurgerConstructor from './BurgerConstructor';
import data from '../data/Data';
import Modal from './Modal';
import OrderDetails from './OrderDetails';
import IngredientDetails from './IngredientDetails';

function App() {
  const config = {
    baseUrl: `https://norma.nomoreparties.space/api/ingredients `,
  };

  const [modalActive, setModalActive] = useState(false);

  const [state, setState] = useState({
    data: null,
    loading: false,
    recievedData: false,
  });

  useEffect(() => {
    const getInitialData = () => {
      setState({ ...state, loading: true });
      fetch(config.baseUrl)
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка ${res.status}`);
        })
        .then((res) => {
          setState({ data: res.data, loading: false, recievedData: true });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getInitialData();
  }, []);

  return (
    <div className={styles.App}>
      <Modal data={data} active={modalActive} setActive={setModalActive}>
        <OrderDetails setActive={setModalActive} />
      </Modal>
      <Modal data={data} active={modalActive} setActive={setModalActive}>
        <IngredientDetails setActive={setModalActive} data={data} />
      </Modal>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <BurgerIngredients data={data} setActive={setModalActive} />
          <BurgerConstructor data={data} setActive={setModalActive} />
        </div>
      </main>
    </div>
  );
}

export default App;
