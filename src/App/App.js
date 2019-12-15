import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Pages';
import Header from './Components/Header';
import Footer from './Components/Footer';

export class App extends React.Component {
	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route exact path='/' component={Landing} />
				</Switch>
				<Footer />
			</Router>
		);
	}
}

export default App;
