import { combineReducers } from 'redux';
import LoginReducer from './login.reducer';

const allReducers = combineReducers({
	LoginReducer,
});

export default allReducers;
