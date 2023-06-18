import React, { useEffect } from 'react';
import OrderContent from '../components/order/OrderContent';
import { FC } from 'react';

interface IOrderModal {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const OrderModal: FC<IOrderModal> = ({ setActive }) => {
  useEffect(() => {
    setActive(true);
  }, []);
  return <OrderContent />;
};

export default OrderModal;
