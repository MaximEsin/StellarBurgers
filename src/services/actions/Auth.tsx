import { request } from '../../utils';
import { myToken } from './constants';
import { AppDispatch } from '../reducers';
import { STORE_TOKEN, REMOVE_TOKEN } from './constants';

export function register(
  email: string,
  password: string,
  name: string,
  nav: any
) {
  request('/auth/register', {
    method: 'POST',
    headers: {
      authorization: myToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
      name: name,
    }),
  })
    .then((res) => {
      if (res.success) {
        return nav;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export function Auth(email: string, password: string, nav: any) {
  return function (dispatch: AppDispatch) {
    request('/auth/login', {
      method: 'POST',
      headers: {
        authorization: myToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => {
        if (res.success) {
          dispatch({
            type: STORE_TOKEN,
            token: res.accessToken,
          });
          sessionStorage.setItem('refreshToken', res.refreshToken);
          return nav;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
}

export function getEmailCode(email: string, nav: any) {
  request('/password-reset', {
    method: 'POST',
    headers: {
      authorization: myToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
    }),
  })
    .then((res) => {
      if (res.success) {
        return nav;
      }
    })
    .catch((err) => {
      console.log(err);
    });
}

export function resetPassword(password: string, code: string, nav: any) {
  request('/password-reset/reset', {
    method: 'POST',
    headers: {
      authorization: myToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      password: password,
      token: code,
    }),
  })
    .then(() => nav)
    .catch((err) => {
      console.log(err);
    });
}

export function getUserInfo(
  setName: any,
  setEmail: any,
  setPassword: any,
  password: string,
  token: string
) {
  request('/auth/user', {
    method: 'GET',
    headers: {
      authorization: token,
      'Content-Type': 'application/json',
    },
  })
    .then((res) => {
      setName(res.user.name);
      setEmail(res.user.email);
      setPassword(password);
    })
    .catch((err) => {
      console.log(err);
    });
}

export function editUserInfo(
  name: string,
  email: string,
  password: string,
  token: string
) {
  request('/auth/user', {
    method: 'PATCH',
    headers: {
      authorization: token,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
    }),
  }).catch((err) => {
    console.log(err);
  });
}

export function removeToken() {
  return function (dispatch: AppDispatch) {
    dispatch({
      type: REMOVE_TOKEN,
    });
  };
}

export function refresh() {
  return function (dispatch: AppDispatch) {
    request('/auth/token', {
      method: 'POST',
      headers: {
        authorization: myToken,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: sessionStorage.refreshToken,
      }),
    })
      .then((res) =>
        dispatch({
          type: STORE_TOKEN,
          token: res.accessToken,
        })
      )
      .catch((err) => {
        console.log(err);
      });
  };
}
