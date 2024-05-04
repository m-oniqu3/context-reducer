import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import CommunityContextProvider from './context/CommunityContext.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CommunityContextProvider>
    <App />
    </CommunityContextProvider>
  </React.StrictMode>,
)
