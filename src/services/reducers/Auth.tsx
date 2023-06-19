import { STORE_TOKEN, REMOVE_TOKEN } from '../actions/constants';

export const tokenReducer = (
  state = { token: '', isLoggedIn: false },
  action: any
) => {
  switch (action.type) {
    case STORE_TOKEN: {
      setTimeout(() => {
        state.isLoggedIn = false;
      }, 1200000);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('accessToken', action.token);
      return {
        ...state,
        token: action.token,
        isLoggedIn: true,
      };
    }
    case REMOVE_TOKEN: {
      return {
        ...state,
        token: '',
        isLoggedIn: false,
      };
    }
    default: {
      return state;
    }
  }
};
