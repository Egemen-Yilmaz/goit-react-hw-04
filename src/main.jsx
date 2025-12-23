import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'

// Minimal entry point. No app code is added — write your components in src/ yourself.
const root = createRoot(document.getElementById('root'))
root.render(<>
<StrictMode>
    <App />
</StrictMode>
</>)
