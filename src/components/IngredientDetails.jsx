import React from 'react';
import styles from '../styles/Modal.module.css';
import PropTypes from 'prop-types';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const IngredientDetails = (props) => {
  IngredientDetails.propTypes = {
    data: PropTypes.object.isRequired,
  };
  const ingredient = props.data.data[0];
  return (
    <section className={styles.modal}>
      <div className={styles.modalHeader + ' pt-10 pl-10'}>
        <h2 className="text text_type_main-large">Детали ингредиента</h2>
        <div className={styles.cross}>
          <CloseIcon
            alt="Закрыть окно"
            onClick={() => {
              props.data.setActive(false);
            }}
          />
        </div>
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
    </section>
  );
};

export default IngredientDetails;
