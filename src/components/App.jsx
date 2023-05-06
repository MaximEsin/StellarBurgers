import React, { useEffect, useState } from 'react';
import styles from '../styles/App.module.css';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../services/actions';
import Loader from './Loader';
import Main from '../pages/Main';

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
        <Header />
        <Main
          modalIngredientActive={modalIngredientActive}
          setModalIngredientActive={setModalIngredientActive}
          modalOrderActive={modalOrderActive}
          setModalOrderActive={setModalOrderActive}
          data={data}
        />
      </div>
    );
  }
}
export default App;
