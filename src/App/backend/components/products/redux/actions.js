import constant from '../../../../shared/redux/constants';
import Api from '../../../../shared/Api';
import { toast } from 'react-toastify';
import { token } from '../../../../shared/helper';

const Products = {
	async items() {
		try {
			const result = await Api.getItems();
			return { type: constant.PRODUCTS_SUCCESS, payload: result.data.data };
		} catch (error) {
			return { type: constant.PRODUCTS_ERROR, error: error.response.data };
		}
	},

	async products() {
		try {
			const result = await Api.getProducts();
			return { type: constant.PRODUCTS_SUCCESS, payload: result.data.data };
		} catch (error) {
			return { type: constant.PRODUCTS_ERROR, error: error.response.data };
		}
	},

	async createProduct(data) {
		try {
			const result = await Api.createItem(data, token);
			toast.success(result.data.message);
			return { type: constant.CREATE_PRODUCT_SUCCESS, payload: result.data };
		} catch (error) {
			toast.error(error.response.data.message);
			return { type: constant.CREATE_PRODUCT_ERROR, error: error.response.data };
		}
	},

	async updateProduct(data, id) {
		try {
			const result = await Api.updateItem(data, token, id);
			toast.success(result.data.message);
			return { type: constant.UPDATE_PRODUCT_SUCCESS, payload: result.data.data };
		} catch (error) {
			toast.error(error.response.data.message);
			return { type: constant.UPDATE_PRODUCT_ERROR, error: error.response.data };
		}
	},

	async getSingleProduct(id) {
		try {
			const { data } = await Api.singleItem(id);
			return { type: constant.SINGLE_SUCCESS, payload: data.data };
		} catch (error) {
			return { type: constant.SINGLE_ERROR, error: error.response.data };
		}
	},

	async getProductsByCategory(name) {
		try {
			const result = await Api.getItemsByCategory(name);
			return { type: constant.PRODUCTS_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.PRODUCTS_ERROR, error: error.response.data };
		}
	},

	async deleteProduct(id) {
		try {
			const result = await Api.deleteProduct(token, id);
			toast.success(result.data.message);
			return { type: constant.DELETE_PRODUCT_SUCCESS, payload: result.data };
		} catch (error) {
			toast.error(error.response.data.message);
			return { type: constant.DELETE_PRODUCT_ERROR, error: error.response.data };
		}
	},
};

export default Products;
