import {
  STORE_INGREDIENT,
  POST_ORDER,
  POST_SUCCESS,
  POST_FAILED,
} from '../actions/constants';

export const ingredientReducer = (
  state = { data: {}, dataRequest: false, dataFailed: false },
  action
) => {
  switch (action.type) {
    case STORE_INGREDIENT: {
      return {
        ...state,
        data: action.info,
        dataRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};

export const orderReducer = (
  state = { number: 0, dataRequest: false, dataFailed: false },
  action
) => {
  switch (action.type) {
    case POST_ORDER: {
      return {
        ...state,
        dataRequest: true,
        dataFailed: false,
      };
    }
    case POST_SUCCESS: {
      return {
        ...state,
        number: action.number,
        dataRequest: false,
      };
    }
    case POST_FAILED: {
      return {
        ...state,
        dataFailed: true,
        dataRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};
