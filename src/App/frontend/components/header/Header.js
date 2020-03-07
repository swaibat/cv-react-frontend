/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import Category from '../categories/categories.nav';
import { Link } from 'react-router-dom';
import Token from '../../../shared/helper';
import Logout from '../../../shared/components/auth/logout.component';
import Logo from '../../../shared/assets/images/logo.svg';

class Header extends React.Component {
	render() {
		return (
			<>
				<nav className='navbar navbar-expand-lg navbar-sm-dark  navbar-light bg-white '>
					<a className='navbar-brand p-0' href='/'>
						<img src={Logo} alt='logo' />
					</a>
					<button
						className='navbar-toggler rounded-sm'
						type='button'
						data-toggle='collapse'
						data-target='#navbarCollapse'
						aria-controls='navbarCollapse'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<ul className='nav ml-auto'>
						<li className='nav-item dropdown mx-2'>
							<div className='dropdown-menu shadow notification-pane'>
								<div className='dropdown-item card border-0 p-0' href='#'>
									<div className='card-header bg-white py-1 px-2 d-flex'>
										<span>Inbox</span>
										<div className='d-flex ml-auto'>
											<Link className='px-2 border-right' to='/settings'>
												<small>Mark all as read</small>
											</Link>
											<Link className='mx-2' to='/settings'>
												<small>Go to Inbox</small>
											</Link>
										</div>
									</div>
									<div className='card-body px-1 py-2'>
										<ul className='list-group border-0'>
											<li className='dropdown-item d-flex flex-column'>
												<div className='d-flex w-100 justify-content-between'>
													<p className='mb-1'>List group item heading</p>
													<small className='ml-2'>3 days</small>
												</div>
												<p className='mb-1 text-truncate font-weight-light'>
													Dapibus ac facilisis in
												</p>
											</li>
											<div className='dropdown-divider' />
											<li className='dropdown-item d-flex flex-column'>
												<div className='d-flex w-100 justify-content-between'>
													<p className='mb-1'>List group item heading</p>
													<small className='ml-2'>3 days</small>
												</div>
												<p className='mb-1 text-truncate font-weight-light'>
													Dapibus ac facilisis in
												</p>
											</li>
											<div className='dropdown-divider' />
											<li className='dropdown-item d-flex flex-column'>
												<div className='d-flex w-100 justify-content-between'>
													<p className='mb-1'>List group item heading</p>
													<small className='ml-2'>3 days</small>
												</div>
												<p className='mb-1 text-truncate font-weight-light'>
													Dapibus ac facilisis in
												</p>
											</li>
											<div className='dropdown-divider' />
											<li className='dropdown-item d-flex flex-column'>
												<div className='d-flex w-100 justify-content-between'>
													<p className='mb-1'>List group item heading</p>
													<small className='ml-2'>3 days</small>
												</div>
												<p className='mb-1 text-truncate font-weight-light'>
													Dapibus ac facilisis in
												</p>
											</li>
											<div className='dropdown-divider' />
											<li className='dropdown-item d-flex flex-column'>
												<div className='d-flex w-100 justify-content-between'>
													<p className='mb-1'>List group item heading</p>
													<small className='ml-2'>3 days</small>
												</div>
												<p className='mb-1 text-truncate font-weight-light'>
													Dapibus ac facilisis in
												</p>
											</li>
										</ul>
									</div>
									<div className='card-footer  py-1 px-2'>show all Notifications</div>
								</div>
							</div>
						</li>
						<li className='nav-item dropdown mx-2'>
							<a
								className='nav-link'
								data-toggle='dropdown'
								href='#'
								role='button'
								aria-haspopup='true'
								aria-expanded='false'
							>
								<FontAwesomeIcon className='cv-nav-icons' icon={faBell} />
							</a>
							<div className='dropdown-menu shadow notification-pane'>
								<div className='dropdown-item card border-0 p-0' href='#'>
									<div className='card-header bg-white py-1 px-2 d-flex'>
										<span>Notifications</span>
										<Link className='ml-auto' to='/settings'>
											Setting
										</Link>
									</div>
									<div className='card-body px-1 py-2'>
										<ul className='list-group'>
											<li className='dropdown-item d-flex flex-column'>
												<div className='d-flex w-100 justify-content-between'>
													<p className='mb-1'>account settings</p>
												</div>
											</li>
											<div className='dropdown-divider' />
											<li className='dropdown-item d-flex flex-column'>
												<div className='d-flex w-100 justify-content-between'>
													<p className='mb-1'>List group item heading</p>
													<small className='ml-2'>3 days</small>
												</div>
												<p className='mb-1 text-truncate font-weight-light'>
													Dapibus ac facilisis in
												</p>
											</li>
											<div className='dropdown-divider' />
											<li className='dropdown-item d-flex flex-column'>
												<div className='d-flex w-100 justify-content-between'>
													<p className='mb-1'>List group item heading</p>
													<small className='ml-2'>3 days</small>
												</div>
												<p className='mb-1 text-truncate font-weight-light'>
													Dapibus ac facilisis in
												</p>
											</li>
											<div className='dropdown-divider' />
											<li className='dropdown-item d-flex flex-column'>
												<div className='d-flex w-100 justify-content-between'>
													<p className='mb-1'>List group item heading</p>
													<small className='ml-2'>3 days</small>
												</div>
												<p className='mb-1 text-truncate font-weight-light'>
													Dapibus ac facilisis in
												</p>
											</li>
											<div className='dropdown-divider' />
											<li className='dropdown-item d-flex flex-column'>
												<div className='d-flex w-100 justify-content-between'>
													<p className='mb-1'>List group item heading</p>
													<small className='ml-2'>3 days</small>
												</div>
												<p className='mb-1 text-truncate font-weight-light'>
													Dapibus ac facilisis in
												</p>
											</li>
										</ul>
									</div>
									<div className='card-footer  py-1 px-2'>show all Notifications</div>
								</div>
							</div>
						</li>
						{Token() ? (
							<Logout />
						) : (
							<>
								<li className='nav-item mx-2'>
									<Link className='nav-link' to='/verify'>
										signup
									</Link>
								</li>
								<li className='nav-item mx-2'>
									<Link className='nav-link' to='/login'>
										signin
									</Link>
								</li>
							</>
						)}
					</ul>
				</nav>
				<Category />
			</>
		);
	}
}

export default Header;
