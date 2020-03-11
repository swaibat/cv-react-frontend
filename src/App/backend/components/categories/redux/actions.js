import constant from '../../../../shared/redux/constants';
import Api from '../../../../shared/Api';
import { toast } from 'react-toastify';

const Category = {
	async getCategories() {
		try {
			const result = await Api.getCategories();
			return { type: constant.CATEGORY_SUCCESS, payload: result.data, allItems: result.data };
		} catch (error) {
			return { type: constant.CATEGORY_ERROR, error: error.response.data };
		}
	},

	async createCategory(data, token) {
		try {
			const result = await Api.createCategory(data, token);
			toast.success(result.data.message);
			return { type: constant.CREATE_CATEGORY_SUCCESS, payload: result.data };
		} catch (error) {
			toast.error(error.response.data.message);
			return { type: constant.CREATE_CATEGORY_ERROR, error: error.response.data };
		}
	},

	async updateCategory(data, token, id) {
		try {
			const result = await Api.updateCategory(data, token, id);
			toast.success(result.data.message);
			return { type: constant.UPDATE_CATEGORY_SUCCESS, payload: result.data };
		} catch (error) {
			toast.error(error.response.data.message);
			return { type: constant.UPDATE_CATEGORY_ERROR, error: error.response.data };
		}
	},

	async deleteCategory(token, id) {
		try {
			const result = await Api.deleteCategory(token, id);
			toast.success(result.data.message);
			return { type: constant.DELETE_CATEGORY_SUCCESS, payload: result.data };
		} catch (error) {
			toast.error(error.response.data.message);
			return { type: constant.DELETE_CATEGORY_ERROR, error: error.response.data };
		}
	},
};

export default Category;