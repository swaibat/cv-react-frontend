import React from 'react';
import AdminApp from './backend';
import UserApp from './frontend';
import Token from '../App/shared/helper/index';

export class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				<AdminApp />
			</React.Fragment>
		);
	}
}

export default App;
