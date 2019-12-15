import { combineReducers } from 'redux';
import LoginReducer from './login.reducer';
import Items from './items.reducer';

const allReducers = combineReducers({
	LoginReducer,
	Items,
});

export default allReducers;
