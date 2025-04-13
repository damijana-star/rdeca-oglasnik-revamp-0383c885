
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enhanced error handling for root element mounting and initialization
try {
  const rootElement = document.getElementById("root");
  
  if (!rootElement) {
    console.error("Critical Error: Root element not found in DOM");
    
    // Create a fallback element if root doesn't exist
    const fallbackRoot = document.createElement("div");
    fallbackRoot.id = "root";
    document.body.appendChild(fallbackRoot);
    
    console.log("Created fallback root element");
    
    // Render to the fallback element
    createRoot(fallbackRoot).render(<App />);
    console.log("App rendered to fallback root element");
  } else {
    // Normal rendering path
    createRoot(rootElement).render(<App />);
    console.log("React app successfully mounted to existing root element");
  }
} catch (error) {
  console.error("Critical application initialization error:", error);
  
  // Display error message to user
  const errorMessage = document.createElement("div");
  errorMessage.style.color = "red";
  errorMessage.style.padding = "20px";
  errorMessage.style.fontFamily = "sans-serif";
  errorMessage.innerHTML = `
    <h2>Application Error</h2>
    <p>Sorry, the application failed to initialize. Please try refreshing the page.</p>
    <p>Error details: ${error instanceof Error ? error.message : 'Unknown error'}</p>
  `;
  
  document.body.appendChild(errorMessage);
}
