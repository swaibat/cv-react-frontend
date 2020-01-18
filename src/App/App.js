import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Pages';
import Login from './Pages/login';
import Register from './Pages/register.page';
// import Header from './Components/Header';
import Footer from './Components/Footer';
import Items from './Pages/items.page';
import CategoryItems from './Pages/category.item';
import singleItem from './Pages/single.item';
import NotFound from './Pages/404.page';
import Faq from './Pages/faq.page';
import VerifyUser from './Pages/verify.user.page';
import Dashboard from './Pages/admin/dashboard.page';
import CreateProduct from './Pages/admin/create.product.page';

export class App extends React.Component {
	render() {
		return (
			<Router>
				{/* <Header /> */}
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
					{/* 

					admin routes

					*/}
					<Route exact path='/admin/dashboard' component={Dashboard} />
					<Route exact path='/admin/products/create' component={CreateProduct} />
					<Route path='*' component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		);
	}
}

export default App;
