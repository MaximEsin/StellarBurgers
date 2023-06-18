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
import Feed from '../pages/Feed';
import ProfileOrders from '../pages/ProfileOrders';
import Order from '../pages/Order';
import { useNavigate } from 'react-router-dom';

function App() {
  const [modalOrderActive, setModalOrderActive] = useState<boolean>(false);
  const [modalOrderItemActive, setModalOrderItemActive] =
    useState<boolean>(false);
  const [modalProfileOrderActive, setModalProfileOrderActive] =
    useState<boolean>(false);

  const { data, dataRequest, dataFailed } = useAppSelector(
    (state) => state.dataReducer
  );

  const location = useLocation();
  const navigate = useNavigate();
  const background = location.state && location.state.background;

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const closeModal = () => {
    setModalOrderActive(false);
    setModalOrderItemActive(false);
    setModalProfileOrderActive(false);
    navigate(-1);
  };

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
                closeModal={closeModal}
                setModalOrderActive={setModalOrderActive}
                modalOrderActive={modalOrderActive}
                data={data}
              />
            }
          />
          <Route
            path="/feed"
            element={<Feed setActive={setModalOrderItemActive} />}
          ></Route>
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
              <ProtectedUnSignedRouteElement
                element={
                  <ProfileOrders setActive={setModalProfileOrderActive} />
                }
              />
            }
          />
          <Route
            path="/feed/:_id"
            element={<Order setActive={setModalProfileOrderActive} />}
          />
          <Route
            path="/profile/orders/:_id"
            element={
              <ProtectedUnSignedRouteElement
                element={<Order setActive={setModalProfileOrderActive} />}
              />
            }
          />
        </Routes>
        {background && (
          <Routes>
            <Route
              path="/ingredients/:_id"
              element={
                <Modal
                  active={modalOrderActive}
                  data={data}
                  closeModal={closeModal}
                >
                  <IngredientDetails
                    info={data}
                    setActive={setModalOrderActive}
                  />
                </Modal>
              }
            />
            <Route
              path="/feed/:_id"
              element={
                <Modal
                  active={modalOrderItemActive}
                  data={data}
                  closeModal={closeModal}
                >
                  <Order setActive={setModalOrderItemActive} />
                </Modal>
              }
            />
            <Route
              path="/profile/orders/:_id"
              element={
                <Modal
                  active={modalProfileOrderActive}
                  data={data}
                  closeModal={closeModal}
                >
                  <Order setActive={setModalProfileOrderActive} />
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
