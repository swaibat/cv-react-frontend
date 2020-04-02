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
						<img
							src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='160' height='50' viewBox='0 0 605 150'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0.5' x2='0.5' y2='1' gradientUnits='objectBoundingBox'%3E%3Cstop offset='0' stop-color='%239b1ac2'/%3E%3Cstop offset='0.005' stop-color='%23b410e5'/%3E%3Cstop offset='1' stop-color='%236f118b'/%3E%3C/linearGradient%3E%3CclipPath id='c'%3E%3Crect width='605' height='150'/%3E%3C/clipPath%3E%3C/defs%3E%3Cg id='b' clip-path='url(%23c)'%3E%3Crect width='605' height='150' fill='%23fff'/%3E%3Cg transform='translate(-3)'%3E%3Cg transform='translate(21.999 12.071)'%3E%3Cg transform='translate(0)'%3E%3Cpath d='M76.084,121.124H19.661a19.684,19.684,0,0,1-19.6-21.2L5.451,31.84a8.492,8.492,0,0,1,8.429-7.81H24.532V39.839a3.537,3.537,0,1,0,7.073,0V24.03H24.532v-.483a23.342,23.342,0,1,1,46.682,0v.483H81.865a8.5,8.5,0,0,1,8.429,7.819l3.3,41.612-9.419-9.176a2.654,2.654,0,0,0-1.925-.792,3.091,3.091,0,0,0-3.114,2.992,2.68,2.68,0,0,0,.172,1.074,2.421,2.421,0,0,0,.577.878L81.8,70.306a1.274,1.274,0,0,1,.377.907,1.59,1.59,0,0,1-.449,1.1,1.555,1.555,0,0,1-1.111.492,1.25,1.25,0,0,1-.88-.349l-6.713-6.539a2.5,2.5,0,0,0-1.76-.7,3.11,3.11,0,0,0-2.222.984,3.18,3.18,0,0,0-.9,2.21,2.548,2.548,0,0,0,.754,1.813l5.754,5.605a1.274,1.274,0,0,1,.377.907,1.591,1.591,0,0,1-.449,1.105,1.556,1.556,0,0,1-1.111.492,1.25,1.25,0,0,1-.88-.349l-8.631-8.407a2.5,2.5,0,0,0-1.76-.7,3.111,3.111,0,0,0-2.222.984,3.182,3.182,0,0,0-.9,2.211,2.548,2.548,0,0,0,.754,1.813L68.462,82.3a1.275,1.275,0,0,1,.377.907,1.59,1.59,0,0,1-.449,1.1,1.555,1.555,0,0,1-1.111.492,1.251,1.251,0,0,1-.88-.349L49.235,67.737a4.181,4.181,0,0,0-2.5-3.261,3.989,3.989,0,0,0-1.563-.319c-.1,0-.2,0-.3.011a2.71,2.71,0,0,0-.379-.027,3.11,3.11,0,0,0-2.221.984,3.155,3.155,0,0,0-.9,2.317,4.147,4.147,0,0,0,3.844,4.721L64.191,90.637a15.8,15.8,0,0,1,3.358,4.482,4.076,4.076,0,0,1,.371,2.051,4.734,4.734,0,0,1-.676,2.086,4.92,4.92,0,0,1-1.523,1.58,4.539,4.539,0,0,1-2.012.72c-.729.071-1.467.107-2.192.107a21.937,21.937,0,0,1-2.955-.2,31.5,31.5,0,0,0-4.064-.246,34.06,34.06,0,0,0-6.019.509,7.488,7.488,0,0,0-3.6,1.338A3.051,3.051,0,0,0,44,105.887c.185.479.672.722,1.448.722.093,0,.192,0,.294-.011.248-.018.527-.027.829-.027a54.385,54.385,0,0,1,9.96,1.368,88.42,88.42,0,0,1,11.441,3.191,27.126,27.126,0,0,0,9.1,1.261c1.538,0,3.142-.072,4.767-.213.262-.021.527-.032.788-.032a8.726,8.726,0,0,1,6.147,2.437l.351.342a1.25,1.25,0,0,0,.88.349h.062a19.684,19.684,0,0,1-13.983,5.851ZM47.764,52.753h-.028A18.285,18.285,0,0,0,31.644,63.365a18.622,18.622,0,0,0-1.69,6.709,1.008,1.008,0,0,0,.166.621,1.021,1.021,0,0,0,.823.462l3,.083h.027a.975.975,0,0,0,.975-.906A13.648,13.648,0,0,1,36.207,65.5a13.381,13.381,0,0,1,11.612-7.706.977.977,0,0,0,.932-.979l.023-3.026a1.024,1.024,0,0,0-.2-.612A1.011,1.011,0,0,0,47.764,52.753Zm-.075-9.988a27.663,27.663,0,0,0-22.565,11.8A27.99,27.99,0,0,0,20.806,64.2a28.832,28.832,0,0,0-.745,5.477,1.014,1.014,0,0,0,.176.613,1.027,1.027,0,0,0,.815.453l2.989.09h.031a.974.974,0,0,0,.969-.94,23.16,23.16,0,0,1,6.955-15.637A22.765,22.765,0,0,1,47.73,47.791a.97.97,0,0,0,.966-.975l.015-3.017a1.031,1.031,0,0,0-1.017-1.036h-.005Zm16.027,17.39h0c0,.006.131.151.425.473a3.6,3.6,0,0,0-.335-.388,1.032,1.032,0,0,0-.09-.085ZM31.6,24.03H64.14V39.839a3.537,3.537,0,1,0,7.073,0V24.03H64.141v-.483a16.268,16.268,0,1,0-32.536,0v.483ZM90.15,111.251a1.25,1.25,0,0,1-.88-.349,1.274,1.274,0,0,1-.377-.907,1.59,1.59,0,0,1,.449-1.1l1.032-1.078a1.556,1.556,0,0,1,1.111-.492,1.25,1.25,0,0,1,.88.349,1.274,1.274,0,0,1,.377.907,1.59,1.59,0,0,1-.449,1.1l-1.032,1.078A1.556,1.556,0,0,1,90.15,111.251Zm5.085-5.39h0a1.231,1.231,0,0,1-.806-.346,1.274,1.274,0,0,1-.377-.907A1.591,1.591,0,0,1,94.5,103.5l1.225-1.28a19.806,19.806,0,0,1-.491,3.638Zm-1.047-24a1.249,1.249,0,0,1-.879-.348l-5.754-5.606A1.273,1.273,0,0,1,87.178,75a1.59,1.59,0,0,1,.449-1.105,1.555,1.555,0,0,1,1.11-.492,1.25,1.25,0,0,1,.88.349l4.33,4.218.308,3.889Z' fill='url(%23a)'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Ctext transform='translate(125 106)' fill='%23707070' stroke='%23fae4e4' stroke-width='1' font-size='112' font-family='Aqum'%3E%3Ctspan x='0' y='0'%3EG%3C/tspan%3E%3Ctspan y='0' font-family='Rounded-Regular, Rounded'%3Eats%3C/tspan%3E%3Ctspan y='0' fill='%238f10b5' font-family='Rounded-Regular, Rounded'%3EBay%3C/tspan%3E%3C/text%3E%3Ctext transform='translate(138 130)' fill='%23707070' font-size='22' font-family='HelveticaNeue-Bold, Helvetica Neue' font-weight='700'%3E%3Ctspan x='0' y='0' xml:space='preserve'%3EReliable and Secure Online shopping%3C/tspan%3E%3C/text%3E%3C/g%3E%3C/svg%3E"
							alt='logo'
						/>
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
