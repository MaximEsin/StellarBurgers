import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialState = {
  dataRequest: false,
  dataFailed: false,
  data: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA': {
      return {
        ...state,
        dataRequest: true,
        dataFailed: false,
      };
    }
    case 'GET_DATA_SUCCESS': {
      return {
        ...state,
        data: action.data,
        dataRequest: false,
      };
    }
    case 'GET_DATA_FAILED': {
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

export const ingredientReducer = (
  state = { data: {}, dataRequest: false, dataFailed: false },
  action
) => {
  switch (action.type) {
    case 'STORE_INGREDIENT': {
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
    case 'POST_ORDER': {
      return {
        ...state,
        dataRequest: true,
        dataFailed: false,
      };
    }
    case 'POST_SUCCESS': {
      return {
        ...state,
        number: action.number,
        dataRequest: false,
      };
    }
    case 'POST_FAILED': {
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

export const rootReducer = combineReducers({
  dataReducer,
  ingredientReducer,
  orderReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
