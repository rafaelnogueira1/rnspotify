import React from 'react';

import '~/config/ReactotronConfig';
import StatusBarConfig from '~/config/StatusBarConfig';

import { Provider } from 'react-redux';
import store from './store';

import Routes from '~/Routes';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
