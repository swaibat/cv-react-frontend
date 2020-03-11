import constant from '../../../../shared/redux/constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};
const Faq = {
	getFaq(state = initialState, action) {
		switch (action.type) {
			case constant.FAQ_PENDING:
				return { ...state, pending: true };
			case constant.FAQ_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.FAQ_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	createFaq(state = initialState, action) {
		switch (action.type) {
			case constant.CREATE_FAQ_PENDING:
				return { ...state, pending: true };
			case constant.CREATE_FAQ_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.CREATE_FAQ_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	deleteFaq(state = initialState, action) {
		switch (action.type) {
			case constant.DELETE_FAQ_PENDING:
				return { ...state, pending: true };
			case constant.DELETE_FAQ_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.DELETE_FAQ_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	updateFaq(state = initialState, action) {
		switch (action.type) {
			case constant.UPDATE_FAQ_PENDING:
				return { ...state, pending: true };
			case constant.UPDATE_FAQ_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.UPDATE_FAQ_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},
};

export default Faq;
