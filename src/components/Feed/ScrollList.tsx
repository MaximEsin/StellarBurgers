import React from 'react';
import styles from '../../styles/Feed.module.css';
import FeedCard from './FeedCard';
import { useAppSelector } from '../../hooks';
import { useLocation } from 'react-router-dom';
import Loader from '../Loader';

const ScrollList = () => {
  const { orders } = useAppSelector((state: any) => state.connectionReducer);
  const { data } = useAppSelector((state: any) => state.dataReducer);
  const { ordersProfile } = useAppSelector(
    (state: any) => state.connectionReducer
  );
  const location = useLocation();

  interface TOrder {
    createdAt: any;
    number: number;
    name: string;
    status?: string;
  }
  const feedIds: any = [];
  const feedArr: any = [];
  const profileIds: any = [];
  const profileArr: any = [];
  let finalData: any = [];
  let finalArr: any = [];

  orders.forEach((item: any) => feedIds.push(item.ingredients));
  ordersProfile.forEach((item: any) => profileIds.push(item.ingredients));

  feedIds.forEach((item: any) =>
    feedArr.push(
      data.filter((ingredient: any) => item.includes(ingredient._id))
    )
  );

  profileIds.forEach((item: any) =>
    profileArr.push(
      data.filter((ingredient: any) => item.includes(ingredient._id))
    )
  );

  if (location.pathname === '/feed') {
    finalData = orders;
    finalArr = feedArr;
  } else if (location.pathname === '/profile/orders') {
    finalData = ordersProfile;
    finalArr = profileArr;
  }

  return (
    <div className={styles.orders}>
      {finalData.map((order: TOrder, index: number) => {
        return (
          <div key={index}>
            {finalArr.map((item: any, index: any) => {
              return (
                <FeedCard
                  key={index}
                  createdAt={order.createdAt}
                  number={order.number}
                  name={order.name}
                  ingredients={item}
                  status={order.status}
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
