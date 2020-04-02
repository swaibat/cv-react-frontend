import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FaqList from './components/faq/faqs.list.page';
import Dashboard from './components/dashboard/dashboard.page';
import CreateProduct from './components/products/product.create';
import EditProduct from './components/products/product.edit';
import Category from './components/categories/categories.page';
import AdminProducts from './components/products/products';
import settings from './components/settings/settings.page';
import Pages from './components/pages/pages';
import Chat from './components/chat/chat.page';
import { token } from '../shared/helper/index';
import Users from './components/users/users.page';
import Orders from './components/orders';
import Pricing from './components/pricing';
import { initializeSocketIo } from '../shared/helper/socket.io';
import { toast } from 'react-toastify';
import AdminWrapper from './components/navigation';

toast.configure();
export class App extends React.Component {
	componentDidMount() {
		initializeSocketIo(token);
	}
	render() {
		return (
			<Router>
				<AdminWrapper.Sidenav />
				<div className='header-bg' />
				<main className='content-wrapper d-flex flex-column align-items-center min-h-display mb-5'>
					<AdminWrapper.TopNav />
					<div className='container-fluid'>
						<Switch>
							<Route exact path='/admin/dashboard' component={Dashboard} />
							<Route exact path='/admin/products/create' component={CreateProduct} />
							<Route exact path='/admin/products/:id/edit' component={EditProduct} />
							<Route exact path='/admin/category' component={Category} />
							<Route exact path='/admin/products' component={AdminProducts} />
							<Route exact path='/admin/pages/faq' component={FaqList} />
							<Route exact path='/admin/pages/webpages' component={Pages} />
							<Route exact path='/admin/pages/vendorspages' component={Pages} />
							<Route exact path='/admin/apps/chat' component={Chat} />
							<Route exact path='/admin/users' component={Users} />
							<Route exact path='/admin/orders' component={Orders} />
							{/* <Route exact path='/admin/pricing' component={Pricing} /> */}
							<Route exact path='/admin/settings/website' component={settings} />
							<Route exact path='/admin/settings/payments' component={settings} />
							<Route exact path='/admin/settings/intergrations' component={settings} />
							<Route exact path='/admin/settings/seo' component={settings} />
							<Route exact path='/admin/user/add' component={settings} />
						</Switch>
					</div>
				</main>
			</Router>
		);
	}
}

export default App;
