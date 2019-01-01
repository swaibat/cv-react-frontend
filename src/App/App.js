import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Pages';
import Login from './Pages/login';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Items from './Pages/items.page';
import CategoryItems from './Pages/category.item';
import singleItem from './Pages/single.item';

export class App extends React.Component {
	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route exact path='/' component={Landing} />
				</Switch>
				<Switch>
					<Route exact path='/login' component={Login} />
				</Switch>
				<Switch>
					<Route exact path='/products' component={Items} />
				</Switch>
				<Switch>
					<Route exact path='/category/:name' component={CategoryItems} />
				</Switch>
				<Switch>
					<Route exact path='/category/:name/:sub' component={CategoryItems} />
				</Switch>
				<Switch>
					<Route exact path='/products/:name' component={singleItem} />
				</Switch>
				<Footer />
			</Router>
		);
	}
}

export default App;
