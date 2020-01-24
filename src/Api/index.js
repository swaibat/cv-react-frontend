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
	createCategory(data, token) {
		return axios.post(`${BASE_URL}/category`, data, {
			headers: { Authorization: token },
		});
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
	updateCategory(data, token, id) {
		return axios.patch(`${BASE_URL}/category/${id}`, data, {
			headers: { Authorization: token },
		});
	},
	deleteCategory(token, id) {
		return axios.delete(`${BASE_URL}/category/${id}`, {
			headers: { Authorization: token },
		});
	},
	getProducts(token) {
		return axios.get(`${BASE_URL}/products/admin`, {
			headers: { Authorization: token },
		});
	},
};

export default apis;
