import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// Add in your main file or component
import App from './App.jsx'
import setupLocatorUI from "@locator/runtime";
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
  
)
if (process.env.NODE_ENV === "development") {
  setupLocatorUI();
}