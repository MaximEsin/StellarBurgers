import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ingredientReducer, orderReducer } from './Modals';

const initialState = {
  dataRequest: false,
  dataFailed: false,
  data: [],
  constructorData: [],
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
    case 'ADD_ITEM': {
      console.log(state.data.filter((element) => element._id === action.id.id));
      return {
        ...state,
        constructorData: [
          ...state.constructorData,
          state.data.filter((element) => element._id === action.id.id)[0],
        ],
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
