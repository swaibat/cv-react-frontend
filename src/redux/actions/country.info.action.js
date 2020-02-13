import constant from '../constants';
import location from './../../helper/google';

export const getClientInfo = async () => {
	try {
		const result = await location.getLocation();
		return { type: constant.CLIENT_INFO_SUCCESS, payload: result };
	} catch (error) {
		const message = error.response ? error.response : 'No internet access';
		return { type: constant.CLIENT_INFO_ERROR, error: message };
	}
};
