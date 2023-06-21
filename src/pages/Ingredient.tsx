import React from 'react';
import Loader from '../components/Loader';
import styles from '../styles/Modal.module.css';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import { TIngredient } from '../services/reducers';

const Ingredient = () => {
  const { _id } = useParams();
  const { data } = useAppSelector((state) => state.dataReducer);

  if (data.length < 1) {
    return <Loader />;
  } else {
    return (
      <>
        {data
          .filter((item: TIngredient) => item._id === _id)
          .map((item: TIngredient, index: number) => {
            return (
              <section key={index}>
                <div className={styles.ingredientDetails + ' pt-10 pl-10'}>
                  <h2 className="text text_type_main-large">
                    Детали ингредиента
                  </h2>
                </div>
                <div className={styles.modalContainer}>
                  <img
                    src={item.image}
                    alt="Ингредиент"
                    className={styles.ingredientImage + ' mb-4'}
                  />
                  <p className="text text_type_main-medium mb-8">{item.name}</p>
                  <div className={styles.ingredientDataContainer + ' mb-15'}>
                    <div className={styles.modalContainer}>
                      <p className="text text_type_main-default text_color_inactive">
                        Калории,ккал
                      </p>
                      <p className="text text_type_digits-default text_color_inactive">
                        {item.calories}
                      </p>
                    </div>
                    <div className={styles.modalContainer}>
                      <p className="text text_type_main-default text_color_inactive">
                        Белки, г
                      </p>
                      <p className="text text_type_digits-default text_color_inactive">
                        {item.proteins}
                      </p>
                    </div>
                    <div className={styles.modalContainer}>
                      <p className="text text_type_main-default text_color_inactive">
                        Жиры, г
                      </p>
                      <p className="text text_type_digits-default text_color_inactive">
                        {item.fat}
                      </p>
                    </div>
                    <div className={styles.modalContainer}>
                      <p className="text text_type_main-default text_color_inactive">
                        Углеводы, г
                      </p>
                      <p className="text text_type_digits-default text_color_inactive">
                        {item.carbohydrates}
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
      </>
    );
  }
};

export default Ingredient;
