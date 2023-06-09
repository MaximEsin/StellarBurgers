import { FormEvent } from 'react';
import { baseUrl } from '../services/actions/constants';
import { Navigate } from 'react-router-dom';

export function checkResponse(res: Response) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export function request(endPoint: string, options?: any) {
  return fetch(`${baseUrl}${endPoint}`, options).then(checkResponse);
}

export const handleFormSubmit = (
  event: FormEvent<HTMLFormElement>,
  handler: any
) => {
  event.preventDefault();
};

export const onClose = (location: string, nav: any) => {
  if (location !== '/') {
    return nav;
  } else {
    return <Navigate to="/" replace />;
  }
};
