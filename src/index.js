import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './global.css';
import { ResultContextProvider } from './contexts/ResultContextProvider';
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <ResultContextProvider>
    <BrowserRouter>
   
      <App />
      </BrowserRouter>
      </ResultContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);