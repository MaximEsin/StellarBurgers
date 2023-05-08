import { STORE_TOKEN } from '../actions/constants';

export const tokenReducer = (state = { token: '' }, action) => {
  switch (action.type) {
    case STORE_TOKEN: {
      return {
        token: action.token,
      };
    }
    default: {
      return state;
    }
  }
};
