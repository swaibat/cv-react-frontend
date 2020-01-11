import constant from '../constants';
import Api from '../../Api/index';

export const GetFaq = async () => {
	try {
		const result = await Api.getFaq();
		return { type: constant.FAQ_SUCCESS, payload: result.data };
	} catch (error) {
		return { type: constant.FAQ_ERROR, error: error.response.data };
	}
};
