import constant from '../../../redux/constants';
import Api from '../../../Api';

const Auth = {
	async facebookLogin(accessToken) {
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
	},

	async login(payload) {
		try {
			const result = await Api.loginUser(payload);
			return { type: constant.LOGIN_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.LOGIN_ERROR, error: error.response.data };
		}
	},

	async register(payload, token) {
		try {
			const result = await Api.register(payload, token);
			return { type: constant.REGISTER_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.REGISTER_ERROR, error: error.response.data };
		}
	},

	async verifyUser(payload) {
		try {
			const result = await Api.verifyUser(payload);
			return { type: constant.VERIFY_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.VERIFY_ERROR, error: error.response.data };
		}
	},

	async verifyUserCode(phone, code) {
		try {
			const result = await Api.verifyUserCode(phone, code);
			return { type: constant.VERIFY_CODE_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.VERIFY_CODE_ERROR, error: error.response.data };
		}
	},

	async logout(token) {
		try {
			const result = await Api.logout(token);
			return { type: constant.LOGOUT_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.LOGOUT_ERROR };
		}
	},
};

export default Auth;
