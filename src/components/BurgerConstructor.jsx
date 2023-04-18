import React from 'react';
import styles from '../styles/BurgerConstructor.module.css';
import ConstructorItem from './ConstructorItem';
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { postOrder } from '../services/actions/Modals';
import PropTypes from 'prop-types';
import Loader from './Loader';
import { useDrop } from 'react-dnd';
import { AddItem } from '../services/actions';
import TotalPrice from './TotalPrice';

const BurgerConstructor = (props) => {
  BurgerConstructor.propTypes = {
    setActive: PropTypes.func.isRequired,
  };

  const { data, constructorData } = useSelector((state) => state.dataReducer);

  const dispatch = useDispatch();

  const [, drop] = useDrop({
    accept: ['ingredient', 'ingredient_wide'],
    drop(itemId) {
      dispatch(AddItem(itemId));
    },
  });

  if (data.length < 1) {
    return <Loader />;
  } else {
    const ids = [data[0]._id, data[0]._id];
    const priceArray = [data[0].price, data[0].price];
    return (
      <section className="pt-25">
        <ul ref={drop}>
          <ConstructorItem data={constructorData[0]} place="top" />
          <div className={styles.scroll}>
            {constructorData.map((item, index) => {
              if (item.type !== 'bun') {
                ids.push(item._id);
                priceArray.push(item.price);
                return <ConstructorItem data={item} key={index} />;
              }
            })}
          </div>
          <ConstructorItem data={constructorData[1]} place="bottom" />
        </ul>
        <div className={styles.totalContainer + ' mt-10 mr-4'}>
          <p className="text text_type_digits-medium mr-2">
            <TotalPrice price={priceArray} />
          </p>
          <CurrencyIcon />
          <div className={styles.buttonWrapper}>
            <Button
              htmlType="button"
              type="primary"
              size="large"
              onClick={() => {
                props.setActive(true);
                dispatch(postOrder(ids));
              }}
            >
              Оформить заказ
            </Button>
          </div>
        </div>
      </section>
    );
  }
};

export default BurgerConstructor;
