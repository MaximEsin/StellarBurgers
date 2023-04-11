import React from 'react';
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/BurgerIngredients.module.css';
import PropTypes from 'prop-types';

const BurgerIngredient = (props) => {
  BurgerIngredient.propTypes = {
    counter: PropTypes.bool.isRequired,
    data: PropTypes.object.isRequired,
    setActive: PropTypes.func.isRequired,
  };
  let counter;
  if (props.counter) {
    counter = (
      <Counter
        count={1}
        size="default"
        extraClass="m-1"
        className={styles.counter}
      />
    );
  } else {
    counter = '';
  }

  return (
    <li
      className={styles.ingredientCard}
      onClick={() => {
        props.setActive(true);
      }}
    >
      {counter}
      <img src={props.data.image} className="pl-4 pr-4 pb-1" alt="Счетчик" />
      <div className={styles.priceContainer + ' pb-1'}>
        <p className="text text_type_digits-default pr-1">{props.data.price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className={styles.ingredientName + ' text text_type_main-default'}>
        {props.data.name}
      </p>
    </li>
  );
};

export default BurgerIngredient;
