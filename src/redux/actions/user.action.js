import constant from '../constants';
import Api from '../../Api/index';

export const getUser = async (token, id) => {
	try {
		const result = await Api.getUser(token, id);
		return { type: constant.USER_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.USER_ERROR, error: error.response.data };
	}
};

export const getUsers = async (token, id) => {
	try {
		const result = await Api.getUsers(token, id);
		return { type: constant.USERS_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.USERS_ERROR, error: error.response.data };
	}
};
