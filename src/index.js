import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './stores';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
       <App/>
    </Provider>
   </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
