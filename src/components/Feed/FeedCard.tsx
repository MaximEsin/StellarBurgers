import React from 'react';
import styles from '../../styles/Feed.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC } from 'react';

interface TFeedCard {
  createdAt: string;
  number: number;
  name: string;
  ingredients: any;
}

const FeedCard: FC<TFeedCard> = ({ createdAt, number, name, ingredients }) => {
  const images: any = [];
  const prices: any = [];

  ingredients.forEach((item: any) => images.push(item.image));
  ingredients.forEach((item: any) => prices.push(item.price));
  const totalPrice = prices.reduce((a: any, b: any) => a + b);

  return (
    <div className={styles.orderCard}>
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
