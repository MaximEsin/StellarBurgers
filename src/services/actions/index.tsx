import {
  GET_DATA,
  GET_DATA_SUCCESS,
  GET_DATA_FAILED,
  ADD_ITEM,
  UPDATE_PRICE,
  REMOVE_ITEM,
  MOVE_CONSTRUCTOR_ITEM,
} from './constants';
import { request } from '../../utils';
import { AppDispatch } from '../reducers';

export interface IGetDataAction {
  readonly type: typeof GET_DATA;
}

export interface IGetDataSuccessAction {
  readonly type: typeof GET_DATA_SUCCESS;
  readonly data: [];
}

export interface IGetDataFailedAction {
  readonly type: typeof GET_DATA_FAILED;
}

export interface IAddItemAction {
  readonly type: typeof ADD_ITEM;
  readonly id: any;
  readonly uniqueId: string;
}

export interface IUpdatePriceAction {
  readonly type: typeof UPDATE_PRICE;
  readonly price: string;
}

export interface IRemoveItemAction {
  readonly type: typeof REMOVE_ITEM;
  readonly id?: any;
}

export interface IMoveConstructorItemAction {
  readonly type: typeof MOVE_CONSTRUCTOR_ITEM;
  readonly dragIndex: number;
  readonly hoverIndex: number;
}

export type TIndexActions =
  | IGetDataAction
  | IGetDataSuccessAction
  | IGetDataFailedAction
  | IAddItemAction
  | IUpdatePriceAction
  | IRemoveItemAction
  | IMoveConstructorItemAction;

export function getData() {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: GET_DATA,
    });

    request(`/ingredients`)
      .then((res) => {
        dispatch({
          type: GET_DATA_SUCCESS,
          data: res.data,
        });
      })
      .catch(() => {
        dispatch({
          type: GET_DATA_FAILED,
        });
      });
  };
}

export function addItem(itemId: string, uniqueId: string) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: ADD_ITEM,
      id: itemId,
      uniqueId: uniqueId,
    });
  };
}

export function UpdatePrice(price: string) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: UPDATE_PRICE,
      price: price,
    });
  };
}

export function RemoveItem(uniqueId: string) {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: REMOVE_ITEM,
      id: uniqueId,
    });
  };
}
