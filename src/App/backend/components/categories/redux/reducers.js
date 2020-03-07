import constant from '../../../../shared/redux/constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};
const Category = {
	getCategories(state = initialState, action) {
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
	},

	createCategory(state = initialState, action) {
		switch (action.type) {
			case constant.CREATE_CATEGORY_PENDING:
				return { ...state, pending: true };
			case constant.CREATE_CATEGORY_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.CREATE_CATEGORY_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	updateCategory(state = initialState, action) {
		switch (action.type) {
			case constant.UPDATE_CATEGORY_PENDING:
				return { ...state, pending: true };
			case constant.UPDATE_CATEGORY_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.UPDATE_CATEGORY_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	deleteCategory(state = initialState, action) {
		switch (action.type) {
			case constant.DELETE_CATEGORY_PENDING:
				return { ...state, pending: true };
			case constant.DELETE_CATEGORY_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.DELETE_CATEGORY_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},
};

export default Category;
