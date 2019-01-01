/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Vehicle from './vehicles.nav';
import Others from './others.nav';

class Filter extends Component {
	render() {
		const { data } = this.props;
		return (
			<ul className='navbar-nav mr-auto sidenav pl-0' id='navAccordion'>
				{data && data.match('vehicle') && <Vehicle />}
				{data && data.match(/hone/g) && <Others />}
			</ul>
		);
	}
}

export default Filter;
