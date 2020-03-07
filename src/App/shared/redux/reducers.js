import { combineReducers } from 'redux';
import Auth from '../components/auth/redux/reducers';
import Products from '../../backend/components/products/redux/reducers';
import Category from '../../backend/components/categories/redux/reducers';
import Faq from '../../backend/components/faq/redux/reducers';
import Pages from '../../backend/components/pages/redux/reducers';
import Users from '../../backend/components/users/redux/reducers';
import Local from './locations/reducers';
import Settings from '../../backend/components/settings/redux/reducers';
import Favourite from '../../frontend/components/favourite/redux/reducers';
import Chat from '../redux/chat/reducers';

const allReducers = combineReducers({
	LoginReducer: Auth.login,
	Items: Products.products,
	CatItems: Products.getProductsByCategoty,
	GetCategories: Category.getCategories,
	singleItem: Products.getSingleProduct,
	GetFaq: Faq.getFaq,
	RegisterReducer: Auth.register,
	verifyUser: Auth.verifyUser,
	Logout: Auth.logout,
	createItem: Products.createProduct,
	createCategory: Category.createCategory,
	updateCategory: Category.updateCategory,
	deleteCategory: Category.deleteCategory,
	getProducts: Products.getProducts,
	createFaq: Faq.createFaq,
	deleteFaq: Faq.deleteFaq,
	getPages: Pages.getPages,
	updateFaq: Faq.updateFaq,
	createPage: Pages.createPage,
	deletePage: Pages.deletePage,
	updatePage: Pages.updatePage,
	getUser: Users.getUser,
	getUsers: Users.getUsers,
	getIp: Local.ip,
	GetCurrency: Local.GetCurrency,
	updateCurrency: Local.updateCurrency,
	GetSettings: Settings.getSettings,
	updateSettings: Settings.updateSettings,
	clentInfo: Local.clentInfo,
	verifyUserCode: Auth.verifyUserCode,
	AddToFavourite: Favourite.addToFavourite,
	ViewFavourite: Favourite.viewFavourite,
	RemoveFavourite: Favourite.removeFavourite,
	GetChat: Chat.getChat,
	PostChat: Chat.postChat,
	NewMessage: Chat.newMessage,
	UpdateItem: Products.updateProduct,
	OnlineUsers: Chat.onlineUsers,
});

export default allReducers;
