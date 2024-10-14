import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './pages/login';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import TodosPage from './pages/todos-page';
// import SignUpPage from './pages/signup';

const theme = createTheme({});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <LoginPage /> */}
      {/* <SignUpPage /> */}
      <TodosPage />
    </ThemeProvider>
  </React.StrictMode>
);
