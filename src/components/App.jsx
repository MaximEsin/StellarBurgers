import React, { useEffect, useState } from 'react';
import styles from '../styles/App.module.css';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../services/actions';
import Loader from './Loader';
import Main from '../pages/Main';
import Registration from '../pages/Registration';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authorisation from '../pages/Authorisation';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Profile from '../pages/Profile';
import { ProtectedUnSignedRouteElement } from './ProtectedRouteElement';
import { ProtectedSignedRouteElement } from './ProtectedSignedRouteElement';

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
        <Router>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  modalIngredientActive={modalIngredientActive}
                  setModalIngredientActive={setModalIngredientActive}
                  modalOrderActive={modalOrderActive}
                  setModalOrderActive={setModalOrderActive}
                  data={data}
                />
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedSignedRouteElement element={<Registration />} />
              }
            />
            <Route
              path="/login"
              element={
                <ProtectedSignedRouteElement element={<Authorisation />} />
              }
            />
            <Route
              path="/forgot-password"
              element={
                <ProtectedSignedRouteElement element={<ForgotPassword />} />
              }
            />
            <Route
              path="/reset-password"
              element={
                <ProtectedSignedRouteElement element={<ResetPassword />} />
              }
            />
            <Route
              path="/profile"
              element={<ProtectedUnSignedRouteElement element={<Profile />} />}
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
