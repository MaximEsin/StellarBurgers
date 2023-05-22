import React from 'react';
import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../../styles/BurgerIngredients.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Loader';
import { getIngredient } from '../../services/actions/Modals';
import { useDrag } from 'react-dnd';
import { Link, useLocation } from 'react-router-dom';
import { FC } from 'react';

interface IBurgerIngredient {
  data: any;
  setActive: any;
}

const BurgerIngredient: FC<IBurgerIngredient> = ({ data, setActive }) => {
  const { constructorData, bunInOrder } = useSelector(
    (state: any) => state.dataReducer
  );

  const dispatch: any = useDispatch();
  const location = useLocation();

  const id = data._id;

  const [, dragRef] = useDrag({
    type: 'ingredient',
    item: { id },
  });

  let counter;
  const amount = constructorData.filter((item: any) => item._id === id).length;
  const bunsAmount = bunInOrder.filter((item: any) => item._id === id).length;
  if (amount > 0) {
    counter = (
      <Counter
        count={amount}
        size="default"
        extraClass={styles.counter + ' m-1'}
      />
    );
  } else if (bunsAmount > 0) {
    counter = (
      <Counter
        count={bunsAmount * 2}
        size="default"
        extraClass={styles.counter + ' m-1'}
      />
    );
  } else {
    counter = '';
  }

  if (data.length > 1) {
    return <Loader />;
  } else {
    return (
      <Link
        to={`/ingredients/${data._id}`}
        style={{ textDecoration: 'none', color: '#F2F2F3' }}
        state={{ background: location }}
      >
        <li
          ref={dragRef}
          className={styles.ingredientCard}
          onClick={() => {
            setActive(true);
            dispatch(getIngredient(data));
          }}
        >
          {counter}
          <img src={data.image} className="pl-4 pr-4 pb-1" alt="Счетчик" />
          <div className={styles.priceContainer + ' pb-1'}>
            <p className="text text_type_digits-default pr-1">{data.price}</p>
            <CurrencyIcon type="primary" />
          </div>
          <p className={styles.ingredientName + ' text text_type_main-default'}>
            {data.name}
          </p>
        </li>
      </Link>
    );
  }
};

export default BurgerIngredient;
