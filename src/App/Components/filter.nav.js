/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import Vehicle from './vehicles.nav';
import Others from './others.nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

class Filter extends Component {
	render() {
		const { data } = this.props;
		return (
			<div className='d-flex flex-column'>
				<ul className='navbar-nav mr-auto sidenav p-2 sidenav-filter bg-white shadow-xs rounded h-auto mb-2' id='navAccordion'>
					<li className='nav-item mb-3 text-secondary'>
						<a
							className='nav-link nav-link-collapse border-bottom text-secondary text-white d-flex justify-content-between px-2 rounded'
							href='#'
							id='hasSubItems'
							data-toggle='collapse'
							data-target='#collapseSubItems3'
							aria-controls='collapseSubItems3'
							aria-expanded='true'
						>
							My WishList
							<span>
								<FontAwesomeIcon icon={faShoppingCart} />
							</span>
						</a>
						<ul className='nav-second-level text-center collapse show bg-light rounded p-2 mt-2' id='collapseSubItems3'>
							<p>No favourite Items</p>
							<FontAwesomeIcon icon={faShoppingCart} />
						</ul>
					</li>
				</ul>
				<ul className='navbar-nav mr-auto sidenav p-2 sidenav-filter bg-white shadow-xs rounded h-auto' id='navAccordion'>
					{data && data.match('vehicle') && <Vehicle />}
					{data && data.match(/hone/g) && <Others />}
				</ul>
			</div>
		);
	}
}

export default Filter;
