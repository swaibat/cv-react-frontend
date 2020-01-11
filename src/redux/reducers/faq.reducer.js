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
