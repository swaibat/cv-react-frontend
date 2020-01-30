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
	createFaq(data, token) {
		return axios.post(`${BASE_URL}/faqs`, data, {
			headers: { Authorization: token },
		});
	},
	deleteFaq(id, token) {
		return axios.delete(`${BASE_URL}/faqs/${id}`, {
			headers: { Authorization: token },
		});
	},
	updateFaq(id, data, token) {
		return axios.patch(`${BASE_URL}/faqs/${id}`, data, {
			headers: { Authorization: token },
		});
	},
	/**
	 *
	 * @param {*} token
	 */
	getPages(token) {
		return axios.get(`${BASE_URL}/pages`, {
			headers: { Authorization: token },
		});
	},
	/**
	 *
	 * @param {*} data
	 * @param {*} token
	 */
	createPage(data, token) {
		return axios.post(`${BASE_URL}/pages`, data, {
			headers: { Authorization: token },
		});
	},
	/**
	 *
	 * @param {*} id
	 * @param {*} token
	 */

	deletePage(id, token) {
		return axios.delete(`${BASE_URL}/pages/${id}`, {
			headers: { Authorization: token },
		});
	},
	/**
	 *
	 * @param {*} id
	 * @param {*} data
	 * @param {*} token
	 */

	updatePage(id, data, token) {
		return axios.patch(`${BASE_URL}/pages/${id}`, data, {
			headers: { Authorization: token },
		});
	},

	/**
	 * should get user profile details with [user-ratings,user-products]
	 * @param {*} token
	 * @param {*} id
	 */

	getUser(token) {
		return axios.get(`${BASE_URL}/users/profile`, {
			headers: { Authorization: token },
		});
	},
	/**
	 *
	 * @param {*} data
	 * @param {*} token
	 */
	createAbout(data, token) {
		return axios.post(`${BASE_URL}/about`, data, {
			headers: { Authorization: token },
		});
	},
	/**
	 *
	 * @param {*} id
	 * @param {*} token
	 */

	deleteAbout(id, token) {
		return axios.delete(`${BASE_URL}/about/${id}`, {
			headers: { Authorization: token },
		});
	},
	/**
	 *
	 * @param {*} id
	 * @param {*} data
	 * @param {*} token
	 */

	updateAbout(id, data, token) {
		return axios.patch(`${BASE_URL}/about/${id}`, data, {
			headers: { Authorization: token },
		});
	},
};

export default apis;
