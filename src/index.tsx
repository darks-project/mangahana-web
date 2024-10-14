import axios from 'axios';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Router } from 'router';
import { store } from 'store';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <Router />
  </Provider>
);
