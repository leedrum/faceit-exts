import React from 'react';
import { render } from 'react-dom';

import Popup from './Popup';
import './index.css';
import { createTheme, ThemeProvider } from '@mui/material';

export const colors = {
  orange: '#f50'
}

const theme = createTheme({
  components: {
    // Name of the component
    MuiButtonBase: {
      defaultProps: {
        // The props to change the default for.
        disableRipple: true, // No more ripple, on the whole application 💣!
      },
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#ccc'
    },
    secondary: {
      main: colors.orange
    },
    text: {
      secondary: '#999b9d'
    },
    background: {
      default: '#1E2222'
    }
  },
  typography: {
    useNextVariants: true
  }
});

render(
  <ThemeProvider theme={theme}>
    <Popup />
  </ThemeProvider>
  ,
  window.document.querySelector('#app-container')
);

if (module.hot) module.hot.accept();
