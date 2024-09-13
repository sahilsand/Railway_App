import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import 'leaflet/dist/leaflet.css';

// Get the root element and create a React root
const container = document.getElementById('root');
const root = createRoot(container!);

// Render the App component
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
