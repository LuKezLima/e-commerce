import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {GlobalStyle} from './GlobalStyles';
import reportWebVitals from './reportWebVitals';
import { FormProvider as ProviderActiveMenu } from './contexts/ActiveMenuContext'

ReactDOM.render(
  
  <React.StrictMode>
    <ProviderActiveMenu>
    <App />
    </ProviderActiveMenu>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
