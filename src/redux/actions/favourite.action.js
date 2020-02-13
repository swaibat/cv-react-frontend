import constant from '../constants';
import Api from '../../Api/index';
import { toast } from 'react-toastify';

export const addToFavourite = async (id, token) => {
	try {
		const result = await Api.addToFavourite(id, token);
		return { type: constant.ADD_FAVOURITE_SUCCESS, payload: result.data };
	} catch (error) {
		toast.error(error.response.data.message);
		return { type: constant.ADD_FAVOURITE_ERROR, error: error.response.data };
	}
};

export const viewFavourite = async token => {
	try {
		const result = await Api.viewFavourite(token);
		return { type: constant.VIEW_FAVOURITE_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.VIEW_FAVOURITE_ERROR, error: error.response.data };
	}
};

export const removeFavourite = async (id, token) => {
	try {
		const result = await Api.removeFavourite(id, token);
		return { type: constant.REMOVE_FAVOURITE_SUCCESS, payload: result.data };
	} catch (error) {
		toast.error(error.response.data.message);
		return { type: constant.REMOVE_FAVOURITE_ERROR, error: error.response.data };
	}
};
