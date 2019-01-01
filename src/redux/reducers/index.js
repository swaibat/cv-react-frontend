import { combineReducers } from 'redux';
import LoginReducer from './login.reducer';
import { Items, CatItems, categories, singleItem } from './items.reducer';

const allReducers = combineReducers({
	LoginReducer,
	Items,
	CatItems,
	categories,
	singleItem,
});

export default allReducers;
