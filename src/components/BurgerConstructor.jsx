import React from 'react';
import styles from '../styles/BurgerConstructor.module.css';
import ConstructorItem from './ConstructorItem';
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';

const BurgerConstructor = (props) => {
  BurgerConstructor.propTypes = {
    data: PropTypes.array.isRequired,
    setActive: PropTypes.func.isRequired,
  };
  return (
    <section className="pt-25">
      <ul>
        <ConstructorItem data={props.data[0]} place="top" />
        <div className={styles.scroll}>
          {props.data.map((item) => {
            if (item.type === 'main') {
              return <ConstructorItem key={item.name} data={item} />;
            }
          })}
        </div>
        <ConstructorItem data={props.data[0]} place="bottom" />
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
