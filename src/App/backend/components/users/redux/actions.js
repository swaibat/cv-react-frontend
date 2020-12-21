import constant from '../../../../shared/redux/constants';
import Api from '../../../../shared/Api';
import { token } from '../../../../shared/helper';

const User = {
	async getUser(id) {
		try {
			const { data } = await Api.getUser(token, id);
			return { type: constant.USER_SUCCESS, payload: data.data };
		} catch (e) {
			return { type: constant.USER_ERROR, error: e.response.data };
		}
	},
	async getUsers() {
		try {
			const { data } = await Api.getUsers(token);
			return { type: constant.USERS_SUCCESS, payload: data.data };
		} catch (e) {
			return { type: constant.USERS_ERROR, error: e.response.data };
		}
	},
};

export default User;
