import BASE_URL from './config';
import axios from 'axios';

const apis = {
	loginUser(data) {
		return axios.post(`${BASE_URL}/users/login`, data);
	},
	getItems() {
		return axios.get(`${BASE_URL}/products`);
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
};

export default apis;
