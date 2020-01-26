import constant from '../constants';
import Api from '../../Api/index';

export const getPages = async () => {
	try {
		const result = await Api.getPages();
		return { type: constant.PAGES_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.PAGES_ERROR, error: error.response.data };
	}
};

export const createPage = async (data, token) => {
	try {
		const result = await Api.createPage(data, token);
		return { type: constant.CREATE_PAGE_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.CREATE_PAGE_ERROR, error: error.response.data };
	}
};

export const deletePage = async (id, token) => {
	try {
		const result = await Api.deletePage(id, token);
		return { type: constant.DELETE_PAGE_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.DELETE_PAGE_ERROR, error: error.response.data };
	}
};

export const updatePage = async (id, data, token) => {
	try {
		const result = await Api.updatePage(id, data, token);
		return { type: constant.UPDATE_PAGE_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.UPDATE_PAGE_ERROR, error: error.response.data };
	}
};
