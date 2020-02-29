import socketClient from 'socket.io-client';
import url from '../Api/config';
import { toast } from 'react-toastify';

export const initializeSocketIo = token => {
	const socket = socketClient(url, { query: { token } });
	socket.on('new_message', payload => {
		toast.success(payload.message);
	});
};
