import BASE_URL from './config';
import axios from 'axios';

const apis = {
	async loginUser(data) {
		return axios.post(`${BASE_URL}/users/login`, data);
	},
};

export default apis;
