import { dataReducer } from '.';
import * as types from '../actions/constants';
import { initialState } from '.';

const getDataTestData = { dataRequest: true, dataFailed: false };
const getDataSuccessTestData = {
  data: 'Some data',
  dataRequest: false,
  constructorData: [],
  buns: [],
};
const getDataFailedTestData = { dataFailed: true, dataRequest: false };

describe('data reducer', () => {
  it('should return the initial state', () => {
    expect(dataReducer(undefined, {})).toEqual({
      ...initialState,
    });
  });
});

it('should handle GET_DATA', () => {
  expect(
    dataReducer([], {
      type: types.GET_DATA,
      ...getDataTestData,
    })
  ).toEqual({
    ...getDataTestData,
  });
});

it('should handle GET_DATA_SUCCESS', () => {
  expect(
    dataReducer([], {
      type: types.GET_DATA_SUCCESS,
      ...getDataSuccessTestData,
    })
  ).toEqual({
    ...getDataSuccessTestData,
  });
});

it('should handle GET_DATA_FAILED', () => {
  expect(
    dataReducer([], {
      type: types.GET_DATA_FAILED,
      ...getDataFailedTestData,
    })
  ).toEqual({
    ...getDataFailedTestData,
  });
});
