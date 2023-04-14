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

export const rootReducer = combineReducers({
  dataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
