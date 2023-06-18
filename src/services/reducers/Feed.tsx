import {
  WS_GET_MESSAGE,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
} from '../actions/constants';
import { TFeedActions } from '../actions/Feed';

type ConnectionState = {
  orders: Array<object>;
  total: number;
  totalToday: number;
  wsConnected: boolean;
  error?: string;
};

export const initialConnectionState: ConnectionState = {
  orders: [],
  total: 0,
  totalToday: 0,
  wsConnected: false,
};

export const connectionReducer = (
  state = initialConnectionState,
  action: TFeedActions
) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true,
      };
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false,
      };
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false,
      };
    case WS_GET_MESSAGE:
      return {
        ...state,
        error: undefined,
        orders: action.orders,
        total: action.total,
        totalToday: action.totalToday,
      };
    default: {
      return state;
    }
  }
};
