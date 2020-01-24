let initialState = {
	allCountries: [],
	currentCountries: [],
	currentPage: 1,
	error: null,
	loading: false,
	offset: 0,
	pageLimit: 20,
	pageNeighbours: 1,
	totalCountries: 0,
	totalPages: null,
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case 'FETCH_DATA_REQUEST':
			return {
				...state,
				loading: true,
				error: null,
			};
		case 'FETCH_DATA_SUCCESS':
			return {
				...state,
				loading: false,
				allCountries: action.allCountries,
				totalCountries: action.allCountries.length,
				totalPages: Math.ceil(action.allCountries.length / state.pageLimit),
				currentCountries: action.allCountries.slice(state.offset, state.offset + state.pageLimit),
			};
		case 'FETCH_DATA_ERROR':
			return {
				...state,
				loading: false,
				error: action.error,
				item: [],
			};
		case 'ON_PAGE_CHANGED_ACTION':
			const tempOffset = (action.currentPage - 1) * state.pageLimit;
			const tempCurrentCountries = state.allCountries.slice(tempOffset, tempOffset + state.pageLimit);
			return {
				...state,
				currentPage: action.currentPage,
				currentCountries: tempCurrentCountries,
				offset: tempOffset,
			};
		case 'CHANGE_PAGE_LIMIT':
			return {
				...state,
				pageLimit: action.pageLimit,
				totalPages: Math.ceil(state.allCountries.length / action.pageLimit),
				currentCountries: state.allCountries.slice(state.offset, state.offset + action.pageLimit),
			};
		default:
			return state;
	}
}

export default reducer;
