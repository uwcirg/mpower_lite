import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import App from '../App';
import reducer from '../../reducers';

const Root = (props) => {
  const store = createStore(reducer, devToolsEnhancer()); 

  console.log("1.");
  console.log(store);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;