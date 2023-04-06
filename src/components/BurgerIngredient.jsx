import React from 'react';
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/BurgerIngredients.module.css';

const BurgerIngredient = (props) => {
  if (props.counter) {
    return (
      <div className={styles.ingredientCard}>
        <Counter
          count={1}
          size="default"
          extraClass="m-1"
          className={styles.counter}
        />
        <img src={props.data.image} className="pl-4 pr-4 pb-1" />
        <div className={styles.priceContainer + ' pb-1'}>
          <p className="text text_type_digits-default pr-1">
            {props.data.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={styles.ingredientName + ' text text_type_main-default'}>
          {props.data.name}
        </p>
      </div>
    );
  } else {
    return (
      <div className={styles.ingredientCard}>
        <img src={props.data.image} className="pl-4 pr-4 pb-1" />
        <div className={styles.priceContainer + ' pb-1'}>
          <p className="text text_type_digits-default pr-1">
            {props.data.price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <p className={styles.ingredientName + ' text text_type_main-default'}>
          {props.data.name}
        </p>
      </div>
    );
  }
};

export default BurgerIngredient;
