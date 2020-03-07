import constant from '../../../../shared/redux/constants';
import Api from '../../../../shared/Api';
import { toast } from 'react-toastify';

const Settings = {
	async getSettings() {
		try {
			const result = await Api.getSettings();
			return { type: constant.SETTINGS_SUCCESS, payload: result.data };
		} catch (error) {
			toast.error(error.response.data.message);
			return { type: constant.SETTINGS_ERROR, error: error.response.data };
		}
	},

	async updateSettings(data, token) {
		try {
			const result = await Api.updateSettings(data, token);
			toast.success(result.data.message);
			return { type: constant.UPDATE_SETTINGS_SUCCESS, payload: result.data };
		} catch (error) {
			toast.error(error.response.data.message);
			return { type: constant.UPDATE_SETTINGS_ERROR, error: error.response.data };
		}
	},
};

export default Settings;
