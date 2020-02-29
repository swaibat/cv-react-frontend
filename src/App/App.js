import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Pages';
import Login from './Pages/login';
import Register from './Pages/register.page';
import Items from './Pages/items.page';
import CategoryItems from './Pages/category.item';
import singleItem from './Pages/single.item';
import NotFound from './Pages/404.page';
import Faq from './Pages/faq.page';
import FaqList from './Pages/admin/faqs.list.page';
import VerifyUser from './Pages/verify.user.page';
import Dashboard from './Pages/admin/dashboard.page';
import CreateProduct from './Pages/admin/create.product.page';
import EditProduct from './components/products/product.edit';
import Category from './Pages/admin/categories.page';
import AdminProducts from './Pages/admin/products.list.page';
import settings from './Pages/admin/Settings.page';
import Pages from './Pages/admin/pages.page';
import About from './Pages/admin/about.page';
import Chat from './Pages/admin/chat.page';
import ResetPassword from './Pages/reset.password.page';
import ConfirmReset from './Pages/password.confirm';
import Contact from './Pages/contact.page';
import Token, { token } from '../helper/index';
import Users from './Pages/admin/users.page';
import Profile from './Pages/profile.page';
import { initializeSocketIo } from '../helper/socket.io';
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
							<Route exact path='/products/:id/edit' component={EditProduct} />
							<Route exact path='/admin/category' component={Category} />
							<Route exact path='/admin/products' component={AdminProducts} />
							<Route exact path='/admin/settings' component={settings} />
							<Route exact path='/admin/pages/faq' component={FaqList} />
							<Route exact path='/admin/pages' component={Pages} />
							<Route exact path='/admin/pages/about' component={About} />
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
