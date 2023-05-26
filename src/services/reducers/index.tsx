import { combineReducers } from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ingredientReducer, orderReducer } from './Modals';
import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  ADD_ITEM,
  REMOVE_ITEM,
  MOVE_CONSTRUCTOR_ITEM,
} from '../actions/constants';
import update from 'immutability-helper';

const initialState = {
  dataRequest: false,
  dataFailed: false,
  data: [],
  constructorData: [],
  buns: [],
  bunInOrder: [],
};

export const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_DATA: {
      return {
        ...state,
        dataRequest: true,
        dataFailed: false,
      };
    }
    case GET_DATA_SUCCESS: {
      const buns = action.data.filter((item: any) => item.type === 'bun');
      return {
        ...state,
        data: action.data,
        dataRequest: false,
        constructorData: [...state.constructorData],
        buns: buns,
      };
    }
    case GET_DATA_FAILED: {
      return {
        ...state,
        dataFailed: true,
        dataRequest: false,
      };
    }
    case ADD_ITEM: {
      const bun = state.buns.filter(
        (item: any) => item._id === action.id.id
      )[0];

      if (bun) {
        return {
          ...state,
          bunInOrder: [bun],
        };
      }
      const newItem: any = state.data.filter(
        (item: any) => item._id === action.id.id
      )[0];
      const modifyedItem = {
        ...newItem,
        uniqueId: action.uniqueId,
      };
      return {
        ...state,
        constructorData: [...state.constructorData, modifyedItem],
      };
    }

    case REMOVE_ITEM: {
      return {
        ...state,
        constructorData: [
          ...state.constructorData.filter(
            (item: any) => item.uniqueId !== action.id
          ),
        ],
      };
    }
    case MOVE_CONSTRUCTOR_ITEM: {
      return {
        ...state,
        constructorData: [
          ...update(state.constructorData, {
            $splice: [
              [action.dragIndex, 1],
              [action.hoverIndex, 0, state.constructorData[action.dragIndex]],
            ],
          }),
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

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
