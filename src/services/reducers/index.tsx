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
import { connectionReducer } from './Feed';
import { TIndexActions } from '../actions';

const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err);
  }
};

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (!serializedState) return undefined;
    else return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedStore = loadState();

type IDataState = {
  dataRequest: boolean;
  dataFailed: boolean;
  data: [];
  constructorData: [];
  buns: [];
  bunInOrder: [];
};

const initialState: IDataState = {
  dataRequest: false,
  dataFailed: false,
  data: [],
  constructorData: [],
  buns: [],
  bunInOrder: [],
};

export const dataReducer = (state = initialState, action: TIndexActions) => {
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
  connectionReducer,
});

const store = createStore(rootReducer, persistedStore, applyMiddleware(thunk));

store.subscribe(() => {
  saveState(store.getState());
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
