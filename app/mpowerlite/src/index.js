import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { ActivityIndicator, ListView, Text, View } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root'),
  )
}

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  })
}

registerServiceWorker();
