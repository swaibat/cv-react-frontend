import socketClient from 'socket.io-client';
import url from '../config';
import { toast } from 'react-toastify';
import Constants from '../redux/constants';
import store from '../redux/store';

export const initializeSocketIo = token => {
	const socket = socketClient(url, { query: { token } });
	socket.on('new_message', payload => {
		store.dispatch({
			type: Constants.CHAT_NEW_MESSAGE,
			payload,
		});
		toast.success(payload.message);
	});
	socket.on('roomData', payload => {
		store.dispatch({
			type: Constants.ONLINE_USERS,
			payload,
		});
	});
};
