import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  ADD_ITEM,
  UPDATE_PRICE,
  REMOVE_ITEM,
} from './constants';
import { request } from '../../utils';

export function getData() {
  return function (dispatch: any) {
    dispatch({
      type: GET_DATA,
    });

    request(`/ingredients`)
      .then((res) => {
        dispatch({
          type: GET_DATA_SUCCESS,
          data: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_DATA_FAILED,
        });
      });
  };
}

export function addItem(itemId: string, uniqueId: string) {
  return function (dispatch: any) {
    dispatch({
      type: ADD_ITEM,
      id: itemId,
      uniqueId: uniqueId,
    });
  };
}

export function UpdatePrice(price: string) {
  return function (dispatch: any) {
    dispatch({
      type: UPDATE_PRICE,
      price: price,
    });
  };
}

export function RemoveItem(uniqueId: string) {
  return function (dispatch: any) {
    dispatch({
      type: REMOVE_ITEM,
      id: uniqueId,
    });
  };
}