import React, { useMemo } from 'react';
import styles from '../styles/BurgerConstructor.module.css';
import ConstructorItem from './ConstructorItem';
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from 'react-redux';
import { postOrder } from '../services/actions';
import PropTypes from 'prop-types';
import Loader from './Loader';

const BurgerConstructor = (props) => {
  BurgerConstructor.propTypes = {
    data: PropTypes.array.isRequired,
    setActive: PropTypes.func.isRequired,
  };

  const dispatch = useDispatch();

  if (props.data.length < 1) {
    return <Loader />;
  } else {
    const priceArray = [props.data[0].price * 2];
    const totalPrice = priceArray.reduce((b, a) => b + a, 0);
    const ids = [props.data[0]._id, props.data[0]._id];
    return (
      <section className="pt-25">
        <ul>
          <ConstructorItem data={props.data[0]} place="top" />
          <div className={styles.scroll}>
            {props.data.map((item) => {
              if (item.type === 'main') {
                ids.push(item._id);
                priceArray.push(item.price);
                return <ConstructorItem key={item._id} data={item} />;
              }
            })}
          </div>
          <ConstructorItem data={props.data[0]} place="bottom" />
        </ul>
        <div className={styles.totalContainer + ' mt-10 mr-4'}>
          <p className="text text_type_digits-medium mr-2">{totalPrice}</p>
          <CurrencyIcon />
          <div className={styles.buttonWrapper}>
            <Button
              htmlType="button"
              type="primary"
              size="large"
              onClick={() => {
                props.setActive(true);
                dispatch(postOrder(ids));
              }}
            >
              Оформить заказ
            </Button>
          </div>
        </div>
      </section>
    );
  }
};

export default BurgerConstructor;
