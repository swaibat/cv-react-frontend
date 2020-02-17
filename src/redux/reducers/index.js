import { combineReducers } from 'redux';
import LoginReducer from './login.reducer';
import RegisterReducer, { verifyUser, verifyUserCode } from './register.reducer';
import { Items, getProducts, CatItems, categories, singleItem, createItem, createCategory, updateCategory, deleteCategory } from './items.reducer';
import { GetFaq, createFaq, deleteFaq, updateFaq } from './faq.reducer';
import { GetAbout, createAbout, deleteAbout, updateAbout } from './about.reducer';
import { getPages, createPage, deletePage, updatePage } from './pages.reducer';
import { getUser, getUsers } from './user.reducer';
import { GetCurrency, updateCurrency } from './currency.reducer';
import { GetSettings, updateSettings } from './settings.reducer';
import getIp from './ip.reducer';
import Logout from './logout.reducer';
import products from './pagination.reducer';
import { clentInfo } from './country.info.reducer';
import Favourite from './favourite.reducer';
import Chat from './chat.reducer';

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
	getIp,
	GetCurrency,
	updateCurrency,
	GetSettings,
	updateSettings,
	clentInfo,
	verifyUserCode,
	AddToFavourite: Favourite.addToFavourite,
	ViewFavourite: Favourite.viewFavourite,
	RemoveFavourite: Favourite.removeFavourite,
	GetChat: Chat.getChat,
	PostChat: Chat.postChat,
});

export default allReducers;
