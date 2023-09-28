import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
// import SocketContext from './contexts/SocketContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <SocketContext> */}
        <App />
      {/* </SocketContext> */}
    </BrowserRouter>
  </React.StrictMode>,
)
