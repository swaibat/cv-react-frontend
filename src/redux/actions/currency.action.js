import constant from '../constants';
import Api from '../../Api/index';

export const GetCurrency = async () => {
	try {
		const result = await Api.getCurrencies();
		return { type: constant.CURRENCY_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.CURRENCY_ERROR, error: error.response.data };
	}
};

export const updateCurrency = async (id, data, token) => {
	try {
		const result = await Api.updateCurrency(id, data, token);
		return { type: constant.UPDATE_CURRENCY_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.UPDATE_CURRENCY_ERROR, error: error.response.data };
	}
};
