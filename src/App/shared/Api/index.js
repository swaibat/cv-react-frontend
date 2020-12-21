import { ipUrl, forexUrl } from '../config';
import Router from './config';

const apis = {
	loginUser(data) {
		return Router.post(`/users/login`, data);
	},
	register(data, token) {
		return Router.post(`/users/register/${token}`, data);
	},
	verifyUser(data) {
		return Router.post(`/users/verify`, data);
	},
	verifyUserCode(telephone, code) {
		return Router.post(`/users/verify/${code}`, telephone);
	},
	getItems() {
		return Router.get(`/products`);
	},
	createItem(data, token) {
		return Router.post(`/products`, data, {
			headers: { Authorization: token },
		});
	},
	updateItem(data, token, name) {
		return Router.patch(`/products/${name}`, data, {
			headers: { Authorization: token },
		});
	},
	getItemsByCategory(name) {
		return Router.get(`/category/${name}`);
	},
	getCategories() {
		return Router.get(`/category`);
	},
	createCategory(data, token) {
		return Router.post(`/category`, data, {
			headers: { Authorization: token },
		});
	},
	singleItem(name) {
		return Router.get(`/products/${name}`);
	},
	getFaq() {
		return Router.get(`/faqs`);
	},
	logout(token) {
		return Router.get(`/users/logout/${token}`);
	},
	updateCategory(data, token, id) {
		return Router.patch(`/category/${id}`, data, {
			headers: { Authorization: token },
		});
	},
	deleteCategory(token, id) {
		return Router.delete(`/category/${id}`, {
			headers: { Authorization: token },
		});
	},
	getProducts(token) {
		return Router.get(`/products/admin`, {
			headers: { Authorization: token },
		});
	},
	createFaq(data, token) {
		return Router.post(`/faqs`, data, {
			headers: { Authorization: token },
		});
	},
	deleteFaq(id, token) {
		return Router.delete(`/faqs/${id}`, {
			headers: { Authorization: token },
		});
	},
	updateFaq(id, data, token) {
		return Router.patch(`/faqs/${id}`, data, {
			headers: { Authorization: token },
		});
	},
	/**
	 *
	 * @param {*} token
	 */
	getPages(token) {
		return Router.get(`/pages`, {
			headers: { Authorization: token },
		});
	},
	/**
	 *
	 * @param {*} data
	 * @param {*} token
	 */
	createPage(data, token) {
		return Router.post(`/pages`, data, {
			headers: { Authorization: token },
		});
	},
	/**
	 *
	 * @param {*} id
	 * @param {*} token
	 */

	deletePage(id, token) {
		return Router.delete(`/pages/${id}`, {
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
		return Router.patch(`/pages/${id}`, data, {
			headers: { Authorization: token },
		});
	},

	/**
	 * should get user profile details with [user-ratings,user-products]
	 * @param {*} token
	 * @param {*} id
	 */

	getUser(token) {
		return Router.get(`/users/profile`, {
			headers: { Authorization: token },
		});
	},
	/**
	 *
	 * @param {*} data
	 * @param {*} token
	 */
	createAbout(data, token) {
		return Router.post(`/about`, data, {
			headers: { Authorization: token },
		});
	},
	/**
	 *
	 * @param {*} id
	 * @param {*} token
	 */

	deleteAbout(id, token) {
		return Router.delete(`/about/${id}`, {
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
		return Router.patch(`/about/${id}`, data, {
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
		return Router.get(`/users`, {
			headers: { Authorization: token },
		});
	},

	/**
	 *
	 * @param {*} name
	 */
	getIp() {
		return Router.get(ipUrl);
	},
	getCurrency() {
		return Router.get(forexUrl);
	},
	updateCurrency(data) {
		return Router.patch(`/currency`, data);
	},
	getCurrencies() {
		return Router.get(`/currency`);
	},
	getSettings() {
		return Router.get(`/settings`);
	},
	updateSettings(data) {
		return Router.patch(`/settings`, data);
	},
	getClient() {
		return Router.get(`https://get.client-ip.com/lookup`);
	},
	addToFavourite(id, token) {
		return Router.get(`/favourite/${id}`, {
			headers: { Authorization: token },
		});
	},
	viewFavourite(token) {
		return Router.get(`/favourite`, {
			headers: { Authorization: token },
		});
	},
	removeFavourite(id, token) {
		return Router.delete(`/favourite/${id}`, {
			headers: { Authorization: token },
		});
	},
	getChat(token) {
		return Router.get(`/chats`, {
			headers: { Authorization: token },
		});
	},
	createChat(data, token) {
		return Router.post(`/chats`, data, {
			headers: { Authorization: token },
		});
	},

	facebookLogin(accessToken) {
		return Router.post(`/users/auth/facebook`, { access_token: accessToken });
	},

	deleteUser(token, id) {
		return Router.delete(`/users/${id}`, {
			headers: { Authorization: token },
		});
	},

	deleteProduct(token, id) {
		return Router.delete(`/products/${id}`, {
			headers: { Authorization: token },
		});
	},
	getPlan() {
		return Router.get(`/plans`);
	},
};

export default apis;
