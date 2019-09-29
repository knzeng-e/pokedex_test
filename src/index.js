import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import rootReducer from './store/reducers/RootReducer'

const localStore = createStore(rootReducer)
const connectedApp = <Provider store={localStore}><App /></Provider>
ReactDOM.render(connectedApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
