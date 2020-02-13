import constant from '../constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};

export const clentInfo = (state = initialState, action) => {
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
};
