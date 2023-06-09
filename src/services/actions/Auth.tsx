import { request } from '../../utils';
import { myToken } from './constants';

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
        sessionStorage.setItem('accessToken', res.accessToken);
        sessionStorage.setItem('refreshToken', res.refreshToken);
        setTimeout(() => {
          sessionStorage.removeItem('accessToken');
        }, 1200000);
        return nav;
      }
    })
    .catch((err) => {
      console.log(err);
    });
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
