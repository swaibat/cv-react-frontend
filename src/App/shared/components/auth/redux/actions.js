import constant from '../../../redux/constants';
import Api from '../../../Api';
import { toast } from 'react-toastify';
import { token } from '../../../helper';

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

	async register(payload) {
		try {
			const result = await Api.register(payload, token);
			toast.success(result.data.message);
			return { type: constant.REGISTER_SUCCESS, payload: result.data };
		} catch (error) {
			toast.error(error.response.data.message);
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

	async logout() {
		try {
			const result = await Api.logout(token);
			return { type: constant.LOGOUT_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.LOGOUT_ERROR };
		}
	},
	async deleteUser(id) {
		try {
			const result = await Api.deleteUser(token, id);
			toast.success(result.data.message);
			return { type: constant.DELETE_USER_SUCCESS, payload: result.data };
		} catch (error) {
			toast.error(error.response.data.message);
			return { type: constant.DELETE_USER_ERROR };
		}
	},
};

export default Auth;
