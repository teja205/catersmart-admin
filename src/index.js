import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "../src/Assets/scss/style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import { AuthProvider } from './api/components/Authprovider';

ReactDOM.render(
  <React.StrictMode>
  <AuthProvider>
    <App />
  </AuthProvider>
</React.StrictMode>,
  document.getElementById('root')
);