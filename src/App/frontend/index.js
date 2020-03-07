import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './components/landing';
import Login from '../shared/components/auth/login';
import Register from '../shared/components/auth/register.page';
import Items from './components/products/items.page';
import CategoryItems from './components/products/category.item';
import singleItem from './components/products/single.item';
import NotFound from '../shared/components/404/404.page';
import Faq from './components/faq/faq.page';
import VerifyUser from '../shared/components/auth/verify.user.page';
import ResetPassword from '../shared/components/auth/reset.password.page';
import ConfirmReset from '../shared/components/auth/password.confirm';
import Contact from './components/contact/contact.page';
import { token } from '../shared/helper/index';
import Profile from './components/profile/profile.page';
import { initializeSocketIo } from '../shared/helper/socket.io';
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
					<Route path='*' component={NotFound} />
				</Switch>
			</Router>
		);
	}
}

export default App;
