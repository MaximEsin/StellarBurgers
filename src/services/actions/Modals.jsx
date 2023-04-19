import {
  STORE_INGREDIENT,
  POST_ORDER,
  POST_SUCCESS,
  POST_FAILED,
} from './constants';
import { request } from '../../utils';

export function getIngredient(item) {
  return function (dispatch) {
    dispatch({
      type: STORE_INGREDIENT,
      info: item,
    });
  };
}

export function postOrder(ids) {
  return function (dispatch) {
    dispatch({
      type: POST_ORDER,
    });
    request(`/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ingredients: ids,
      }),
    })
      .then((res) => {
        dispatch({
          type: POST_SUCCESS,
          number: res.order.number,
        });
      })
      .catch((err) => {
        dispatch({
          type: POST_FAILED,
        });
      });
  };
}
