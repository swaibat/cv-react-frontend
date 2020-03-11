import constant from '../constants';
import Api from '../../Api/index';

const User = {
	async getUser(token, id) {
		try {
			const result = await Api.getUser(token, id);
			return { type: constant.USER_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.USER_ERROR, error: error.response.data };
		}
	},

	async getUsers(token, id) {
		try {
			const result = await Api.getUsers(token, id);
			return { type: constant.USERS_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.USERS_ERROR, error: error.response.data };
		}
	},
};

export default User;
