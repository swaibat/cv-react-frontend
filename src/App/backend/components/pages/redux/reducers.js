import constant from '../../../../shared/redux/constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};
const Page = {
	getPages(state = initialState, action) {
		switch (action.type) {
			case constant.PAGES_PENDING:
				return { ...state, pending: true };
			case constant.PAGES_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.PAGES_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	createPage(state = initialState, action) {
		switch (action.type) {
			case constant.CREATE_PAGE_PENDING:
				return { ...state, pending: true };
			case constant.CREATE_PAGE_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.CREATE_PAGE_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	deletePage(state = initialState, action) {
		switch (action.type) {
			case constant.DELETE_PAGE_PENDING:
				return { ...state, pending: true };
			case constant.DELETE_PAGE_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.DELETE_PAGE_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	updatePage(state = initialState, action) {
		switch (action.type) {
			case constant.UPDATE_PAGE_PENDING:
				return { ...state, pending: true };
			case constant.UPDATE_PAGE_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.UPDATE_PAGE_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},
};

export default Page;
