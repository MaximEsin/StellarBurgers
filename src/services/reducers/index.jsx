import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ingredientReducer, orderReducer } from './Modals';
import { v4 as uuidv4 } from 'uuid';

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
        constructorData: [
          ...state.constructorData,
          action.data[0],
          action.data[0],
        ],
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
      const newItem = state.data.filter((item) => item._id === action.id.id)[0];
      const modifyedItem = {
        ...newItem,
        uniqueId: uuidv4(),
      };
      if (modifyedItem.type === 'bun') {
        state.constructorData.splice(0, 2);
        state.constructorData.unshift(modifyedItem, modifyedItem);
        return {
          ...state,
          constructorData: [...state.constructorData],
        };
      } else {
        return {
          ...state,
          constructorData: [...state.constructorData, modifyedItem],
        };
      }
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        constructorData: [
          ...state.constructorData.filter(
            (item) => item.uniqueId !== action.id
          ),
        ],
      };
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  dataReducer,
  ingredientReducer,
  orderReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
