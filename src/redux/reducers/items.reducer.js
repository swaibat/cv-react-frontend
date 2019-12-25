import constant from '../constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};

export const Items = (state = initialState, action) => {
	switch (action.type) {
		case constant.ITEMS_PENDING:
			return { ...state, pending: true };
		case constant.ITEMS_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.ITEMS_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};

export const CatItems = (state = initialState, action) => {
	switch (action.type) {
		case constant.ITEMS_PENDING:
			return { ...state, pending: true };
		case constant.ITEMS_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.ITEMS_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};

export const categories = (state = initialState, action) => {
	switch (action.type) {
		case constant.CATEGORY_PENDING:
			return { ...state, pending: true };
		case constant.CATEGORY_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.CATEGORY_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};
