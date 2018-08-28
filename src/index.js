import '@babel/polyfill'; //Start to use redux-saga
import react from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';
import store from './store';

const root = document.getElementById('root');

ReactDOM.render(<Provider store={store} >
  <App />
  </Provider>, root);
