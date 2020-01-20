/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica, faBell } from '@fortawesome/free-solid-svg-icons';

function Nav() {
	return (
		<nav className='navbar navbar-dark bg-transparent w-100'>
			<ul className='navbar-nav mr-auto'>
				<li className='nav-item active'>
					<a className='nav-link text-white' href='#'>
						<span className='navbar-toggler-icon text-white'></span>
					</a>
				</li>
			</ul>
			<ul className='d-flex'>
				<li className='nav-item mx-3'>
					<a className='nav-link text-white' href='#' data-toggle='tooltip' data-placement='bottom' title='visit website'>
						<FontAwesomeIcon className='admin-nav-icons' icon={faGlobeAfrica} />
					</a>
				</li>
				<li className='nav-item mx-3'>
					<a className='nav-link text-white' href='#' data-toggle='tooltip' data-placement='bottom' title='Notifications'>
						<FontAwesomeIcon className='admin-nav-icons' icon={faBell} />
						<span className='badge badge-light mt-n2 ml-n1 position-absolute'>5</span>
					</a>
				</li>
				<li className='dropdown ml-3' data-toggle='tooltip' data-placement='bottom' title='Notifications'>
					<button className='btn bg-transparent text-white dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
						admin
					</button>
					<div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
						<a className='dropdown-item' href='#'>
							Action
						</a>
						<a className='dropdown-item' href='#'>
							Another action
						</a>
						<a className='dropdown-item' href='#'>
							Something else here
						</a>
					</div>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
