import { connectionReducer } from './Feed';
import * as types from '../actions/constants';

describe('connection reducer', () => {
  it('should return the initial state', () => {
    expect(connectionReducer(undefined, {})).toEqual({
      orders: [],
      total: 0,
      totalToday: 0,
      ordersProfile: [],
    });
  });
});

it('should handle WS_GET_MESSAGE', () => {
  expect(
    connectionReducer([], {
      type: types.WS_GET_MESSAGE,
      orders: 'Run test',
      total: 123,
      totalToday: 123,
    })
  ).toEqual({
    orders: 'Run test',
    total: 123,
    totalToday: 123,
  });
});
