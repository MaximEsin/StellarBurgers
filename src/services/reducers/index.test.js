import { dataReducer } from '.';
import * as types from '../actions/constants';

describe('data reducer', () => {
  it('should return the initial state', () => {
    expect(dataReducer(undefined, {})).toEqual({
      dataRequest: false,
      dataFailed: false,
      data: [],
      constructorData: [],
      buns: [],
      bunInOrder: [],
    });
  });
});

it('should handle GET_DATA', () => {
  expect(
    dataReducer([], {
      type: types.GET_DATA,
      dataRequest: true,
      dataFailed: false,
    })
  ).toEqual({
    dataRequest: true,
    dataFailed: false,
  });
});

it('should handle GET_DATA_SUCCESS', () => {
  expect(
    dataReducer([], {
      type: types.GET_DATA_SUCCESS,
      data: 'Some data',
      dataRequest: false,
      constructorData: [],
      buns: [],
    })
  ).toEqual({
    data: 'Some data',
    dataRequest: false,
    constructorData: [],
    buns: [],
  });
});

it('should handle GET_DATA_FAILED', () => {
  expect(
    dataReducer([], {
      type: types.GET_DATA_FAILED,
      dataFailed: true,
      dataRequest: false,
    })
  ).toEqual({
    dataFailed: true,
    dataRequest: false,
  });
});
