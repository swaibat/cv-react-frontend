import React from 'react';
import AdminApp from './backend';
import UserApp from './frontend';
import Token from '../App/shared/helper/index';

export class App extends React.Component {
	render() {
		return (
			<React.Fragment>
				{!window.location.pathname.match('admin') && <UserApp />}
				{Token().role && Token().role.match('admin') && window.location.pathname.match('admin') && (
					<AdminApp />
				)}
			</React.Fragment>
		);
	}
}

export default App;
