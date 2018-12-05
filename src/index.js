import React from 'react';
import ReactDOM from 'react-dom';
import {AppView} from 'components/app/view';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';

const theme = createMuiTheme();

const App = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <AppView />
    </MuiThemeProvider>
  );
};

ReactDOM.render(<App/>, document.getElementById('root'));
