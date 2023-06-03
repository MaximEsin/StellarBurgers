import {
  WS_CONNECTION_START,
  WS_GET_MESSAGE,
  WS_CONNECTION_ORDERS_START,
  WS_GET_ORDERS_MESSAGE,
} from '../actions/constants';

export const connectionReducer = (
  state = {
    connection: '',
    orders: [],
    total: 0,
    totalToday: 0,
    ordersConnection: '',
    ordersProfile: [],
  },
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
    case WS_CONNECTION_ORDERS_START: {
      return {
        ...state,
        ordersConnection: action.info,
      };
    }
    case WS_GET_ORDERS_MESSAGE: {
      return {
        ...state,
        ordersProfile: action.orders,
      };
    }
    default: {
      return state;
    }
  }
};
