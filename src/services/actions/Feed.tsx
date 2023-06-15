import {
  WS_CONNECTION_START,
  WS_GET_MESSAGE,
  WS_CONNECTION_ORDERS_START,
  WS_GET_ORDERS_MESSAGE,
} from './constants';
import { AppDispatch } from '../reducers';

export interface IStartConnection {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IStartOrdersConnection {
  readonly type: typeof WS_CONNECTION_ORDERS_START;
}

export interface IGetMessage {
  readonly type: typeof WS_GET_MESSAGE;
  readonly orders: Array<object>;
  readonly total: number;
  readonly totalToday: number;
}

export interface IGetOrderMessage {
  readonly type: typeof WS_GET_ORDERS_MESSAGE;
  readonly orders: Array<object>;
}

export type TFeedActions =
  | IGetMessage
  | IGetOrderMessage
  | IStartConnection
  | IStartOrdersConnection;

export function startConnection(info: any) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: WS_CONNECTION_START,
    });
  };
}

export function startOrdersConnection(info: any) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: WS_CONNECTION_ORDERS_START,
    });
  };
}

export function onMessage(orders: any, total: number, totalToday: number) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: WS_GET_MESSAGE,
      orders: orders,
      total: total,
      totalToday: totalToday,
    });
  };
}

export function onOrdersMessage(orders: any) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: WS_GET_ORDERS_MESSAGE,
      orders: orders,
    });
  };
}
