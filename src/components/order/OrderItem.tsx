import React from 'react';
import styles from '../../styles/Order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';

interface TOrderItem {
  image: string;
  name: string;
  price: number;
  amount: number;
}

const OrderItem: FC<TOrderItem> = ({ image, name, price, amount }) => {
  return (
    <div className={styles.orderItemContainer}>
      <img className={styles.img + ' mr-4'} src={image} />
      <p className={styles.name + ' text text_type_main-default'}>{name}</p>
      <div className={styles.priceContainer}>
        <p className="text text_type_digits-default mr-2">
          {amount} X {price}
        </p>
        <CurrencyIcon type="primary" />
      </div>
    </div>
  );
};

export default OrderItem;
