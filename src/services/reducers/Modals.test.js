import { ingredientReducer, orderReducer } from './Modals';
import * as types from '../actions/constants';

describe('ingredient reducer', () => {
  it('should return the initial state', () => {
    expect(ingredientReducer(undefined, {})).toEqual({
      data: {},
      dataRequest: false,
      dataFailed: false,
    });
  });
});

describe('order reducer', () => {
  it('should return the initial state', () => {
    expect(orderReducer(undefined, {})).toEqual({
      number: 0,
      dataRequest: false,
      dataFailed: false,
    });
  });
});

it('should handle STORE_INGREDIENT', () => {
  expect(
    ingredientReducer([], {
      type: types.STORE_INGREDIENT,
      data: undefined,
      dataRequest: false,
    })
  ).toEqual({
    data: undefined,
    dataRequest: false,
  });
});

it('should handle POST_ORDER', () => {
  expect(
    orderReducer([], {
      type: types.POST_ORDER,
      dataRequest: true,
      dataFailed: false,
    })
  ).toEqual({
    dataRequest: true,
    dataFailed: false,
  });
});

it('should handle POST_SUCCESS', () => {
  expect(
    orderReducer([], {
      type: types.POST_SUCCESS,
      number: 123,
      dataRequest: false,
    })
  ).toEqual({
    number: 123,
    dataRequest: false,
  });
});

it('should handle POST_FAILED', () => {
  expect(
    orderReducer([], {
      type: types.POST_FAILED,
      dataFailed: true,
      dataRequest: false,
    })
  ).toEqual({
    dataFailed: true,
    dataRequest: false,
  });
});
