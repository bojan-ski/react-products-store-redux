import React from 'react'
import ReactDOM from 'react-dom/client'
// bootstrap css
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.js";
// swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// toastify css
import '/node_modules/react-toastify/dist/ReactToastify.css';
// custom css
import './index.css'
// redux
import { Provider } from 'react-redux';
import { store } from './store.js';
// app
import App from './App.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)