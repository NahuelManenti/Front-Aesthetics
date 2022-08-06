import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore as createStore } from '@reduxjs/toolkit';
import mainReducer from './redux/reducers/mainReducer'
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import ScrollToTop from "./helpers/ScrollToTop";



const reduxStore = createStore({ reducer: mainReducer })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={reduxStore} >
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <App />
      <Footer className="nose" />
    </BrowserRouter>
  </Provider>
);
