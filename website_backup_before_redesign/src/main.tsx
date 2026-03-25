import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// Performance optimization: Preload critical resources
const preloadCriticalResources = () => {
  // Preload fonts if needed
  const link = document.createElement('link')
  link.rel = 'preload'
  link.href = '/fonts/your-font.woff2'
  link.as = 'font'
  link.type = 'font/woff2'
  link.crossOrigin = 'anonymous'
  document.head.appendChild(link)
}

// Optimize rendering
if ('requestIdleCallback' in window) {
  requestIdleCallback(preloadCriticalResources)
} else {
  setTimeout(preloadCriticalResources, 100)
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)