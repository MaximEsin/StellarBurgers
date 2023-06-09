import { request } from '../../utils';

export function register(
  email: string,
  password: string,
  name: string,
  nav: any
) {
  request('/auth/register', {
    method: 'POST',
    headers: {
      authorization: 'd5b34af3-ad0b-4c78-bdcc-85f9d783b0bc',
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
      authorization: 'd5b34af3-ad0b-4c78-bdcc-85f9d783b0bc',
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
