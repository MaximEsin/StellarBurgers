import React from 'react';
import styles from '../styles/Order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderItem from '../components/order/OrderItem';

const Order = () => {
  return (
    <section className={styles.orderSection + ' mb-20'}>
      <div className={styles.orderContainer}>
        <p className={styles.orderNumber + ' text text_type_digits-default'}>
          #034533
        </p>
        <p className="text text_type_main-medium mb-3">
          Black Hole Singularity острый бургер
        </p>
        <p
          className={styles.orderStatus + ' text text_type_main-default mb-15'}
        >
          Выполнен
        </p>
        <p className="text text_type_main-medium mb-6">Состав:</p>
        <div className={styles.ingredientsContainer + ' mt-6'}>
          <div className={styles.scroll}>
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </div>
        </div>
        <div className={styles.bottomContainer}>
          <p className="text text_type_main-default text_color_inactive">
            Вчера, 13:50
          </p>
          <div className={styles.priceContainer}>
            <p className="text text_type_digits-default mr-2">510</p>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Order;
