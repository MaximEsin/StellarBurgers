import styles from '../../styles/BurgerConstructor.module.css';
import ConstructorItem from './ConstructorItem';
import {
  CurrencyIcon,
  Button,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { postOrder } from '../../services/actions/Modals';
import Loader from '../Loader';
import { useDrop, useDrag } from 'react-dnd';
import { addItem } from '../../services/actions';
import TotalPrice from './TotalPrice';
import { v4 as uuidv4 } from 'uuid';
import dots from '../../images/dots.svg';
import { MOVE_CONSTRUCTOR_ITEM } from '../../services/actions/constants';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { FC } from 'react';
import { TIngredient } from '../../services/reducers';

interface IBurgerConstructor {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const BurgerConstructor: FC<IBurgerConstructor> = ({ setActive }) => {
  const { data, constructorData, bunInOrder } = useAppSelector(
    (state) => state.dataReducer
  );
  const { token } = useAppSelector((state) => state.tokenReducer);
  const navigate = useNavigate();
  const location = useLocation();

  const moveElement = useCallback((dragIndex: number, hoverIndex: number) => {
    dispatch({
      type: MOVE_CONSTRUCTOR_ITEM,
      dragIndex,
      hoverIndex,
    });
  }, []);

  const dispatch = useAppDispatch();

  const [, drop] = useDrop({
    accept: 'ingredient',
    drop(itemId: string) {
      const uniqueId = uuidv4();
      dispatch(addItem(itemId, uniqueId));
    },
  });

  if (data.length < 1) {
    return <Loader />;
  } else {
    const ids = [data[0]._id, data[0]._id];
    let priceArray: [number?, number?] = [];
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

    const handleButtonClick = () => {
      if (sessionStorage.refreshToken) {
        setActive(true);
        dispatch(postOrder(ids, token));
      } else {
        navigate('/login', { replace: true });
      }
    };

    return (
      <section className={styles.constructorContainer + ' pt-25'}>
        <ul ref={drop} className={styles.ingredientsList}>
          {announce}
          <ConstructorItem data={bunInOrder[0]} place="top" />
          <div className={styles.scroll}>
            {constructorData.map((item: TIngredient, index: number) => {
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
          <CurrencyIcon type="primary" />
          <div className={styles.buttonWrapper}>
            <Button
              htmlType="button"
              type="primary"
              size="large"
              onClick={(): void => {
                handleButtonClick();
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
