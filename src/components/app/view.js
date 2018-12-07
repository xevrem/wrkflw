import React from 'react';
import { Provider } from 'react-redux';
import store from 'configureStore';
import { BrowserRouter } from 'react-router-dom';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import {AppRouter} from 'components/app/router';


const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  }
});

export const AppView = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline/>
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  </MuiThemeProvider>
);
