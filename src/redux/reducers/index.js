import { combineReducers } from 'redux';
import LoginReducer from './login.reducer';
import RegisterReducer, { verifyUser } from './register.reducer';
import { Items, getProducts, CatItems, categories, singleItem, createItem, createCategory, updateCategory, deleteCategory } from './items.reducer';
import Settings from './settings.reducer';
import { GetFaq, createFaq, deleteFaq, updateFaq } from './faq.reducer';
import { GetAbout, createAbout, deleteAbout, updateAbout } from './about.reducer';
import { getPages, createPage, deletePage, updatePage } from './pages.reducer';
import { getUser, getUsers } from './user.reducer';
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
	createFaq,
	deleteFaq,
	getPages,
	updateFaq,
	createPage,
	deletePage,
	updatePage,
	GetAbout,
	createAbout,
	deleteAbout,
	updateAbout,
	getUser,
	getUsers,
});

export default allReducers;
