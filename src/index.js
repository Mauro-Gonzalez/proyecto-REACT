import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import { DataContext, AppProvider } from "./components/context/DataContext";
import {StateProvider} from "./StateProvider";
import reducer, { initialState } from "./reducer";



ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
  </StateProvider>
  </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

