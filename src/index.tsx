import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { store } from './store/store';

//use Provider for binding Rect with Redux
//use BrowserRouter 4 pages navigation
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
          <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

