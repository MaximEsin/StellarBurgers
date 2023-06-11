import React from 'react';
import styles from '../styles/Order.module.css';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import OrderItem from '../components/order/OrderItem';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import Loader from '../components/Loader';
import { useLocation } from 'react-router-dom';

const Order = () => {
  const { _id } = useParams();
  const { ordersProfile, orders } = useAppSelector(
    (state) => state.connectionReducer
  );
  const { data } = useAppSelector((state: any) => state.dataReducer);
  const location = useLocation();

  let finalOrderArray = [];

  if (location.pathname === `/feed/${_id}`) {
    finalOrderArray = orders;
  }

  if (location.pathname === `/profile/orders/${_id}`) {
    finalOrderArray = ordersProfile;
  }

  if (finalOrderArray.length < 1) {
    return <Loader />;
  } else {
    return (
      <section className={styles.orderSection + ' mb-20'}>
        {finalOrderArray
          .filter((itm: any) => itm._id === _id)
          .map((item: any, index: number) => {
            const feedIds: any = item.ingredients;
            const feedArr: any = [];
            const priceArray: any = [];

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
                    {feedArr.map((array: any, index: number) => {
                      return (
                        <OrderItem
                          key={index}
                          image={array[0].image}
                          name={array[0].name}
                          price={array[0].price}
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

export default Order;
