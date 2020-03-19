import constant from '../constants';
import Api from '../../Api/index';
import location from '../../helper/google';

const Local = {
	async getIp() {
		try {
			const result = await Api.getIp();
			const { data } = result;
			const locIndex = data.indexOf('loc=');
			const CountryName = data.slice(locIndex + 4, locIndex + 7).trim();
			const country = location.getCountry(CountryName);
			return { type: constant.IP_SUCCESS, payload: country };
		} catch (error) {
			const message = error.response ? error.response : 'No internet access';
			return { type: constant.IP_ERROR, error: message };
		}
	},

	async getClientInfo() {
		try {
			const result = await location.getLocation();
			return { type: constant.CLIENT_INFO_SUCCESS, payload: result };
		} catch (error) {
			const message = error.response ? error.response : 'No internet access';
			return { type: constant.CLIENT_INFO_ERROR, error: message };
		}
	},

	async getCurrency() {
		try {
			const result = await Api.getCurrencies();
			return { type: constant.CURRENCY_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.CURRENCY_ERROR, error: error.response.data };
		}
	},

	async updateCurrency(id, data, token) {
		try {
			const result = await Api.updateCurrency(id, data, token);
			return { type: constant.UPDATE_CURRENCY_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.UPDATE_CURRENCY_ERROR, error: error.response.data };
		}
	},
};

export default Local;
