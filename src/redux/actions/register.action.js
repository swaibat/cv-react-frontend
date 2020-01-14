import constant from '../constants';
import Api from '../../Api/index';

export const register = async (payload, token) => {
	try {
		const result = await Api.register(payload, token);
		return { type: constant.REGISTER_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.REGISTER_ERROR, error: error.response.data };
	}
};

export const verifyUser = async payload => {
	try {
		const result = await Api.verifyUser(payload);
		return { type: constant.VERIFY_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.VERIFY_ERROR, error: error.response.data };
	}
};
