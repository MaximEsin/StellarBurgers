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
import { addItem } from '../services/actions';
import TotalPrice from './TotalPrice';
import { v4 as uuidv4 } from 'uuid';
import dots from '../images/dots.svg';

const BurgerConstructor = (props) => {
  const { data, constructorData } = useSelector((state) => state.dataReducer);

  const dispatch = useDispatch();

  const [, drop] = useDrop({
    accept: ['ingredient', 'ingredient_wide'],
    drop(itemId) {
      const uniqueId = uuidv4();
      dispatch(addItem(itemId, uniqueId));
    },
  });

  if (data.length < 1) {
    return <Loader />;
  } else {
    const ids = [data[0]._id, data[0]._id];
    const priceArray = [data[0].price, data[0].price];
    return (
      <section className="pt-25">
        <ul ref={drop} className={styles.ingredientsList}>
          <ConstructorItem data={constructorData[0]} place="top" />
          <div className={styles.scroll}>
            {constructorData.map((item) => {
              if (item.type !== 'bun') {
                ids.push(item._id);
                priceArray.push(item.price);
                return (
                  <div className={styles.draggableItemContainer}>
                    <img
                      src={dots}
                      alt="Иконка переноса"
                      className={styles.dots}
                    />
                    <ConstructorItem data={item} key={item.uniqueId} />
                  </div>
                );
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

BurgerConstructor.propTypes = {
  setActive: PropTypes.func.isRequired,
};

export default BurgerConstructor;
