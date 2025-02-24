import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ClerkProvider} from '@clerk/clerk-react'
import { BrowserRouter, useNavigate, Router,Routes,Route } from 'react-router-dom'

// Import your Publishable Key
const vitekey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

console.log(vitekey)

if (!vitekey) {
  throw new Error("Missing Publishable Key")
}

const rootElement = document.getElementById('root');


if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ClerkProvider publishableKey={vitekey} afterSignOutUrl="/start">
        <App />
      </ClerkProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found!");
}