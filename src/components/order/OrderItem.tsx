import React from 'react';
import styles from '../../styles/Order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';

interface TOrderItem {
  image: string;
  name: string;
  price: number;
}

const OrderItem: FC<TOrderItem> = ({ image, name, price }) => {
  return (
    <div className={styles.orderItemContainer}>
      <img className={styles.img + ' mr-4'} src={image} />
      <p className="text text_type_main-default mr-4">{name}</p>
      <div className={styles.priceContainer}>
        <p className="text text_type_digits-default mr-2">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
    </div>
  );
};

export default OrderItem;
