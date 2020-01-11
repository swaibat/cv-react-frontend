import { combineReducers } from 'redux';
import LoginReducer from './login.reducer';
import { Items, CatItems, categories, singleItem } from './items.reducer';
import { GetFaq } from './faq.reducer';

const allReducers = combineReducers({
	LoginReducer,
	Items,
	CatItems,
	categories,
	singleItem,
	GetFaq,
});

export default allReducers;
