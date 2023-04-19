import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  ADD_ITEM,
  UPDATE_PRICE,
  REMOVE_ITEM,
  baseUrl,
} from './constants';
export function getData() {
  return function (dispatch) {
    dispatch({
      type: GET_DATA,
    });

    fetch(`${baseUrl}/ingredients`)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch({
          type: GET_DATA_SUCCESS,
          data: res.data,
        });
      })
      .then((res) => {
        if (res && !res.ok) {
          dispatch({
            type: GET_DATA_FAILED,
          });
        }
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
