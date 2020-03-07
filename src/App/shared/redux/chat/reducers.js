import constant from '../constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};
const Chat = {
	getChat(state = initialState, action) {
		switch (action.type) {
			case constant.CHAT_PENDING:
				return { ...state, pending: true };
			case constant.CHAT_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.CHAT_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},
	postChat(state = initialState, action) {
		switch (action.type) {
			case constant.CREATE_CHAT_PENDING:
				return { ...state, pending: true };
			case constant.CREATE_CHAT_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.CREATE_CHAT_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},
	newMessage(state = initialState, action) {
		switch (action.type) {
			case constant.CHAT_NEW_MESSAGE:
				return { ...state, payload: action.payload, pending: false };
			default:
				return state;
		}
	},
	onlineUsers(state = initialState, action) {
		switch (action.type) {
			case constant.ONLINE_USERS:
				return { ...state, payload: action.payload, pending: false };
			default:
				return state;
		}
	},
};

export default Chat;
