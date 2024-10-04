import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './pages/login';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

const theme = createTheme({});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LoginPage />
    </ThemeProvider>
  </React.StrictMode>
);
