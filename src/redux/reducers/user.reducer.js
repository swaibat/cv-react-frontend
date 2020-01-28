import constant from '../constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};

export const getUser = (state = initialState, action) => {
	switch (action.type) {
		case constant.USER_PENDING:
			return { ...state, pending: true };
		case constant.USER_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.USER_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};