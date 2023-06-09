import {
  STORE_INGREDIENT,
  POST_ORDER,
  POST_SUCCESS,
  POST_FAILED,
} from './constants';
import { request } from '../../utils';
import { AppDispatch } from '../reducers';

export interface IStoreIngredientAction {
  readonly type: typeof STORE_INGREDIENT;
  readonly item: object;
}

export interface IPostOrderAction {
  readonly type: typeof POST_ORDER;
}

export interface IPostSuccessAction {
  readonly type: typeof POST_SUCCESS;
  readonly number: number;
}

export interface IPostFailedAction {
  readonly type: typeof POST_FAILED;
}

interface Array {}

export type TModalsActions =
  | IStoreIngredientAction
  | IPostOrderAction
  | IPostSuccessAction
  | IPostFailedAction;

export function getIngredient(item: object) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: STORE_INGREDIENT,
      item: item,
    });
  };
}

export function postOrder(ids: Array) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: POST_ORDER,
    });
    request(`/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: sessionStorage.accessToken,
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
