import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import BurgerIngredients from './components/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor';
import data from './data/Data';
import ModalOverlay from './components/ModalOverlay';

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
    let Ingredients;
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
    <div className="App">
      <ModalOverlay
        modalType={modalType}
        data={data}
        active={modalActive}
        setActive={setModalActive}
      />
      <Header />
      <main className="main">
        <div className="container">
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
