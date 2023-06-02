import React from 'react';
import styles from '../../styles/Feed.module.css';
import FeedCard from './FeedCard';
import { useAppSelector } from '../../hooks';

const ScrollList = () => {
  const { orders } = useAppSelector((state: any) => state.connectionReducer);
  const { data } = useAppSelector((state: any) => state.dataReducer);

  interface TOrder {
    createdAt: any;
    number: number;
    name: string;
  }

  const ids: any = [];
  const arr: any = [];

  orders.forEach((item: any) => ids.push(item.ingredients));

  ids.forEach((item: any) =>
    arr.push(data.filter((ingredient: any) => item.includes(ingredient._id)))
  );

  return (
    <div className={styles.orders}>
      {orders.map((order: TOrder, index: number) => {
        return (
          <div key={index}>
            {arr.map((item: any, index: any) => {
              return (
                <FeedCard
                  key={index}
                  createdAt={order.createdAt}
                  number={order.number}
                  name={order.name}
                  ingredients={item}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ScrollList;
