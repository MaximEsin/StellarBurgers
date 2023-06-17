import { ingredientReducer, orderReducer } from './Modals';
import * as types from '../actions/constants';
import { orderInitialState, ingredientInitialState } from './Modals';

const storeIngredientTestData = { data: undefined, dataRequest: false };
const postOrderTestData = { dataRequest: true, dataFailed: false };
const postSuccessTestData = { number: 123, dataRequest: false };
const postFailedTestData = { dataFailed: true, dataRequest: false };

describe('ingredient reducer', () => {
  it('should return the initial state', () => {
    expect(ingredientReducer(undefined, {})).toEqual({
      ...ingredientInitialState,
    });
  });
});

describe('order reducer', () => {
  it('should return the initial state', () => {
    expect(orderReducer(undefined, {})).toEqual({
      ...orderInitialState,
    });
  });
});

it('should handle STORE_INGREDIENT', () => {
  expect(
    ingredientReducer([], {
      type: types.STORE_INGREDIENT,
      ...storeIngredientTestData,
    })
  ).toEqual({
    ...storeIngredientTestData,
  });
});

it('should handle POST_ORDER', () => {
  expect(
    orderReducer([], {
      type: types.POST_ORDER,
      ...postOrderTestData,
    })
  ).toEqual({
    ...postOrderTestData,
  });
});

it('should handle POST_SUCCESS', () => {
  expect(
    orderReducer([], {
      type: types.POST_SUCCESS,
      ...postSuccessTestData,
    })
  ).toEqual({
    ...postSuccessTestData,
  });
});

it('should handle POST_FAILED', () => {
  expect(
    orderReducer([], {
      type: types.POST_FAILED,
      ...postFailedTestData,
    })
  ).toEqual({
    ...postFailedTestData,
  });
});
