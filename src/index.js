import React from 'react';

import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from './store';

import Routes from '~/Routes';
import Player from './components/Player';

const App = () => (
  <Provider store={store}>
    <Routes />
    <Player />
  </Provider>
);

export default App;
