import React from 'react';
import {
  CurrencyIcon,
  DeleteIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/BurgerConstructor.module.css';
import substract from '../images/Subtract.svg';
import PropTypes from 'prop-types';

const ConstructorItem = (props) => {
  ConstructorItem.propTypes = {
    data: PropTypes.object.isRequired,
    place: PropTypes.string,
  };
  let place;
  let icon;
  if (props.place === 'top') {
    place = ' (верх)';
    icon = <img src={substract} alt="замочек" />;
  } else if (props.place === 'bottom') {
    place = ' (низ)';
    icon = <img src={substract} alt="замочек" />;
  } else {
    icon = <DeleteIcon type="primary" />;
  }

  return (
    <li className={styles.constructorItem + ' ml-8 pl-6 pr-8 mb-4'}>
      <div className={styles.itemContainer}>
        <img
          src={props.data.image}
          className={styles.itemImage}
          alt="Ингредиент"
        />
        <p
          className={
            styles.ingredientName + ' pl-5 text text_type_main-default'
          }
        >
          {props.data.name}
          <br />
          {place}
        </p>
      </div>
      <div className={styles.itemContainer}>
        <p className="text text_type_digits-default pr-1 pl-5">
          {props.data.price}
        </p>
        <CurrencyIcon type="primary" />
        <div className="ml-5">{icon}</div>
      </div>
    </li>
  );
};

export default ConstructorItem;
