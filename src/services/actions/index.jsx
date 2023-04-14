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
