import constant from '../constants';
import Api from '../../Api/index';
import { toast } from 'react-toastify';

export const getSettings = async () => {
	try {
		const result = await Api.getSettings();
		return { type: constant.SETTINGS_SUCCESS, payload: result.data };
	} catch (error) {
		toast.error(error.response.data.message);
		return { type: constant.SETTINGS_ERROR, error: error.response.data };
	}
};

export const updateSettings = async (data, token) => {
	try {
		const result = await Api.updateSettings(data, token);
		toast.success(result.data.message);
		return { type: constant.UPDATE_SETTINGS_SUCCESS, payload: result.data };
	} catch (error) {
		toast.error(error.response.data.message);
		return { type: constant.UPDATE_SETTINGS_ERROR, error: error.response.data };
	}
};
