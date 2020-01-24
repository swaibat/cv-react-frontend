import constant from '../constants';
import Api from '../../Api/index';

export const GetFaq = async () => {
	try {
		const result = await Api.getFaq();
		return { type: constant.FAQ_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.FAQ_ERROR, error: error.response.data };
	}
};

export const createFaq = async (data, token) => {
	try {
		const result = await Api.createFaq(data, token);
		return { type: constant.CREATE_FAQ_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.CREATE_FAQ_ERROR, error: error.response.data };
	}
};

export const deleteFaq = async (id, token) => {
	try {
		const result = await Api.deleteFaq(id, token);
		return { type: constant.DELETE_FAQ_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.DELETE_FAQ_ERROR, error: error.response.data };
	}
};

export const updateFaq = async (id, data, token) => {
	try {
		const result = await Api.updateFaq(id, data, token);
		return { type: constant.UPDATE_FAQ_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.UPDATE_FAQ_ERROR, error: error.response.data };
	}
};
