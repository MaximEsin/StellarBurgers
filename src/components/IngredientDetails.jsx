import React from 'react';
import cross from '../images/icon.png';
import styles from '../styles/Modal.module.css';

const IngredientDetails = (props) => {
  const Ingredient = props.data.modalType.data[0];
  return (
    <section className={styles.modal}>
      <div className={styles.modalHeader + ' pt-10 pl-10'}>
        <h2 className="text text_type_main-large">Детали ингредиента</h2>
        <img src={cross} alt="Закрыть окно" className={styles.cross} />
      </div>
      <div className={styles.modalContainer}>
        <img
          src={Ingredient.image}
          alt="Ингредиент"
          className={styles.ingredientImage + ' mb-4'}
        />
        <p className="text text_type_main-medium mb-8">{Ingredient.name}</p>
        <div className={styles.ingredientDataContainer + ' mb-15'}>
          <div className={styles.modalContainer}>
            <p className="text text_type_main-default text_color_inactive">
              Калории,ккал
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {Ingredient.calories}
            </p>
          </div>
          <div className={styles.modalContainer}>
            <p className="text text_type_main-default text_color_inactive">
              Белки, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {Ingredient.proteins}
            </p>
          </div>
          <div className={styles.modalContainer}>
            <p className="text text_type_main-default text_color_inactive">
              Жиры, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {Ingredient.fat}
            </p>
          </div>
          <div className={styles.modalContainer}>
            <p className="text text_type_main-default text_color_inactive">
              Углеводы, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {Ingredient.carbohydrates}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientDetails;
