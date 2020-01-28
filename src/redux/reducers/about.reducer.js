import constant from '../constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};

export const GetAbout = (state = initialState, action) => {
	switch (action.type) {
		case constant.ABOUT_PENDING:
			return { ...state, pending: true };
		case constant.ABOUT_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.ABOUT_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};

export const createAbout = (state = initialState, action) => {
	switch (action.type) {
		case constant.CREATE_ABOUT_PENDING:
			return { ...state, pending: true };
		case constant.CREATE_ABOUT_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.CREATE_ABOUT_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};

export const deleteAbout = (state = initialState, action) => {
	switch (action.type) {
		case constant.DELETE_ABOUT_PENDING:
			return { ...state, pending: true };
		case constant.DELETE_ABOUT_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.DELETE_ABOUT_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};

export const updateAbout = (state = initialState, action) => {
	switch (action.type) {
		case constant.UPDATE_ABOUT_PENDING:
			return { ...state, pending: true };
		case constant.UPDATE_ABOUT_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.UPDATE_ABOUT_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};
