import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App.jsx';
import GlobalStyles from './styles/GlobalStyles.js';
import { standard } from './styles/standard.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standard}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>,
);
