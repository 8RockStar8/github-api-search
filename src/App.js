import React from 'react';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import Layout from './sections';
import ScrollToTop from './helpers';
import Reducers from './app/reducers';

const middleware = [thunk];
const history = createBrowserHistory();
const store = createStore(Reducers, composeWithDevTools(applyMiddleware(...middleware)));

const App = () => {
  return (
    <Provider store={store}>
      <Router history={history}>
        <ScrollToTop>
          <Layout />
        </ScrollToTop>
      </Router>
    </Provider>
  );
}

export default App;
