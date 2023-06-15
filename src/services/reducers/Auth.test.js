import { tokenReducer } from './Auth';
import * as types from '../actions/constants';

describe('token reducer', () => {
  it('should return the initial state', () => {
    expect(tokenReducer(undefined, {})).toEqual({
      token: '',
      isLoggedIn: false,
    });
  });
});

it('should handle STORE_TOKEN', () => {
  expect(
    tokenReducer([], {
      type: types.STORE_TOKEN,
      token: 'token',
    })
  ).toEqual({
    isLoggedIn: true,
    token: 'token',
  });
});

it('should handle REMOVE_TOKEN', () => {
  expect(
    tokenReducer([], {
      type: types.REMOVE_TOKEN,
    })
  ).toEqual({
    isLoggedIn: false,
    token: '',
  });
});
