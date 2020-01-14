import constant from '../constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case constant.REGISTER_PENDING:
			return { ...state, pending: true };
		case constant.REGISTER_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.REGISTER_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};

export const verifyUser = (state = initialState, action) => {
	switch (action.type) {
		case constant.VERIFY_PENDING:
			return { ...state, pending: true };
		case constant.VERIFY_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.VERIFY_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};
