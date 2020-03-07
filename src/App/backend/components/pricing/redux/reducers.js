import constant from '../../../../shared/redux/constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};

const Plan = {
	getPlans(state = initialState, action) {
		switch (action.type) {
			case constant.GET_PLANS_PENDING:
				return { ...state, pending: true };
			case constant.GET_PLANS_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.GET_PLANS_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	createPlan(state = initialState, action) {
		switch (action.type) {
			case constant.CREATE_PLAN_PENDING:
				return { ...state, pending: true };
			case constant.CREATE_PLAN_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.CREATE_PLAN_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	editPlan(state = initialState, action) {
		switch (action.type) {
			case constant.EDIT_PLAN_PENDING:
				return { ...state, pending: true };
			case constant.EDIT_PLAN_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.EDIT_PLAN_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},

	deletePlan(state = initialState, action) {
		switch (action.type) {
			case constant.DELETE_PLAN_PENDING:
				return { ...state, pending: true };
			case constant.DELETE_PLAN_SUCCESS:
				return { ...state, payload: action.payload, pending: false };
			case constant.DELETE_PLAN_ERROR:
				return { ...state, error: action.error, pending: false };
			default:
				return state;
		}
	},
};

export default Plan;
