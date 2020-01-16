import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import NotFound from './Pages/404.page';
import Dashboard from './Pages/admin/dashboard.page';

export class App extends React.Component {
	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route exact path='/admin/dashboard' component={Dashboard} />
					<Route path='*' component={NotFound} />
				</Switch>
				<Footer />
			</Router>
		);
	}
}

export default App;
