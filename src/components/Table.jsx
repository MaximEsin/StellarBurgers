import React, { useEffect } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from '../styles/BurgerIngredients.module.css';
import PropTypes from 'prop-types';

const Table = (props) => {
  const [current, setCurrent] = React.useState('one');
  useEffect(() => {
    if (props.bun) {
      setCurrent('one');
    } else if (props.sauce) {
      setCurrent('two');
    } else if (props.main) {
      setCurrent('three');
    }
  }, [props]);

  return (
    <div className={styles.tab}>
      <Tab value="one" active={current === 'one'} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value="two" active={current === 'two'} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value="three" active={current === 'three'} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
};

Table.propTypes = {
  bun: PropTypes.bool.isRequired,
  sauce: PropTypes.bool.isRequired,
  main: PropTypes.bool.isRequired,
};

export default Table;
