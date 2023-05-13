import React from 'react';
import Loader from '../components/Loader';
import styles from '../styles/Modal.module.css';
import { useParams } from 'react-router-dom';

const Ingredient = (props) => {
  let { _id } = useParams();

  if (props.data.length < 1) {
    return <Loader />;
  } else {
    return (
      <>
        {props.data
          .filter((item) => item._id === _id)
          .map((item, index) => {
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
