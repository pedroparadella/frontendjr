import React from 'react';
import ReactDOM from 'react-dom';
import App from './Screens/Home/App';
import Global from './Components/Style_Global/GlobalStyle'


ReactDOM.render(
  <React.StrictMode>
    <Global/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  
);

