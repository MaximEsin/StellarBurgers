import { WS_GET_MESSAGE, WS_GET_ORDERS_MESSAGE } from '../actions/constants';
import { TFeedActions } from '../actions/Feed';

type ConnectionState = {
  orders: Array<object>;
  total: number;
  totalToday: number;
  ordersProfile: Array<object>;
};

export const initialConnectionState: ConnectionState = {
  orders: [],
  total: 0,
  totalToday: 0,
  ordersProfile: [],
};

export const connectionReducer = (
  state = initialConnectionState,
  action: TFeedActions
) => {
  switch (action.type) {
    case WS_GET_MESSAGE: {
      return {
        ...state,
        orders: action.orders,
        total: action.total,
        totalToday: action.totalToday,
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
