import React from 'react';
import styles from '../styles/BurgerConstructor.module.css';
import ConstructorItem from './ConstructorItem';
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const BurgerConstructor = (props) => {
  return (
    <section className="pt-25">
      <ul className={styles.scroll}>
        <ConstructorItem data={props.data[0]} place="top" />
        <ConstructorItem data={props.data[1]} />
        <ConstructorItem data={props.data[2]} />
        <ConstructorItem data={props.data[3]} />
        <ConstructorItem data={props.data[4]} />
        <ConstructorItem data={props.data[5]} />
        <ConstructorItem data={props.data[6]} place="bottom" />
      </ul>
      <div className={styles.totalContainer + ' mt-10 mr-4'}>
        <p className="text text_type_digits-medium mr-2">610</p>
        <CurrencyIcon />
        <div className={styles.buttonWrapper}>
          <Button
            htmlType="button"
            type="primary"
            size="large"
            onClick={() => {
              props.setActive(true);
              props.setModalType('Order');
            }}
          >
            Оформить заказ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BurgerConstructor;
