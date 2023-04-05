import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  const config = {
    baseUrl: `https://norma.nomoreparties.space/api/ingredients `,
  };

  const [state, setState] = useState({
    data: null,
    loading: false,
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
          setState({ data: res.data, loading: false });
        });
    };
    getInitialData();
  }, []);
  console.log(state);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
