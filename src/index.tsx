import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { globalStore } from './storage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(

    <Provider store={globalStore}>

        <BrowserRouter basename="">
            <App />
        </BrowserRouter>

    </Provider> 

);