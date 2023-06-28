import React from 'react';
import styles from '../../styles/Feed.module.css';
import FeedCard from './FeedCard';
import { useAppSelector } from '../../hooks';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FC } from 'react';
import Loader from '../Loader';
import { TIngredient } from '../../services/reducers';
import { TOrder } from '../../services/reducers/Feed';

interface TScrollList {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const ScrollList: FC<TScrollList> = ({ setActive }) => {
  const { orders } = useAppSelector((state) => state.connectionReducer);
  const { data } = useAppSelector((state) => state.dataReducer);
  const location = useLocation();

  const feedIds: Array<Array<string>> = [];
  const feedArr: Array<Array<TIngredient>> = [];
  let finalData: Array<TOrder> = [];

  if (orders === undefined) {
    return <Loader />;
  } else {
    orders.forEach((item: TOrder) => feedIds.push(item.ingredients));

    feedIds.forEach((item: Array<string>) =>
      feedArr.push(
        data.filter((ingredient: TIngredient) => item.includes(ingredient._id))
      )
    );

    finalData = orders;
    return (
      <div className={styles.orders}>
        {finalData.map((order: TOrder, index: number) => {
          return (
            <Link
              key={index}
              to={
                location.pathname === '/feed'
                  ? `/feed/${order._id}`
                  : `/profile/orders/${order._id}`
              }
              state={{ background: location }}
              style={{ textDecoration: 'none', color: '#F2F2F3' }}
            >
              <FeedCard
                setActive={setActive}
                createdAt={order.createdAt}
                number={order.number}
                name={order.name}
                ingredients={feedArr[index]}
                status={order.status}
              />
            </Link>
          );
        })}
      </div>
    );
  }
};

export default ScrollList;
