import {
  STORE_INGREDIENT,
  POST_ORDER,
  POST_SUCCESS,
  POST_FAILED,
} from '../actions/constants';

import { TModalsActions } from '../actions/Modals';

type TIngredientState = {
  data: object;
  dataRequest: boolean;
  dataFailed: boolean;
};

type IOrderState = {
  number: number;
  dataRequest: boolean;
  dataFailed: boolean;
};

const orderInitialState: IOrderState = {
  number: 0,
  dataRequest: false,
  dataFailed: false,
};

const ingredientInitialState: TIngredientState = {
  data: {},
  dataRequest: false,
  dataFailed: false,
};

export const ingredientReducer = (
  state = ingredientInitialState,
  action: TModalsActions
) => {
  switch (action.type) {
    case STORE_INGREDIENT: {
      return {
        ...state,
        data: action.item,
        dataRequest: false,
      };
    }
    default: {
      return state;
    }
  }
};

export const orderReducer = (
  state = orderInitialState,
  action: TModalsActions
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
