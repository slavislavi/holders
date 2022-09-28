import React from 'react';
import {Provider} from 'react-redux';
import {AppNavigation} from '@router/index';
import store from '@store/index';

export const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />;
    </Provider>
  );
};
