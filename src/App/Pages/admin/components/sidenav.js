/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faCircle } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../../../assets/images/user.svg';
import Logo from '../../../../assets/images/logo.svg';
import { NavLink } from 'react-router-dom';
import IosAppstoreOutline from 'react-ionicons/lib/IosAppstoreOutline';
import AdminSidenav from '../../../routes/admin.routes';

function Nav() {
	return (
		<ul
			className='navbar-nav mr-auto sidenav bg-white text-secondary-light vh-100'
			id='navAccordion'
		>
			<li className='nav-item shadow-sm p-2 m-0 h-3 d-flex justify-content-center'>
				<a className='navbar-brand p-0' href='/'>
					<img src={Logo} alt='logo' />
				</a>
			</li>
			<li className='nav-item h-7 d-flex justify-content-between'>
				<div className='nav-link m-auto d-flex flex-column text-center' href='#'>
					<img className='nav-avatar img-thumbnail' src={avatar} alt='user' />
					<span>Admin</span>
				</div>
			</li>
			<ul className='shadow-sm-top pl-0 h-90'>
				<div className='d-flex justify-content-between text-secondary-light px-2 pt-2'>
					<FontAwesomeIcon className='rotate-90' icon={faMinusCircle} />
					<FontAwesomeIcon className='rotate-20' icon={faMinusCircle} />
				</div>
				<li className='nav-item pt-2 px-2'>
					<div className='input-group mt-2 mb-3'>
						<input
							type='text'
							className='form-control form-control-sm'
							placeholder=''
							aria-label="Recipient's username"
							aria-describedby='basic-addon2'
						/>
						<div className='input-group-append'>
							<span
								className='input-group-text bg-white rounded-sm-right text-secondary-light'
								id='basic-addon2'
							>
								{/* <IosSearch/> */}
							</span>
						</div>
					</div>
				</li>
				{AdminSidenav.map((data, index) => {
					return (
						<li key={index} className='nav-item'>
							{!data.sub ? (
								<NavLink
									className='nav-link text-secondary nav-link text-secondary-collapse cv-sidenav pl-3'
									to={data.path}
									activeClassName='selected'
								>
									<ion-icon name={data.icon} />
									{data.title}
								</NavLink>
							) : (
								<>
									<NavLink
										className='nav-link text-secondary nav-link text-secondary-collapse cv-sidenav pl-3'
										to={data.path}
										id='hasSubItems'
										data-toggle='collapse'
										data-target={`#${data.title}`}
										aria-controls={data.title}
										aria-expanded='false'
										activeClassName='selected'
									>
										<ion-icon name={data.icon} />
										{data.title}
									</NavLink>
									<ul
										className='nav-second-level cv-collapse collapse'
										id={data.title}
										data-parent='#navAccordion'
									>
										{data.sub.map((sub, key) => {
											return (
												<li className='nav-item'>
													<NavLink
														className='nav-link text-secondary pl-2'
														to={sub.path}
														activeClassName='selected'
													>
														<span className='nav-link text-secondary-text p-0 ml-n3'>
															<FontAwesomeIcon className='cv-nav-icon' icon={faCircle} />
															{sub.title}
														</span>
													</NavLink>
												</li>
											);
										})}
									</ul>
								</>
							)}
						</li>
					);
				})}
			</ul>
			<li className='nav-item h-3.5'>
				<div className='d-flex flex-row-reverse'>
					<div className='bg-primary d-flex flex-column p-1'>
						<FontAwesomeIcon className='rotate-90 mb-3' icon={faMinusCircle} />
						<FontAwesomeIcon className='rotate-20' icon={faMinusCircle} />
					</div>
				</div>
			</li>
		</ul>
	);
}

export default Nav;
