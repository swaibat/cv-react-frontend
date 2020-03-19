import constant from '../../../../shared/redux/constants';
import Api from '../../../../shared/Api';

const Faq = {
	async GetFaq() {
		try {
			const result = await Api.getFaq();
			return { type: constant.FAQ_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.FAQ_ERROR, error: error.response.data };
		}
	},

	async createFaq(data, token) {
		try {
			const result = await Api.createFaq(data, token);
			return { type: constant.CREATE_FAQ_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.CREATE_FAQ_ERROR, error: error.response.data };
		}
	},

	async deleteFaq(id, token) {
		try {
			const result = await Api.deleteFaq(id, token);
			return { type: constant.DELETE_FAQ_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.DELETE_FAQ_ERROR, error: error.response.data };
		}
	},

	async updateFaq(id, data, token) {
		try {
			const result = await Api.updateFaq(id, data, token);
			return { type: constant.UPDATE_FAQ_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.UPDATE_FAQ_ERROR, error: error.response.data };
		}
	},
};

export default Faq;
