import React from 'react';
import App from './App/App.js';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './assets/scss/style.scss';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.scss';
import { toast } from 'react-toastify';
import cron from './helper/cron.job.helper';
cron.start();
toast.configure({ position: 'bottom-right' });
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root'),
);
