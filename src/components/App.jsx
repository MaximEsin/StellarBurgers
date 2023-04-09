import React, { useEffect, useState } from 'react';
import styles from '../styles/App.module.css';
import Header from './Header';
import BurgerIngredients from './BurgerIngredients';
import BurgerConstructor from './BurgerConstructor';
import data from '../data/Data';
import ModalOverlay from './ModalOverlay';

function App() {
  const config = {
    baseUrl: `https://norma.nomoreparties.space/api/ingredients `,
  };

  const [modalActive, setModalActive] = useState(false);
  const [modalType, setModalType] = useState('');

  const [state, setState] = useState({
    data: null,
    loading: false,
    recievedData: false,
  });

  useEffect(() => {
    let ingredients;
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
      <ModalOverlay
        modalType={modalType}
        data={data}
        active={modalActive}
        setActive={setModalActive}
      />
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <BurgerIngredients
            data={data}
            setActive={setModalActive}
            setModalType={setModalType}
          />
          <BurgerConstructor
            data={data}
            setActive={setModalActive}
            setModalType={setModalType}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
