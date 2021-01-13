import constant from '../constants';
import Api from '../../Api/index';

const Chat = {
	async getChat(token) {
		try {
			const result = await Api.getChat(token);
			return { type: constant.CHAT_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.CHAT_ERROR, error: error.response.data };
		}
	},

	async createChat(data, token) {
		try {
			const result = await Api.createChat(data, token);
			return { type: constant.CREATE_CHAT_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.CREATE_CHAT_ERROR, error: error.response.data };
		}
	},
};

export default Chat;
