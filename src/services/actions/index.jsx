export function getData() {
  return function (dispatch) {
    dispatch({
      type: 'GET_DATA',
    });

    fetch('https://norma.nomoreparties.space/api/ingredients')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        dispatch({
          type: 'GET_DATA_SUCCESS',
          data: res.data,
        });
      })
      .then((res) => {
        if (res && !res.ok) {
          dispatch({
            type: 'GET_DATA_FAILED',
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: 'GET_DATA_FAILED',
        });
      });
  };
}

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
    fetch('https://norma.nomoreparties.space/api/orders', {
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
