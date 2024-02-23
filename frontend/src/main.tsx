import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from 'app'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={null}>
        <App />
      </Suspense>
    </Router>
  </React.StrictMode>,
)
