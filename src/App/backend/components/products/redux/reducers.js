import constant from '../../../../shared/redux/constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};

const Product = {
	products(state = initialState, action) {
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
	},

	getProducts(state = initialState, action) {
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
	},

	getProductsByCategoty(state = initialState, action) {
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
	},

	getSingleProduct(state = initialState, action) {
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
	},

	createProduct(state = initialState, action) {
		switch (action.type) {
			case constant.CREATE_PRODUCT_PENDING:
				return { ...state, pending: true };
			case constant.CREATE_PRODUCT_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.CREATE_PRODUCT_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	updateProduct(state = initialState, action) {
		switch (action.type) {
			case constant.UPDATE_PRODUCT_PENDING:
				return { ...state, pending: true };
			case constant.UPDATE_PRODUCT_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.UPDATE_PRODUCT_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	deleteProduct(state = initialState, action) {
		switch (action.type) {
			case constant.DELETE_PRODUCT_PENDING:
				return { ...state, pending: true };
			case constant.DELETE_PRODUCT_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.DELETE_PRODUCT_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},
};

export default Product;
