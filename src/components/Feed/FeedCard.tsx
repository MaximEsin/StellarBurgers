import React from 'react';
import styles from '../../styles/Feed.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const FeedCard = () => {
  return (
    <div className={styles.orderCard}>
      <div className={styles.dateContainer}>
        <p className="text text_type_main-medium">#034535</p>
        <p className="text text_type_main-default text_color_inactive">
          Сегодня, 16:20
        </p>
      </div>
      <p className="text text_type_main-medium mt-6">
        Death Star Starship Main бургер
      </p>
      <div className={styles.ingredientContainer + ' mt-6'}>
        <div>Images Here</div>
        <div className={styles.priceContainer}>
          <p className="text text_type_main-medium mr-3">480</p>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
