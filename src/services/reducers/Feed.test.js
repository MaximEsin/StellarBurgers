import { connectionReducer } from './Feed';
import * as types from '../actions/constants';
import { initialConnectionState } from './Feed';

const testData = { orders: 'Run test', total: 123, totalToday: 123 };

describe('connection reducer', () => {
  it('should return the initial state', () => {
    expect(connectionReducer(undefined, {})).toEqual({
      ...initialConnectionState,
    });
  });
});

it('should handle WS_GET_MESSAGE', () => {
  expect(
    connectionReducer([], {
      type: types.WS_GET_MESSAGE,
      ...testData,
    })
  ).toEqual({
    ...testData,
  });
});
