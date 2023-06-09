import { FormEvent } from 'react';
import { baseUrl } from '../services/actions/constants';

export function checkResponse(res: Response) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export function request(endPoint: string, options?: any) {
  return fetch(`${baseUrl}${endPoint}`, options).then(checkResponse);
}

export function refresh() {
  request('/auth/token', {
    method: 'POST',
    headers: {
      authorization: 'd5b34af3-ad0b-4c78-bdcc-85f9d783b0bc',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: sessionStorage.refreshToken,
    }),
  })
    .then((res) => sessionStorage.setItem('accessToken', res.accessToken))
    .catch((err) => {
      console.log(err);
    });
}

export const handleFormSubmit = (
  event: FormEvent<HTMLFormElement>,
  handler: any
) => {
  event.preventDefault();
};
