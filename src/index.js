import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import CartState from "./context/cart/CartState"


ReactDOM.render(
  <React.StrictMode>
 <CartState>
    <App />
 </CartState>
  </React.StrictMode>,
  document.getElementById('root')
);

