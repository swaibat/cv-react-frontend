import constant from '../constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};

const Favourite = {
	addToFavourite(state = initialState, action) {
		switch (action.type) {
			case constant.ADD_FAVOURITE_PENDING:
				return { ...state, pending: true };
			case constant.ADD_FAVOURITE_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.ADD_FAVOURITE_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	viewFavourite(state = initialState, action) {
		switch (action.type) {
			case constant.VIEW_FAVOURITE_PENDING:
				return { ...state, pending: true };
			case constant.VIEW_FAVOURITE_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.VIEW_FAVOURITE_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	removeFavourite(state = initialState, action) {
		switch (action.type) {
			case constant.REMOVE_FAVOURITE_PENDING:
				return { ...state, pending: true };
			case constant.REMOVE_FAVOURITE_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.REMOVE_FAVOURITE_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},
};

export default Favourite;
