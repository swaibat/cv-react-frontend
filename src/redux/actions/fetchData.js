import axios from 'axios';
import { fetchDataRequest, fetchDataSuccess, fetchDataError } from './pagination.action';

export function fetchProducts() {
	return dispatch => {
		dispatch(fetchDataRequest());
		axios
			.get('https://restcountries.eu/rest/v2/all')
			.then(response => {
				dispatch(fetchDataSuccess(response.data));
			})
			.catch(error => {
				dispatch(fetchDataError(error));
			});
	};
}
