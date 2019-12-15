import constant from '../constants';
import Api from '../../Api/index';

export const login = async payload => {
	try {
		const result = await Api.loginUser(payload);
		return { type: constant.LOGIN_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.LOGIN_ERROR, error: error.response.data };
	}
};
