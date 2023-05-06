import { React } from 'react';
import styles from '../../styles/BurgerConstructor.module.css';
import ConstructorItem from './ConstructorItem';
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { postOrder } from '../../services/actions/Modals';
import PropTypes from 'prop-types';
import Loader from '../Loader';
import { useDrop, useDrag } from 'react-dnd';
import { addItem } from '../../services/actions';
import TotalPrice from './TotalPrice';
import { v4 as uuidv4 } from 'uuid';
import dots from '../../images/dots.svg';
import { MOVE_CONSTRUCTOR_ITEM } from '../../services/actions/constants';
import { useCallback } from 'react';

const BurgerConstructor = (props) => {
  const { data, constructorData, bunInOrder } = useSelector(
    (state) => state.dataReducer
  );

  const moveElement = useCallback((dragIndex, hoverIndex) => {
    dispatch({
      type: MOVE_CONSTRUCTOR_ITEM,
      dragIndex,
      hoverIndex,
    });
  }, []);

  const dispatch = useDispatch();

  const [, drop] = useDrop({
    accept: 'ingredient',
    drop(itemId) {
      const uniqueId = uuidv4();
      dispatch(addItem(itemId, uniqueId));
    },
  });

  if (data.length < 1) {
    return <Loader />;
  } else {
    const ids = [data[0]._id, data[0]._id];
    let priceArray = [];
    if (bunInOrder.length > 0) {
      priceArray = [bunInOrder[0].price, bunInOrder[0].price];
    }

    let announce;
    if (constructorData.length === 0 && bunInOrder.length === 0) {
      announce = (
        <p className={styles.announce}>
          Пожалуйста, перенесите сюда булку и ингредиенты для создания заказа
        </p>
      );
    }

    return (
      <section className={styles.constructorContainer + ' pt-25'}>
        <ul ref={drop} className={styles.ingredientsList}>
          {announce}
          <ConstructorItem data={bunInOrder[0]} place="top" />
          <div className={styles.scroll}>
            {constructorData.map((item, index) => {
              if (item.type !== 'bun') {
                ids.push(item._id);
                priceArray.push(item.price);
                return (
                  <ConstructorItem
                    data={item}
                    key={item.uniqueId}
                    img={dots}
                    moveElement={moveElement}
                    index={index}
                    id={item._id}
                    element={item}
                  />
                );
              }
            })}
          </div>
          <ConstructorItem data={bunInOrder[0]} place="bottom" />
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
