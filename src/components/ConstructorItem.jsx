import React from 'react';
import {
  CurrencyIcon,
  DeleteIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/BurgerConstructor.module.css';
import substract from '../images/Subtract.svg';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import ConstructorItemWrapper from './ConstructorItemWrapper';
import { REMOVE_ITEM } from '../services/actions/constants';

const ConstructorItem = (props) => {
  const dispatch = useDispatch();

  let place;
  let icon;
  let dots;
  if (props.place === 'top') {
    place = ' (верх)';
    icon = <img src={substract} alt="замочек" />;
  } else if (props.place === 'bottom') {
    place = ' (низ)';
    icon = <img src={substract} alt="замочек" />;
  } else {
    icon = <DeleteIcon type="primary" />;
    dots = <div className={styles.dots}></div>;
  }

  return (
    <>
      <ConstructorItemWrapper place={props.place} data={props.data.uniqueId}>
        <div className={styles.itemContainer + ' pl-3'}>
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
        <div className={styles.itemContainer + ' pr-5'}>
          <p className="text text_type_digits-default pr-1 pl-5">
            {props.data.price}
          </p>
          <CurrencyIcon type="primary" />
          <div
            className={styles.lock + ' ml-5'}
            onClick={() => {
              if (props.place !== 'top' && props.place !== 'bottom') {
                dispatch({ type: REMOVE_ITEM, id: props.data.uniqueId });
              }
            }}
          >
            {icon}
          </div>
        </div>
      </ConstructorItemWrapper>
    </>
  );
};

ConstructorItem.propTypes = {
  data: PropTypes.object.isRequired,
  place: PropTypes.string,
};

export default ConstructorItem;
