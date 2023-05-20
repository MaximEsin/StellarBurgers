import { baseUrl } from '../services/actions/constants';
import { Navigate } from 'react-router-dom';

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export function request(endPoint, options) {
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
      token: localStorage.refreshToken,
    }),
  })
    .then((res) => localStorage.setItem('accessToken', res.accessToken))
    .catch((err) => {
      console.log(err);
    });
}

export const handleFormSubmit = (event) => {
  event.preventDefault();
};

export const onClose = () => {
  return <Navigate to="/" replace />;
};
