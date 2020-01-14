import constants from '../constants';
import api from '../../Api';

export default async token => {
	try {
		const result = await api.logout(token);
		return { type: constants.LOGOUT_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constants.LOGOUT_ERROR };
	}
};
