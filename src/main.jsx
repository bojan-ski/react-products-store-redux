import React from 'react'
import ReactDOM from 'react-dom/client'
// bootstrap css
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.js";
// Import Swiper styles
import 'swiper/css';
// toastify css
import '/node_modules/react-toastify/dist/ReactToastify.css';
// custom css
import './index.css'
// app
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
