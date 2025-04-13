
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Better error handling for root element mounting
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Root element not found - DOM may not be fully loaded");
} else {
  try {
    const root = createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("React app successfully mounted");
  } catch (error) {
    console.error("Error rendering React application:", error);
  }
}
