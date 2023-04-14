import React from 'react';
import Table from './Table';
import styles from '../styles/BurgerIngredients.module.css';
import BurgerIngredient from './BurgerIngredient';
import PropTypes from 'prop-types';

const BurgerIngredients = (props) => {
  BurgerIngredients.propTypes = {
    data: PropTypes.array.isRequired,
    setActive: PropTypes.func.isRequired,
  };
  return (
    <section className={styles.container + ' pt-10'}>
      <h1 className="text text_type_main-large pb-5">Соберите бургер</h1>
      <Table />
      <div className={styles.scroll}>
        <section className={styles.ingredientsSection + ' pt-10'}>
          <h2 className="text text_type_main-medium pb-6">Булки</h2>
          <ul className={styles.ingredientTable + ' pl-4 pr-4'}>
            {props.data.map((item) => {
              if (item.type === 'bun') {
                return (
                  <BurgerIngredient
                    key={item._id}
                    data={item}
                    counter={true}
                    setActive={props.setActive}
                  />
                );
              }
            })}
          </ul>
        </section>
        <section className={styles.ingredientsSection + ' pt-10'}>
          <h2 className="text text_type_main-medium pb-6">Соусы</h2>
          <ul className={styles.ingredientTable + ' pl-4 pr-4'}>
            {props.data.map((item) => {
              if (item.type === 'sauce') {
                return (
                  <BurgerIngredient
                    key={item._id}
                    data={item}
                    counter={true}
                    setActive={props.setActive}
                  />
                );
              }
            })}
          </ul>
        </section>
        <section className={styles.ingredientsSection + ' pt-10'}>
          <h2 className="text text_type_main-medium pb-6">Начинки</h2>
          <ul className={styles.ingredientTable + ' pl-4 pr-4'}>
            {props.data.map((item) => {
              if (item.type === 'main') {
                return (
                  <BurgerIngredient
                    key={item._id}
                    data={item}
                    counter={true}
                    setActive={props.setActive}
                  />
                );
              }
            })}
          </ul>
        </section>
      </div>
    </section>
  );
};

export default BurgerIngredients;
