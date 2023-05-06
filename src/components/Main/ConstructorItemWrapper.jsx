import React from 'react';
import styles from '../../styles/BurgerConstructor.module.css';
import PropTypes from 'prop-types';

const ConstructorItemWrapper = (props) => {
  const id = props.data;

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

ConstructorItemWrapper.propTypes = {
  data: PropTypes.string,
  place: PropTypes.string,
};

export default ConstructorItemWrapper;
