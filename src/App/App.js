import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './frontend/components/landing';
import Login from './shared/components/auth/login';
import Register from './shared/components/auth/register.page';
import Items from './frontend/components/products/items.page';
import CategoryItems from './frontend/components/products/category.item';
import singleItem from './frontend/components/products/single.item';
import NotFound from './shared/components/404/404.page';
import Faq from './frontend/components/faq/faq.page';
import FaqList from './backend/components/faq/faqs.list.page';
import VerifyUser from './shared/components/auth/verify.user.page';
import Dashboard from './backend/components/dashboard/dashboard.page';
import CreateProduct from './backend/components/products/product.create';
import EditProduct from './backend/components/products/product.edit';
import Category from './backend/components/categories/categories.page';
import AdminProducts from './backend/components/products/products';
import settings from './backend/components/settings/settings.page';
import Pages from './backend/components/pages/pages';
// import About from './backend/components/about/about.page';
import Chat from './backend/components/chat/chat.page';
import ResetPassword from './shared/components/auth/reset.password.page';
import ConfirmReset from './shared/components/auth/password.confirm';
import Contact from './frontend/components/contact/contact.page';
import Token, { token } from '../App/shared/helper/index';
import Users from './backend/components/users/users.page';
import Profile from './frontend/components/profile/profile.page';
import { initializeSocketIo } from '../App/shared/helper/socket.io';
import { toast } from 'react-toastify';

toast.configure();
export class App extends React.Component {
	componentDidMount() {
		initializeSocketIo(token);
	}
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' render={props => <Landing {...props} session={true} />} />
					<Route exact path='/login' component={Login} />
					<Route exact path='/register/:token' component={Register} />
					<Route exact path='/verify' component={VerifyUser} />
					<Route exact path='/products' component={Items} />
					<Route exact path='/category/:name' component={CategoryItems} />
					<Route exact path='/category/:name/:sub' component={CategoryItems} />
					<Route exact path='/products/:name' component={singleItem} />
					<Route exact path='/faq' component={Faq} />
					<Route exact path='/reset-password' component={ResetPassword} />
					<Route exact path='/confirm-reset/:token' component={ConfirmReset} />
					<Route exact path='/contact' component={Contact} />
					<Route exact path='/profile' component={Profile} />
					{/* 

					admin routes

					*/}
					{Token().role === 'admin' && (
						<>
							<Route exact path='/admin/dashboard' component={Dashboard} />
							<Route exact path='/admin/products/create' component={CreateProduct} />
							<Route exact path='/admin/products/:id/edit' component={EditProduct} />
							<Route exact path='/admin/category' component={Category} />
							<Route exact path='/admin/products' component={AdminProducts} />
							<Route exact path='/admin/settings' component={settings} />
							<Route exact path='/admin/pages/faq' component={FaqList} />
							<Route exact path='/admin/pages' component={Pages} />
							{/* <Route exact path='/admin/pages/about' component={About} /> */}
							<Route exact path='/admin/chat' component={Chat} />
							<Route exact path='/admin/users' component={Users} />
						</>
					)}

					<Route path='*' component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;
