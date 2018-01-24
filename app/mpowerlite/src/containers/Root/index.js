import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import loggingMiddleware from '../../middleware/loggingMiddleware';
import apiMiddleware from '../../middleware/apiMiddleware';

import App from '../App';
import reducer from '../../reducers';

const Root = (props) => {
  const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(
      loggingMiddleware,
      apiMiddleware,
    )
  )); 

  console.log("1.");
  console.log(store);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;