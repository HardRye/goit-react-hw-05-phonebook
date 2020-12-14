import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import App from './components/App';
import store from './redux/store';

import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <h1>Hello world</h1>
    {/* <App /> */}
  </Provider>,
  document.querySelector('#root'),
);
