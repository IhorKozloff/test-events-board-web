import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { globalStore, persistor } from './storage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(


        <Provider store={globalStore}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter basename="">
                    <App />
                </BrowserRouter>
            </PersistGate>
        </Provider> 

);