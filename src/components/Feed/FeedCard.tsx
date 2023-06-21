import React, { useEffect } from 'react';
import styles from '../../styles/Feed.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import { TIngredient } from '../../services/reducers';

interface TFeedCard {
  createdAt: string;
  number: number;
  name: string;
  ingredients: TIngredient[];
  status?: string;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const FeedCard: FC<TFeedCard> = ({
  createdAt,
  number,
  name,
  ingredients,
  status,
  setActive,
}) => {
  const images: Array<string> = [];
  const prices: Array<number> = [];
  const location = useLocation();
  let statusProfile;
  let showStatus;

  ingredients.forEach((item: TIngredient) => images.push(item.image));
  ingredients.forEach((item: TIngredient) => prices.push(item.price));
  const totalPrice = prices.reduce((a: number, b: number) => a + b);

  if (status === 'done') {
    statusProfile = (
      <p className={styles.orderComplete + ' text text_type_main-small'}>
        Выполнен
      </p>
    );
  }

  if (status === 'pending') {
    statusProfile = (
      <p
        className="text text_type_main-small
    "
      >
        Готовится
      </p>
    );
  }

  if (status === 'created') {
    statusProfile = <p className="text text_type_main-small">Создан</p>;
  }

  if (location.pathname === '/profile/orders') {
    showStatus = statusProfile;
  }

  return (
    <div className={styles.orderCard} onClick={() => setActive(true)}>
      <div className={styles.dateContainer}>
        <p className="text text_type_main-medium">#{number}</p>
        <p className="text text_type_main-default text_color_inactive">
          {new Date(createdAt).toLocaleString('ru', {
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            month: 'long',
          })}
        </p>
      </div>
      <p className={styles.name + ' text text_type_main-medium mt-6'}>{name}</p>
      <span>{showStatus}</span>
      <div className={styles.ingredientContainer + ' mt-6'}>
        <div className={styles.imgContainer}>
          {images.map((img: string, index: number) => {
            return (
              <img
                key={index}
                className={styles.img}
                src={img}
                alt="ингредиент"
              />
            );
          })}
        </div>
        <div className={styles.priceContainer}>
          <p className="text text_type_main-medium mr-3">{totalPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
