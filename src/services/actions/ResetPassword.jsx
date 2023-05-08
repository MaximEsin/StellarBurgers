import { STORE_TOKEN } from './constants';

export function storeToken(token) {
  return function (dispatch) {
    dispatch({
      type: STORE_TOKEN,
      token: token,
    });
  };
}
