import constant from '../constants';
import Api from '../../Api/index';

const Settings = async token => {
	try {
		const result = await Api.register(token);
		return { type: constant.SETTINGS_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.SETTINGS_ERROR, error: error.response.data };
	}
};

export default Settings;
