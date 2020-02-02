import constant from '../constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};

export const Items = (state = initialState, action) => {
	switch (action.type) {
		case constant.ITEMS_PENDING:
			return { ...state, pending: true };
		case constant.ITEMS_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.ITEMS_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};

export const getProducts = (state = initialState, action) => {
	switch (action.type) {
		case constant.PRODUCTS_PENDING:
			return { ...state, pending: true };
		case constant.PRODUCTS_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.PRODUCTS_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};

export const CatItems = (state = initialState, action) => {
	switch (action.type) {
		case constant.ITEMS_PENDING:
			return { ...state, pending: true };
		case constant.ITEMS_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.ITEMS_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};

export const categories = (state = initialState, action) => {
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
};

export const singleItem = (state = initialState, action) => {
	switch (action.type) {
		case constant.SINGLE_PENDING:
			return { ...state, pending: true };
		case constant.SINGLE_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.SINGLE_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};

export const createItem = (state = initialState, action) => {
	switch (action.type) {
		case constant.CREATE_ITEM_PENDING:
			return { ...state, pending: true };
		case constant.CREATE_ITEM_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.CREATE_ITEM_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};
export const createCategory = (state = initialState, action) => {
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
};

export const updateCategory = (state = initialState, action) => {
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
};

export const deleteCategory = (state = initialState, action) => {
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
};
