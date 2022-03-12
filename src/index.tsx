import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';

import history from '../src/utils/history';
import configureStore from './configure.store';

import App from './containers/app/loadable.app';
import 'antd/dist/antd.css';
import './index.css';

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
