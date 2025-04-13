
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Better error handling for root element mounting
try {
  const root = document.getElementById("root");
  if (root) {
    createRoot(root).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    console.log("React app successfully mounted");
  } else {
    console.error("Root element not found - DOM may not be fully loaded");
  }
} catch (error) {
  console.error("Error rendering React application:", error);
}
