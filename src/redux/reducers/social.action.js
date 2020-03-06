import constant from '../constants';

const initialState = {
	user: {},
	error: '',
	isLoggedIn: false,
};
const FacebookLoginReducer = (state = initialState, action) => {
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
};
export default FacebookLoginReducer;
