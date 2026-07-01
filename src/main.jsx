import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { ThemeProvider } from './context/ThemeContext.jsx';
import  SmoothCursor  from './context/SmoothCursor.jsx';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <React.StrictMode>
      <SmoothCursor />
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  </>
);
