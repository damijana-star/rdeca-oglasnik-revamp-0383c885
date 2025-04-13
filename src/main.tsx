
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Better error handling for root element mounting and initialization
try {
  const root = document.getElementById("root");
  if (root) {
    createRoot(root).render(<App />);
    console.log("React app successfully mounted");
  } else {
    console.error("Root element not found - DOM may not be fully loaded");
    // Try again after a short delay in case DOM is still loading
    setTimeout(() => {
      const delayedRoot = document.getElementById("root");
      if (delayedRoot) {
        createRoot(delayedRoot).render(<App />);
        console.log("React app mounted after delay");
      } else {
        console.error("Root element still not found after delay");
      }
    }, 500);
  }
} catch (error) {
  console.error("Error rendering React application:", error);
}
