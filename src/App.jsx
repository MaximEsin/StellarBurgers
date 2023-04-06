import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import BurgerIngredients from './components/BurgerIngredients';
import BurgerConstructor from './components/BurgerConstructor';
import data from './data/Data';

function App() {
  const config = {
    baseUrl: `https://norma.nomoreparties.space/api/ingredients `,
  };

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
      <Header />
      <main className="main">
        <div className="container">
          <BurgerIngredients data={data} />
          <BurgerConstructor data={data} />
        </div>
      </main>
    </div>
  );
}

export default App;
