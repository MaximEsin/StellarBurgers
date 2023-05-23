import React from 'react';
import { FC } from 'react';

interface ITotalPrice {
  price: any;
}

const TotalPrice: FC<ITotalPrice> = ({ price }): any => {
  if (price) {
    const totalPrice = price.reduce((a: number, b: number) => a + b, 0);
    return <>{totalPrice}</>;
  }
};

export default TotalPrice;
