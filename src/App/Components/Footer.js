import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Favourite from './favourite.component';

class Footer extends Component {
	render() {
		return (
			<>
				<Favourite />
				<footer className='footer bg-dark pt-0'>
					<div className='container'>
						<div className='row d-flex justify-content-between py-2'>
							<div className='col-md-3 col-6'>
								<p className='cv-title'>Contact</p>
								<ul className='nav flex-column'>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											+(256)-758-307272
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											admin@biz.ug
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											zainab aziz emporium
										</a>
									</li>
								</ul>
							</div>
							<div className='col-md-3 col-6'>
								<p className='cv-title'>policies & info</p>
								<ul className='nav flex-column'>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											Terms Conditions
										</a>
									</li>
									<li className='nav-item '>
										<a className='nav-link p-1' href='/'>
											Policy for Sellers
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											Policy for buyers
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											Wholesale Policy
										</a>
									</li>
								</ul>
							</div>
							<div className='col-md-3  col-6'>
								<p className='cv-title'>policies & info</p>
								<ul className='nav flex-column'>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											Seller Login
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											Seller Sign up
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											Seller Handbook
										</a>
									</li>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											Panel Seller FAQs
										</a>
									</li>
								</ul>
							</div>
							<div className='col-md-3  col-6'>
								<p className='cv-title'>subscribe</p>
								<ul className='nav flex-column'>
									<li className='nav-item'>
										<a className='nav-link p-1' href='/'>
											subscribe to our newsletter for the latest updates
										</a>
									</li>
									<li className='nav-item'>
										<input type='text' className='form-control' />
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='cv-copyright p-2 px-3 d-flex justify-content-between align-items-center'>
						<span>
							Copyright © 2020 <a href='/'>biz.ug</a>
						</span>
						<span>
							<button className='btn btn-secondary mx-2'>
								<FontAwesomeIcon icon={faPlus} />
							</button>
							<button className='btn btn-secondary mx-2'>
								<FontAwesomeIcon icon={faPlus} />
							</button>
							<button className='btn btn-secondary mx-2'>
								<FontAwesomeIcon icon={faPlus} />
							</button>
						</span>
					</div>
				</footer>
			</>
		);
	}
}

export default Footer;
