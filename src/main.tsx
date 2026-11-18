import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App'

const container = document.getElementById('root')!

const app = (
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <Analytics />
    </HelmetProvider>
  </StrictMode>
)

// Se a página veio pré-renderizada, "hidrata" o HTML existente;
// caso contrário (ex.: npm run dev), renderiza do zero.
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
