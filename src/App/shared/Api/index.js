import BASE_URL, { ipUrl, forexUrl } from '../config';
import axios from 'axios';

const apis = {
	loginUser(data) {
		return axios.post(`${BASE_URL}/users/login`, data);
	},
	register(data, token) {
		return axios.post(`${BASE_URL}/users/register/${token}`, data);
	},
	verifyUser(data) {
		return axios.post(`${BASE_URL}/users/verify`, data);
	},
	verifyUserCode(telephone, code) {
		return axios.post(`${BASE_URL}/users/verify/${code}`, telephone);
	},
	getItems() {
		return axios.get(`${BASE_URL}/products`);
	},
	createItem(data, token) {
		return axios.post(`${BASE_URL}/products`, data, {
			headers: { Authorization: token },
		});
	},
	updateItem(data, token, name) {
		return axios.patch(`${BASE_URL}/products/${name}`, data, {
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

	/**
	 *
	 * @param {*} id
	 * @param {*} data
	 * @param {*} token
	 */
	getUsers(token) {
		return axios.get(`${BASE_URL}/users`, {
			headers: { Authorization: token },
		});
	},

	/**
	 *
	 * @param {*} name
	 */
	getIp() {
		return axios.get(ipUrl);
	},
	getCurrency() {
		return axios.get(forexUrl);
	},
	updateCurrency(data) {
		return axios.patch(`${BASE_URL}/currency`, data);
	},
	getCurrencies() {
		return axios.get(`${BASE_URL}/currency`);
	},
	getSettings() {
		return axios.get(`${BASE_URL}/settings`);
	},
	updateSettings(data) {
		return axios.patch(`${BASE_URL}/settings`, data);
	},
	getClient() {
		return axios.get(`https://get.client-ip.com/lookup`);
	},
	addToFavourite(id, token) {
		return axios.get(`${BASE_URL}/favourite/${id}`, {
			headers: { Authorization: token },
		});
	},
	viewFavourite(token) {
		return axios.get(`${BASE_URL}/favourite`, {
			headers: { Authorization: token },
		});
	},
	removeFavourite(id, token) {
		return axios.delete(`${BASE_URL}/favourite/${id}`, {
			headers: { Authorization: token },
		});
	},
	getChat(token) {
		return axios.get(`${BASE_URL}/chats`, {
			headers: { Authorization: token },
		});
	},
	createChat(data, token) {
		return axios.post(`${BASE_URL}/chats`, data, {
			headers: { Authorization: token },
		});
	},
	facebookLogin(accessToken) {
		return axios.post(`${BASE_URL}/users/auth/facebook`, { access_token: accessToken });
	},
};

export default apis;