import { combineReducers } from 'redux';
import LoginReducer from './login.reducer';
import { Items, CatItems, categories } from './items.reducer';

const allReducers = combineReducers({
	LoginReducer,
	Items,
	CatItems,
	categories,
});

export default allReducers;
