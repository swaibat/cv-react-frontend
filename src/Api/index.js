import BASE_URL from './config';
import axios from 'axios';

const apis = {
	loginUser(data) {
		return axios.post(`${BASE_URL}/users/login`, data);
	},
	register(data, token) {
		return axios.post(`${BASE_URL}/users/register/${token}`, data);
	},
	verifyUser(email) {
		return axios.post(`${BASE_URL}/users/verify`, email);
	},
	getItems() {
		return axios.get(`${BASE_URL}/products`);
	},
	createItem(data, token) {
		return axios.post(`${BASE_URL}/products`, data, {
			headers: { Authorization: token },
		});
	},
	getItemsByCategory(name) {
		return axios.get(`${BASE_URL}/category/${name}`);
	},
	getCategories() {
		return axios.get(`${BASE_URL}/category`);
	},
	singleItem(name) {
		return axios.get(`${BASE_URL}/products/${name}`);
	},
	getFaq() {
		return axios.get(`${BASE_URL}/faqs`);
	},
	logout(token) {
		return axios.get(`${BASE_URL}/users/logout/${token}`);
	},
};

export default apis;
