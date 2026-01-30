import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { MantineProvider } from '@mantine/core'
import LogRocket from 'logrocket';
import '@mantine/core/styles.css'
import { theme } from './theme'
import App from './App.tsx'

if (import.meta.env.PROD) {
  LogRocket.init('j5epm2/portfolio-site');
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </StrictMode>,
)
