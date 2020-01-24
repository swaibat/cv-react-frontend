import constant from '../constants';

export function fetchDataRequest() {
	return {
		type: constant.FETCH_DATA_REQUEST,
	};
}

export function fetchDataSuccess(allCountries) {
	return {
		type: constant.FETCH_DATA_SUCCESS,
		allCountries,
	};
}

export function fetchDataError(error) {
	return {
		type: constant.FETCH_DATA_ERROR,
		error,
	};
}

export function onPageChangedAction(currentPage) {
	return {
		type: constant.ON_PAGE_CHANGED_ACTION,
		currentPage,
	};
}

export function changePageLimit(pageLimit) {
	return {
		type: constant.CHANGE_PAGE_LIMIT,
		pageLimit,
	};
}
