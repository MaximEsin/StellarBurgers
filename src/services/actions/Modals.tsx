import {
  STORE_INGREDIENT,
  POST_ORDER,
  POST_SUCCESS,
  POST_FAILED,
} from './constants';
import { request } from '../../utils';
import { AppDispatch } from '../reducers';

export function getIngredient(item: any) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: STORE_INGREDIENT,
      info: item,
    });
  };
}

export function postOrder(ids: any) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: POST_ORDER,
    });
    request(`/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.accessToken,
      },
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
      .catch(() => {
        dispatch({
          type: POST_FAILED,
        });
      });
  };
}
