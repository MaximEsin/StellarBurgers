import React from 'react';
import styles from '../styles/BurgerConstructor.module.css';
import { useDrag } from 'react-dnd';

const ConstructorItemWrapper = (props) => {
  const id = props.data;

  const [, drag] = useDrag({
    type: 'ingredient_wide',
    item: { id },
  });

  let element;
  if (props.place === 'top') {
    element = (
      <li className={styles.constructorItemTop + ' mb-4'}>{props.children}</li>
    );
  } else if (props.place === 'bottom') {
    element = (
      <li className={styles.constructorItemBottom}>{props.children}</li>
    );
  } else {
    element = (
      <li className={styles.constructorItem + ' mb-4'} ref={drag}>
        {props.children}
      </li>
    );
  }
  return element;
};

export default ConstructorItemWrapper;
