import React from 'react';
import App from './App/App.js';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './assets/scss/style.scss';
import 'bootstrap/dist/js/bootstrap.bundle';

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
