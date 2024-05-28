import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-tailwind/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {cart} from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Provider store={cart}>
  <ThemeProvider>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    
  </ThemeProvider>
  </Provider>

  </>
);

reportWebVitals();
