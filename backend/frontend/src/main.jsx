// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Authprovider } from './Context/Authprovider.jsx'
import {BrowserRouter} from "react-router-dom"
import { SocketProvider } from './Context/SocketContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Authprovider>
    <SocketProvider>
    <App />
    </SocketProvider>
    </Authprovider>
    </BrowserRouter>
)
