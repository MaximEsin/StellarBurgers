import { WS_CONNECTION_START, WS_GET_MESSAGE } from './constants';
import { AppDispatch } from '../reducers';

export function startConnection(info: any) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: WS_CONNECTION_START,
      connection: info,
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
