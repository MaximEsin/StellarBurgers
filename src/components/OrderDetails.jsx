import React from 'react';
import done from '../images/done.png';
import styles from '../styles/Modal.module.css';

const OrderDetails = () => {
  return (
    <>
      <div className={styles.modalContainer + ' mt-25'}>
        <p className={styles.orderNumber + ' text text_type_digits-large'}>
          034536
        </p>
        <p
          className={
            styles.orderText + ' text text_type_main-medium mt-8 mb-15'
          }
        >
          идентификатор заказа
        </p>
        <img
          src={done}
          alt="Подтверждение"
          className={styles.orderApproval + ' mb-15'}
        />
        <p className={styles.orderText + ' text text_type_main-default mb-2'}>
          Ваш заказ начали готовить
        </p>
        <p
          className={
            styles.orderTextDark + ' text text_type_main-default mb-25'
          }
        >
          Дождитесь готовности на орбитальной станции
        </p>
      </div>
    </>
  );
};

export default OrderDetails;
