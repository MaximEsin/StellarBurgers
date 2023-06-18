import React from 'react';
import styles from '../../styles/Order.module.css';
import { useAppSelector } from '../../hooks';
import Loader from '../Loader';
import { useParams } from 'react-router-dom';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderItem from './OrderItem';

const OrderContent = () => {
  const { _id } = useParams();
  const { orders } = useAppSelector((state) => state.connectionReducer);
  const { data } = useAppSelector((state) => state.dataReducer);

  if (orders.length < 1) {
    return <Loader />;
  } else {
    return (
      <section className={styles.orderSection + ' mb-20'}>
        {orders
          .filter((itm: any) => itm._id === _id)
          .map((item: any, index: number) => {
            const feedIds: Array<object> = item.ingredients;
            const feedArr: Array<object> = [];
            const priceArray: Array<number> = [];

            feedIds.forEach((item: any) =>
              feedArr.push(
                data.filter((ingredient: any) => item.includes(ingredient._id))
              )
            );

            feedArr.map((i: any) => {
              priceArray.push(i[0].price);
            });

            const totalPrice = priceArray.reduce(
              (a: number, b: number) => a + b
            );

            const ingArr: Array<object> = [];
            feedArr.forEach((item: any) => {
              ingArr.push(item[0]);
            });

            function onlyUnique(
              value: any,
              index: number,
              array: Array<object>
            ) {
              return array.indexOf(value) === index;
            }
            const uniqueArr = ingArr.filter(onlyUnique);

            function filterArr(array: Array<object>, value: object) {
              return array.filter((v) => v === value).length;
            }

            uniqueArr.forEach((item: any) => {
              item.amount = filterArr(ingArr, item);
            });

            return (
              <div key={index} className={styles.orderContainer}>
                <p
                  className={
                    styles.orderNumber + ' text text_type_digits-default'
                  }
                >
                  #{item.number}
                </p>
                <p className="text text_type_main-medium mb-3">{item.name}</p>
                <p
                  className={
                    styles.orderStatus + ' text text_type_main-default mb-15'
                  }
                >
                  {item.status}
                </p>
                <p className="text text_type_main-medium mb-6">Состав:</p>
                <div className={styles.ingredientsContainer + ' mt-6'}>
                  <div className={styles.scroll}>
                    {uniqueArr.map((item: any, index: number) => {
                      return (
                        <OrderItem
                          key={index}
                          image={item.image}
                          name={item.name}
                          price={item.price}
                          amount={item.amount}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className={styles.bottomContainer}>
                  <p className="text text_type_main-default text_color_inactive">
                    {new Date(item.createdAt).toLocaleString('ru', {
                      day: '2-digit',
                      hour: '2-digit',
                      minute: '2-digit',
                      month: 'long',
                    })}
                  </p>
                  <div className={styles.priceContainer}>
                    <p className="text text_type_digits-default mr-2">
                      {totalPrice}
                    </p>
                    <CurrencyIcon type="primary" />
                  </div>
                </div>
              </div>
            );
          })}
      </section>
    );
  }
};

export default OrderContent;
