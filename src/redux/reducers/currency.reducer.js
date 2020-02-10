import constant from '../constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};

export const GetCurrency = (state = initialState, action) => {
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
};

export const updateCurrency = (state = initialState, action) => {
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
};
