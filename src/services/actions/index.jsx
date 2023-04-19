import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  ADD_ITEM,
  UPDATE_PRICE,
  REMOVE_ITEM,
  baseUrl,
} from './constants';
import { request } from '../../utils';

export function getData() {
  return function (dispatch) {
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

export function AddItem(itemId) {
  return function (dispatch) {
    dispatch({
      type: ADD_ITEM,
      id: itemId,
    });
  };
}

export function UpdatePrice(price) {
  return function (dispatch) {
    dispatch({
      type: UPDATE_PRICE,
      price: price,
    });
  };
}

export function RemoveItem(uniqueId) {
  return function (dispatch) {
    dispatch({
      type: REMOVE_ITEM,
      id: uniqueId,
    });
  };
}
