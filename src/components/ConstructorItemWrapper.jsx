import React from 'react';
import styles from '../styles/BurgerConstructor.module.css';

const ConstructorItemWrapper = (props) => {
  console.log(props.place);
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
      <li className={styles.constructorItem + ' mb-4'}>{props.children}</li>
    );
  }
  return element;
};

export default ConstructorItemWrapper;
