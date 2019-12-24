import { combineReducers } from 'redux';
import LoginReducer from './login.reducer';
import { Items, CatItems } from './items.reducer';

const allReducers = combineReducers({
	LoginReducer,
	Items,
	CatItems,
});

export default allReducers;
