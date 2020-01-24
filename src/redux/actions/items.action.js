import constant from '../constants';
import Api from '../../Api/index';

export const items = async () => {
	try {
		const result = await Api.getItems();
		return { type: constant.ITEMS_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.ITEMS_ERROR, error: error.response.data };
	}
};

export const products = async () => {
	try {
		const result = await Api.getProducts();
		return { type: constant.PRODUCTS_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.PRODUCTS_ERROR, error: error.response.data };
	}
};

export const createItem = async (data, token) => {
	try {
		const result = await Api.createItem(data, token);
		return { type: constant.CREATE_ITEMS_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.CREATE_ITEMS_ERROR, error: error.response.data };
	}
};

export const singleItems = async name => {
	try {
		const result = await Api.singleItem(name);
		return { type: constant.SINGLE_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.SINGLE_ERROR, error: error.response.data };
	}
};

export const itemsByCategory = async name => {
	try {
		const result = await Api.getItemsByCategory(name);
		return { type: constant.ITEMS_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.ITEMS_ERROR, error: error.response.data };
	}
};

export const category = async () => {
	try {
		const result = await Api.getCategories();
		return { type: constant.CATEGORY_SUCCESS, payload: result.data, allItems: result.data };
	} catch (error) {
		return { type: constant.CATEGORY_ERROR, error: error.response.data };
	}
};

export const createCategory = async (data, token) => {
	try {
		const result = await Api.createCategory(data, token);
		return { type: constant.CREATE_CATEGORY_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.CREATE_CATEGORY_ERROR, error: error.response.data };
	}
};

export const updateCategory = async (data, token, id) => {
	try {
		const result = await Api.updateCategory(data, token, id);
		return { type: constant.UPDATE_CATEGORY_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.UPDATE_CATEGORY_ERROR, error: error.response.data };
	}
};

export const deleteCategory = async (token, id) => {
	try {
		const result = await Api.deleteCategory(token, id);
		return { type: constant.DELETE_CATEGORY_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.DELETE_CATEGORY_ERROR, error: error.response.data };
	}
};
