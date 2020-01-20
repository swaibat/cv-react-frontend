import { combineReducers } from 'redux';
import LoginReducer from './login.reducer';
import RegisterReducer, { verifyUser } from './register.reducer';
import { Items, getProducts, CatItems, categories, singleItem, createItem, createCategory, updateCategory, deleteCategory } from './items.reducer';
import Settings from './settings.reducer';
import { GetFaq } from './faq.reducer';
import Logout from './logout.reducer';
import products from './pagination.reducer';

const allReducers = combineReducers({
	LoginReducer,
	Items,
	CatItems,
	categories,
	singleItem,
	GetFaq,
	RegisterReducer,
	verifyUser,
	Logout,
	createItem,
	createCategory,
	updateCategory,
	deleteCategory,
	getProducts,
	products,
	Settings,
});

export default allReducers;
