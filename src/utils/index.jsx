import { baseUrl } from '../services/actions/constants';

export function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export function request(endPoint, options) {
  return fetch(`${baseUrl}${endPoint}`, options).then(checkResponse);
}
