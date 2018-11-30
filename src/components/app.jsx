import React from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import AppRouter from '../containers/router';
import rootReducer from '../modules';

const store = createStore(rootReducer);

export const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
};
