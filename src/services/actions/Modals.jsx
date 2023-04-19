import { baseUrl } from './constants';

export function getIngredient(item) {
  return function (dispatch) {
    dispatch({
      type: 'STORE_INGREDIENT',
      info: item,
    });
  };
}

export function postOrder(ids) {
  return function (dispatch) {
    dispatch({
      type: 'POST_ORDER',
    });
    fetch(`${baseUrl}/orders`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ingredients: ids,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch({
          type: 'POST_SUCCESS',
          number: res.order.number,
        });
      })
      .then((res) => {
        if (res && !res.ok) {
          dispatch({
            type: 'POST_FAILED',
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: 'POST_FAILED',
        });
      });
  };
}
