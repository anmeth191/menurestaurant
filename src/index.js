import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
//import { BrowserRouter as Router , Route , Link , Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import menuReducer  from './model/menuReducer';
import style from './styles/style.scss';

const store = createStore(menuReducer);

ReactDOM.render(
<Provider store={ store }> <App /> </Provider> , document.querySelector('#root')
)