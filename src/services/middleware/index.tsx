import {
  WS_CONNECTION_START,
  WS_GET_MESSAGE,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
} from '../actions/constants';
import type { Middleware, MiddlewareAPI } from 'redux';
import type { AppDispatch, RootState } from '../reducers';

interface IWsConnectionStartAction {
  readonly type: typeof WS_CONNECTION_START;
  readonly payload: string;
}

interface IWsGetMessageAction {
  readonly type: typeof WS_GET_MESSAGE;
  readonly payload: any;
}

interface IWsConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
  readonly payload: string;
}

interface IWsConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  readonly payload: string;
}

interface IWsConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
  readonly payload: string;
}

type AppActions =
  | IWsConnectionStartAction
  | IWsGetMessageAction
  | IWsConnectionClosedAction
  | IWsConnectionErrorAction
  | IWsConnectionSuccessAction;

export const socketMiddleware = (wsUrl: string): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return (next) => (action: AppActions) => {
      const { dispatch, getState } = store;
      const { type, payload } = action;

      if (type === WS_CONNECTION_START) {
        socket = new WebSocket(`${wsUrl}${payload}`);
      }
      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: WS_CONNECTION_SUCCESS, payload: event });
        };
        socket.onerror = (event) => {
          dispatch({ type: WS_CONNECTION_ERROR, payload: event });
        };
        socket.onmessage = (event) => {
          const data = JSON.parse(event.data);
          dispatch({
            type: WS_GET_MESSAGE,
            orders: data.orders,
            total: data.total,
            totalToday: data.totalToday,
          });
        };
        socket.onclose = (event) => {
          dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
        };
      }

      next(action);
    };
  }) as Middleware;
};
