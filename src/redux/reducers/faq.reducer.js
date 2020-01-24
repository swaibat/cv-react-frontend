import constant from '../constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};

export const GetFaq = (state = initialState, action) => {
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
};

export const createFaq = (state = initialState, action) => {
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
};

export const deleteFaq = (state = initialState, action) => {
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
};

export const updateFaq = (state = initialState, action) => {
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
};
