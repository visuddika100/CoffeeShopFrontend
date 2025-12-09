import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
    {/* 2. Wrap the entire application with the Router */}
    <BrowserRouter> 
      <App />
    </BrowserRouter> 
  </React.StrictMode>
  );