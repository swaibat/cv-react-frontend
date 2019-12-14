import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

export class App extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path='/'>
						<center>
							<h1>welcome to cv-frontend</h1>
						</center>
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
