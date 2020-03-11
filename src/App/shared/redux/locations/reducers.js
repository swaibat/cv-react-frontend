import constant from '../constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};

const Local = {
	clentInfo(state = initialState, action) {
		switch (action.type) {
			case constant.CLIENT_INFO_PENDING:
				return { ...state, pending: true };
			case constant.CLIENT_INFO_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.CLIENT_INFO_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	GetCurrency(state = initialState, action) {
		switch (action.type) {
			case constant.CURRENCY_PENDING:
				return { ...state, pending: true };
			case constant.CURRENCY_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.CURRENCY_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	updateCurrency(state = initialState, action) {
		switch (action.type) {
			case constant.UPDATE_CURRENCY_PENDING:
				return { ...state, pending: true };
			case constant.UPDATE_CURRENCY_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.UPDATE_CURRENCY_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	ip(state = initialState, action) {
		switch (action.type) {
			case constant.IP_PENDING:
				return { ...state, pending: true };
			case constant.IP_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.IP_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},
};

export default Local;
