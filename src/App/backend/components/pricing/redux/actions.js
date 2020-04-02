// import constant from '../../../../shared/redux/constants';
// import Api from '../../../../shared/Api';
// import { toast } from 'react-toastify';

// const Plans = {
// 	async createPlan(data, token) {
// 		try {
// 			const result = await Api.createplan(data, token);
// 			toast.success(result.data.message);
// 			return { type: constant.CREATE_PLAN_SUCCESS, payload: result.data };
// 		} catch (error) {
// 			toast.error(error.response.data.message);
// 			return { type: constant.CREATE_PLAN_ERROR, error: error.response.data };
// 		}
// 	},

// 	async updatePlan(data, token, id) {
// 		try {
// 			const result = await Api.updatePlan(data, token, id);
// 			toast.success(result.data.message);
// 			return { type: constant.UPDATE_PLAN_SUCCESS, payload: result.data };
// 		} catch (error) {
// 			toast.error(error.response.data.message);
// 			return { type: constant.UPDATE_PLAN_ERROR, error: error.response.data };
// 		}
// 	},

// 	async getPlan() {
// 		try {
// 			const result = await Api.getPlan();
// 			return { type: constant.GET_PLAN_SUCCESS, payload: result.data };
// 		} catch (error) {
// 			return { type: constant.GET_PLAN_ERROR, error: error.response.data };
// 		}
// 	},
// };

// export default Plans;
