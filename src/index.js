import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import '../src/css/style.scss'
import { Provider } from 'react-redux';
import  rootStore  from './rootStore'
console.log('rootStore.getState: ',rootStore.getState())
render(
    <Provider store = {rootStore }>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();