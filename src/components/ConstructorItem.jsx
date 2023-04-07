import React from 'react';
import {
  CurrencyIcon,
  DeleteIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/BurgerConstructor.module.css';

const ConstructorItem = (props) => {
  return (
    <li className={styles.constructorItem + ' ml-8 pl-6 pr-8 mb-4'}>
      <div className={styles.itemContainer}>
        <img src={props.data.image} className={styles.itemImage} />
        <p
          className={
            styles.ingredientName + ' pl-5 text text_type_main-default'
          }
        >
          {props.data.name}
        </p>
      </div>
      <div className={styles.itemContainer}>
        <p className="text text_type_digits-default pr-1 pl-5">
          {props.data.price}
        </p>
        <CurrencyIcon type="primary" />
        <div className="ml-5">
          <DeleteIcon type="primary" />
        </div>
      </div>
    </li>
  );
};

export default ConstructorItem;
