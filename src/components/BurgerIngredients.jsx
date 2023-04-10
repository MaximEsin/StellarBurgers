import React from 'react';
import Table from './Table';
import styles from '../styles/BurgerIngredients.module.css';
import BurgerIngredient from './BurgerIngredient';
import PropTypes from 'prop-types';

const BurgerIngredients = (props) => {
  BurgerIngredients.propTypes = {
    data: PropTypes.array.isRequired,
    setActive: PropTypes.func.isRequired,
    setModalType: PropTypes.func.isRequired,
  };
  return (
    <section className={styles.container + ' pt-10'}>
      <h1 className="text text_type_main-large pb-5">Соберите бургер</h1>
      <Table />
      <div className={styles.scroll}>
        <section className={styles.ingredientsSection + ' pt-10'}>
          <h2 className="text text_type_main-medium pb-6">Булки</h2>
          <ul className={styles.ingredientTable + ' pl-4 pr-4'}>
            <BurgerIngredient
              data={props.data[0]}
              counter={true}
              setActive={props.setActive}
              setModalType={props.setModalType}
            />
            <BurgerIngredient
              data={props.data[1]}
              counter={false}
              setActive={props.setActive}
              setModalType={props.setModalType}
            />
          </ul>
        </section>
        <section className={styles.ingredientsSection + ' pt-10'}>
          <h2 className="text text_type_main-medium pb-6">Соусы</h2>
          <ul className={styles.ingredientTable + ' pl-4 pr-4'}>
            <BurgerIngredient
              data={props.data[6]}
              counter={false}
              setActive={props.setActive}
              setModalType={props.setModalType}
            />
            <BurgerIngredient
              data={props.data[7]}
              counter={false}
              setActive={props.setActive}
              setModalType={props.setModalType}
            />
            <BurgerIngredient
              data={props.data[8]}
              counter={false}
              setActive={props.setActive}
              setModalType={props.setModalType}
            />
            <BurgerIngredient
              data={props.data[9]}
              counter={false}
              setActive={props.setActive}
              setModalType={props.setModalType}
            />
            <BurgerIngredient
              data={props.data[10]}
              counter={false}
              setActive={props.setActive}
              setModalType={props.setModalType}
            />
            <BurgerIngredient
              data={props.data[11]}
              counter={false}
              setActive={props.setActive}
              setModalType={props.setModalType}
            />
            <BurgerIngredient
              data={props.data[12]}
              counter={false}
              setActive={props.setActive}
              setModalType={props.setModalType}
            />
            <BurgerIngredient
              data={props.data[13]}
              counter={false}
              setActive={props.setActive}
              setModalType={props.setModalType}
            />
          </ul>
        </section>
        <section className={styles.ingredientsSection + ' pt-10'}>
          <h2 className="text text_type_main-medium pb-6">Начинки</h2>
          <ul className={styles.ingredientTable + ' pl-4 pr-4'}>
            <BurgerIngredient
              data={props.data[2]}
              counter={true}
              setActive={props.setActive}
              setModalType={props.setModalType}
            />
            <BurgerIngredient
              data={props.data[3]}
              counter={false}
              setActive={props.setActive}
              setModalType={props.setModalType}
            />
            <BurgerIngredient
              data={props.data[4]}
              counter={true}
              setActive={props.setActive}
              setModalType={props.setModalType}
            />
            <BurgerIngredient
              data={props.data[5]}
              counter={false}
              setActive={props.setActive}
              setModalType={props.setModalType}
            />
          </ul>
        </section>
      </div>
    </section>
  );
};

export default BurgerIngredients;
