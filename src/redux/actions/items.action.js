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
		return { type: constant.CATEGORY_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.CATEGORY_ERROR, error: error.response.data };
	}
};
