import constant from '../constants';
import Api from '../../Api/index';

export const GetAbout = async token => {
	try {
		const result = await Api.getAbout(token);
		return { type: constant.ABOUT_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.ABOUT_ERROR, error: error.response.data };
	}
};

export const createAbout = async (data, token) => {
	try {
		const result = await Api.createAbout(data, token);
		return { type: constant.CREATE_ABOUT_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.CREATE_ABOUT_ERROR, error: error.response.data };
	}
};

export const deleteAbout = async (id, token) => {
	try {
		const result = await Api.deleteAbout(id, token);
		return { type: constant.DELETE_ABOUT_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.DELETE_ABOUT_ERROR, error: error.response.data };
	}
};

export const updateAbout = async (id, data, token) => {
	try {
		const result = await Api.updateAbout(id, data, token);
		return { type: constant.UPDATE_ABOUT_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.UPDATE_ABOUT_ERROR, error: error.response.data };
	}
};
