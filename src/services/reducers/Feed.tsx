import { WS_CONNECTION_START, WS_GET_MESSAGE } from '../actions/constants';
import store from '.';

export const connectionReducer = (
  state = { connection: '', orders: [], total: 0, totalToday: 0 },
  action: any
) => {
  switch (action.type) {
    case WS_CONNECTION_START: {
      return {
        ...state,
        connection: action.info,
      };
    }
    case WS_GET_MESSAGE: {
      return {
        ...state,
        orders: action.orders,
        total: action.total,
        totalToday: action.totalToday,
      };
    }
    default: {
      return state;
    }
  }
};
