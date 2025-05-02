
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

// Using StrictMode for enhanced development checks
// This helps catch potential problems early
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
