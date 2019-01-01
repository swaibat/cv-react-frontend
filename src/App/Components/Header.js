/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/images/logo.svg';
import Category from './categories.nav';

class Header extends Component {
	render() {
		console.log(this);
		return (
			<>
				<nav className='navbar navbar-expand-lg navbar-sm-dark  navbar-dark bg-primary shadow-lr-sm'>
					<a className='navbar-brand p-0' href='/'>
						<img src={Logo} alt='logo' />
					</a>
					<button className='navbar-toggler rounded-sm' type='button' data-toggle='collapse' data-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse ' id='navbarCollapse'>
						<div className='d-flex ml-auto mt-2 mt-md-0'>
							<button className='btn btn-light my-2 mx-4 my-sm-0 btn-sm' type='submit'>
								<span className='mr-2'>
									<FontAwesomeIcon icon={faPlus} />
								</span>
								Advert
							</button>
							<div className='btn-group' role='group' aria-label='Basic example'>
								<a href='/register' type='button' className='btn btn-sm btn-outline-light'>
									signup
								</a>
								<a href='/login' type='button' className='btn btn-sm btn-light'>
									Login
								</a>
							</div>
						</div>
					</div>
				</nav>
				<Category />
			</>
		);
	}
}

export default Header;
