import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './services/reducers';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
window.onload = () => {
  if (localStorage.getItem('isLoggedIn') === 'true') {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('accessToken');
  }
};
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
