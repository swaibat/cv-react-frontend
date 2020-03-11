import constant from '../../../../shared/redux/constants';
import Api from '../../../../shared/Api';
import { toast } from 'react-toastify';

const Products = {
	async items() {
		try {
			const result = await Api.getItems();
			return { type: constant.ITEMS_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.ITEMS_ERROR, error: error.response.data };
		}
	},

	async products() {
		try {
			const result = await Api.getProducts();
			return { type: constant.PRODUCTS_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.PRODUCTS_ERROR, error: error.response.data };
		}
	},

	async createProduct(data, token) {
		try {
			const result = await Api.createItem(data, token);
			toast.success(result.data.message);
			return { type: constant.CREATE_ITEMS_SUCCESS, payload: result.data };
		} catch (error) {
			toast.error(error.response.data.message);
			return { type: constant.CREATE_ITEMS_ERROR, error: error.response.data };
		}
	},

	async updateProduct(data, token, id) {
		try {
			const result = await Api.updateItem(data, token, id);
			toast.success(result.data.message);
			return { type: constant.UPDATE_ITEMS_SUCCESS, payload: result.data };
		} catch (error) {
			toast.error(error.response.data.message);
			return { type: constant.UPDATE_ITEMS_ERROR, error: error.response.data };
		}
	},

	async getSingleProduct(name) {
		try {
			const result = await Api.singleItem(name);
			return { type: constant.SINGLE_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.SINGLE_ERROR, error: error.response.data };
		}
	},

	async getProductsByCategory(name) {
		try {
			const result = await Api.getItemsByCategory(name);
			return { type: constant.ITEMS_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.ITEMS_ERROR, error: error.response.data };
		}
	},
};

export default Products;
