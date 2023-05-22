import React from 'react';
import Table from './Table';
import styles from '../../styles/BurgerIngredients.module.css';
import BurgerIngredient from './BurgerIngredient';
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import { FC } from 'react';

interface IBurgerIngredients {
  setActive: any;
}

const BurgerIngredients: FC<IBurgerIngredients> = ({ setActive }) => {
  const { data } = useSelector((state: any) => state.dataReducer);

  const [bunRef, inBunView] = useInView({
    threshold: 0,
  });

  const [sauceRef, inSauceView] = useInView({
    threshold: 0,
  });

  const [mainRef, inMainView] = useInView({
    threshold: 0,
  });

  return (
    <section className={styles.container + ' pt-10'}>
      <h1 className="text text_type_main-large pb-5">Соберите бургер</h1>
      <Table bun={inBunView} sauce={inSauceView} main={inMainView} />
      <div className={styles.scroll}>
        <section className={styles.ingredientsSection + ' pt-10'} ref={bunRef}>
          <h2 className="text text_type_main-medium pb-6">Булки</h2>
          <ul className={styles.ingredientTable + ' pl-4 pr-4'}>
            {data.map((item: any) => {
              if (item.type === 'bun') {
                return (
                  <BurgerIngredient
                    key={item._id}
                    data={item}
                    setActive={setActive}
                  />
                );
              }
            })}
          </ul>
        </section>
        <section
          className={styles.ingredientsSection + ' pt-10'}
          ref={sauceRef}
        >
          <h2 className="text text_type_main-medium pb-6">Соусы</h2>
          <ul className={styles.ingredientTable + ' pl-4 pr-4'}>
            {data.map((item: any) => {
              if (item.type === 'sauce') {
                return (
                  <BurgerIngredient
                    key={item._id}
                    data={item}
                    setActive={setActive}
                  />
                );
              }
            })}
          </ul>
        </section>
        <section className={styles.ingredientsSection + ' pt-10'} ref={mainRef}>
          <h2 className="text text_type_main-medium pb-6">Начинки</h2>
          <ul className={styles.ingredientTable + ' pl-4 pr-4'}>
            {data.map((item: any) => {
              if (item.type === 'main') {
                return (
                  <BurgerIngredient
                    key={item._id}
                    data={item}
                    setActive={setActive}
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
