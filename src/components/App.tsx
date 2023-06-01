import React, { useEffect, useState } from 'react';
import styles from '../styles/App.module.css';
import Header from './Header';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getData } from '../services/actions';
import Loader from './Loader';
import Main from '../pages/Main';
import Registration from '../pages/Registration';
import { Routes, Route } from 'react-router-dom';
import Authorisation from '../pages/Authorisation';
import ForgotPassword from '../pages/ForgotPassword';
import ResetPassword from '../pages/ResetPassword';
import Profile from '../pages/Profile';
import { ProtectedUnSignedRouteElement } from './ProtectedRouteElement';
import { ProtectedSignedRouteElement } from './ProtectedSignedRouteElement';
import Ingredient from '../pages/Ingredient';
import { useLocation } from 'react-router-dom';
import Modal from './Modal';
import IngredientDetails from './Main/IngredientDetails';
import { AppDispatch } from '../services/reducers';
import Feed from '../pages/Feed';
import ProfileOrders from '../pages/ProfileOrders';

function App() {
  const [modalIngredientActive, setModalIngredientActive] =
    useState<boolean>(false);
  const [modalOrderActive, setModalOrderActive] = useState<boolean>(false);

  const { data, dataRequest, dataFailed } = useAppSelector(
    (state: any) => state.dataReducer
  );

  const location = useLocation();
  const background = location.state && location.state.background;

  const dispatch: AppDispatch = useAppDispatch();

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
        <Routes location={background || location}>
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
          <Route path="/feed" element={<Feed />}></Route>
          <Route
            path="/register"
            element={<ProtectedSignedRouteElement element={<Registration />} />}
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
          <Route path="/ingredients/:_id" element={<Ingredient />} />
          <Route
            path="/profile/orders"
            element={
              <ProtectedUnSignedRouteElement element={<ProfileOrders />} />
            }
          />
        </Routes>
        {background && (
          <Routes>
            <Route
              path="/ingredients/:_id"
              element={
                <Modal
                  data={data}
                  active={modalOrderActive}
                  setActive={setModalOrderActive}
                >
                  <IngredientDetails
                    info={data}
                    setActive={setModalOrderActive}
                  />
                </Modal>
              }
            />
          </Routes>
        )}
      </div>
    );
  }
}
export default App;
