import constant from '../constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};

export default (state = initialState, action) => {
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
};
