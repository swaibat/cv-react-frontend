import constant from '../../../../shared/redux/constants';
import Api from '../../../../shared/Api';
import { toast } from 'react-toastify';

const Favourite = {
	async addToFavourite(id, token) {
		try {
			const result = await Api.addToFavourite(id, token);
			return { type: constant.ADD_FAVOURITE_SUCCESS, payload: result.data };
		} catch (error) {
			toast.error(error.response.data.message);
			return { type: constant.ADD_FAVOURITE_ERROR, error: error.response.data };
		}
	},

	async viewFavourite(token) {
		try {
			const result = await Api.viewFavourite(token);
			return { type: constant.VIEW_FAVOURITE_SUCCESS, payload: result.data };
		} catch (error) {
			return { type: constant.VIEW_FAVOURITE_ERROR, error: error.response.data };
		}
	},

	async removeFavourite(id, token) {
		try {
			const result = await Api.removeFavourite(id, token);
			return { type: constant.REMOVE_FAVOURITE_SUCCESS, payload: result.data };
		} catch (error) {
			toast.error(error.response.data.message);
			return { type: constant.REMOVE_FAVOURITE_ERROR, error: error.response.data };
		}
	},
};

export default Favourite;
