import constant from '../constants';
import Api from '../../Api/index';

export const facebookLogin = async accessToken => {
	try {
		const result = await Api.facebookLogin(accessToken);
		return {
			type: constant.FACEBOOK_LOGIN_SUCCESS,
			payload: result.data,
		};
	} catch (error) {
		return {
			type: constant.FACEBOOK_LOGIN_ERROR,
			error: error.response.data,
		};
	}
};
