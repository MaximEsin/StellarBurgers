import React from 'react';
import styles from '../styles/Modal.module.css';
import PropTypes from 'prop-types';

const IngredientDetails = (props) => {
  IngredientDetails.propTypes = {
    data: PropTypes.array.isRequired,
  };
  const ingredient = props.data[0];
  return (
    <>
      <div className={styles.modalHeader + ' pt-10 pl-10'}>
        <h2 className="text text_type_main-large">Детали ингредиента</h2>
      </div>
      <div className={styles.modalContainer}>
        <img
          src={ingredient.image}
          alt="Ингредиент"
          className={styles.ingredientImage + ' mb-4'}
        />
        <p className="text text_type_main-medium mb-8">{ingredient.name}</p>
        <div className={styles.ingredientDataContainer + ' mb-15'}>
          <div className={styles.modalContainer}>
            <p className="text text_type_main-default text_color_inactive">
              Калории,ккал
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {ingredient.calories}
            </p>
          </div>
          <div className={styles.modalContainer}>
            <p className="text text_type_main-default text_color_inactive">
              Белки, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {ingredient.proteins}
            </p>
          </div>
          <div className={styles.modalContainer}>
            <p className="text text_type_main-default text_color_inactive">
              Жиры, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {ingredient.fat}
            </p>
          </div>
          <div className={styles.modalContainer}>
            <p className="text text_type_main-default text_color_inactive">
              Углеводы, г
            </p>
            <p className="text text_type_digits-default text_color_inactive">
              {ingredient.carbohydrates}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default IngredientDetails;
