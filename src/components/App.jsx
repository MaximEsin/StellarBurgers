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
import {
  BurgerIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

function App() {
  const [modalIngredientActive, setModalIngredientActive] = useState(false);
  const [modalOrderActive, setModalOrderActive] = useState(false);
  const [constructor, setConstructor] = useState(
    <div className={styles.navItem + ' pt-4 pb-4 ml-5 mr-5'}>
      <BurgerIcon type="primary" />
      <p className={styles.activeText + ' text text_type_main-default pl-2'}>
        Конструктор
      </p>
    </div>
  );
  const [profile, setProfile] = useState(
    <div className={styles.navItem + ' pt-4 pb-4 ml-5 mr-5'}>
      <ProfileIcon type="secondary" />
      <p className="text text_type_main-default text_color_inactive pl-2">
        Личный кабинет
      </p>
    </div>
  );
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
          <Header constructor={constructor} profile={profile} />
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
                  setConstructor={setConstructor}
                  setProfile={setProfile}
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
              element={
                <ProtectedUnSignedRouteElement
                  element={
                    <Profile
                      setConstructor={setConstructor}
                      setProfile={setProfile}
                    />
                  }
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
