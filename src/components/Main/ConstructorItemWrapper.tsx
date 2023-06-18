import React, { ReactNode } from 'react';
import styles from '../../styles/BurgerConstructor.module.css';
import { FC } from 'react';

interface IConstructorWrapper {
  data: string | undefined;
  place: string | undefined;
  children?: ReactNode;
}

const ConstructorItemWrapper: FC<IConstructorWrapper> = ({
  data,
  place,
  children,
}) => {
  const id = data;

  let element;
  if (place === 'top') {
    element = (
      <li className={styles.constructorItemTop + ' mb-4'}>{children}</li>
    );
  } else if (place === 'bottom') {
    element = <li className={styles.constructorItemBottom}>{children}</li>;
  } else {
    element = <li className={styles.constructorItem + ' mb-4'}>{children}</li>;
  }
  return element;
};

export default ConstructorItemWrapper;
