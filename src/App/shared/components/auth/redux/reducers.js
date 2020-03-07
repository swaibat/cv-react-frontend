import constant from '../../../redux/constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};

const Auth = {
	login(state = initialState, action) {
		switch (action.type) {
			case constant.LOGIN_PENDING:
				return { ...state, pending: true };
			case constant.LOGIN_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.LOGIN_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	logout(state = initialState, action) {
		switch (action.type) {
			case constant.LOGOUT_SUCCESS:
				return {
					...state,
					pending: false,
					payload: action.payload,
				};
			case constant.LOGOUT_PENDING:
				return {
					...state,
					pending: true,
					payload: null,
				};
			default:
				return state;
		}
	},

	register(state = initialState, action) {
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
	},

	verifyUser(state = initialState, action) {
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
	},
	deleteUser(state = initialState, action) {
		switch (action.type) {
			case constant.DELETE_USER_PENDING:
				return { ...state, pending: true };
			case constant.DELETE_USER_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.DELETE_USER_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	verifyUserCode(state = initialState, action) {
		switch (action.type) {
			case constant.VERIFY_CODE_PENDING:
				return { ...state, pending: true };
			case constant.VERIFY_CODE_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.VERIFY_CODE_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	FacebookLoginReducer(state = initialState, action) {
		switch (action.type) {
			case constant.FACEBOOK_LOGIN_SUCCESS:
				return {
					...state,
					user: action.payload,
					isLoggedIn: true,
				};
			case constant.FACEBOOKL_LOGIN_ERROR:
				return {
					...state,
					error: action.payload,
					isLoggedIn: false,
				};
			default:
				return state;
		}
	},
};

export default Auth;
