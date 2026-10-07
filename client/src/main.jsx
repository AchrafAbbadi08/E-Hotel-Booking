import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/react'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

/*const PUPLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if(!PUPLISHABLE_KEY){
  throw new Error('Add your Clerk Publishable key to the .env fule')
}*/
createRoot(document.getElementById('root')).render(
  <ClerkProvider>
    <BrowserRouter>
     <App />
    </BrowserRouter>
  </ClerkProvider>
)
