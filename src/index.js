import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import generateStore from './Store/cofigureStore.js';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Provider store={generateStore()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
