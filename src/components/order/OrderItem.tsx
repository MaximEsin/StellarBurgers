import React from 'react';
import styles from '../../styles/Order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const OrderItem = () => {
  return (
    <div className={styles.orderItemContainer}>
      <p className="mr-4">Image here</p>
      <p className="text text_type_main-default mr-4">
        Флюоресцентная булка R2-D3
      </p>
      <div className={styles.priceContainer}>
        <p className="text text_type_digits-default mr-2">510</p>
        <CurrencyIcon type="primary" />
      </div>
    </div>
  );
};

export default OrderItem;
