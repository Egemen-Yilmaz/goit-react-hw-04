import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx'

// Global error reporting hooks to avoid silent failures in production
if (typeof window !== 'undefined') {
    window.addEventListener('error', (event) => {
        // Keep the default behavior but also log helpful info
        // eslint-disable-next-line no-console
        console.error('Global error captured:', event.error || event.message, event);
    });

    window.addEventListener('unhandledrejection', (event) => {
        // eslint-disable-next-line no-console
        console.error('Unhandled promise rejection:', event.reason);
    });
}

// Minimal entry point. No app code is added — write your components in src/ yourself.
const root = createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </StrictMode>
)
