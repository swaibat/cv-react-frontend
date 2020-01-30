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
import Category from './Pages/admin/categories.page';
import AdminProducts from './Pages/admin/products.list.page';
import countries from './Pages/admin/main';
import settings from './Pages/admin/Settings.page';
import Pages from './Pages/admin/pages.page';
import About from './Pages/admin/about.page';
import Chat from './Pages/admin/chat.page';
import ResetPassword from './Pages/reset.password.page';
import ConfirmReset from './Pages/password.confirm';
import Contact from './Pages/contact.page';
import token from '../helper/index';

export class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/' component={Landing} />
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
					{/* 

					admin routes

					*/}
					{token().roleId === 1 ? (
						<>
							<Route exact path='/user/dashboard' component={Dashboard} />
							<Route exact path='/user/products/create' component={CreateProduct} />
							<Route exact path='/user/category' component={Category} />
							<Route exact path='/user/products' component={AdminProducts} />
							<Route exact path='/user/countries' component={countries} />
							<Route exact path='/user/settings' component={settings} />
							<Route exact path='/user/faq' component={FaqList} />
							<Route exact path='/user/pages' component={Pages} />
							<Route exact path='/user/about' component={About} />
							<Route exact path='/user/chat' component={Chat} />
						</>
					) : (
						''
					)}

					<Route path='*' component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;
