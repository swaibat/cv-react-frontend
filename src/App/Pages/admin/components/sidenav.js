/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faMinusCircle,
	faSearch,
	faBell,
	faThLarge,
	faLayerGroup,
	faCog,
	faUsers,
	faGripHorizontal,
	faClone,
	faHistory,
	faCircle,
} from '@fortawesome/free-solid-svg-icons';
import avatar from '../../../../assets/images/user.svg';
import Logo from '../../../../assets/images/logo.svg';
import { Link, NavLink } from 'react-router-dom';

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
								<FontAwesomeIcon icon={faSearch} />
							</span>
						</div>
					</div>
				</li>
				<li className='nav-item border-top'>
					<NavLink
						className='nav-link text-secondary pl-3 cv-sidenav'
						to='/admin/dashboard'
						activeClassName='selected'
					>
						<FontAwesomeIcon className='mr-2' icon={faThLarge} /> Dashboard
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						className='nav-link text-secondary nav-link  pl-3 cv-sidenav'
						to='/admin/category'
						activeClassName='selected'
					>
						<FontAwesomeIcon className='mr-2' icon={faLayerGroup} />
						Categories
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						className='nav-link text-secondary pl-3 cv-sidenav'
						to='/admin/products'
						activeClassName='selected'
					>
						<FontAwesomeIcon className='mr-2' icon={faBell} />
						products
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						className='nav-link text-secondary nav-link text-secondary-collapse pl-3 cv-sidenav'
						to='/admin/pages'
						id='hasSubItems'
						data-toggle='collapse'
						data-target='#otherPages'
						aria-controls='otherPages'
						aria-expanded='false'
						activeClassName='selected'
					>
						<FontAwesomeIcon className='mr-2' icon={faClone} />
						Pages
					</NavLink>
					<ul
						className='nav-second-level cv-collapse collapse'
						id='otherPages'
						data-parent='#navAccordion'
					>
						<li className='nav-item py-0'>
							<Link className='nav-link text-secondary pl-2 ' to='/admin/pages'>
								<span className='nav-link text-secondary-text p-0 ml-n3'>
									<FontAwesomeIcon className='cv-nav-icon' icon={faCircle} />
									Vendors Pages
								</span>
							</Link>
						</li>
						<li className='nav-item py-0'>
							<NavLink
								className='nav-link text-secondary pl-2 '
								to='/admin/pages/faq'
								activeClassName='selected'
							>
								<span className='nav-link text-secondary-text p-0 ml-n3'>
									<FontAwesomeIcon className='cv-nav-icon' icon={faCircle} />
									Faq
								</span>
							</NavLink>
						</li>
						<li className='nav-item py-0'>
							<Link className='nav-link text-secondary pl-2 ' to='/admin/pages/about'>
								<span className='nav-link text-secondary-text p-0 ml-n3'>
									<FontAwesomeIcon className='cv-nav-icon' icon={faCircle} />
									About-us
								</span>
							</Link>
						</li>
					</ul>
				</li>
				<li className='nav-item'>
					<NavLink
						className='nav-link text-secondary pl-3 cv-sidenav'
						to='/admin/users'
						activeClassName='selected'
					>
						<FontAwesomeIcon className='mr-2' icon={faUsers} />
						Users
					</NavLink>
				</li>
				<li className='nav-item'>
					<NavLink
						className='nav-link text-secondary nav-link text-secondary-collapse cv-sidenav pl-3'
						to='/admin/chat'
						id='hasSubItems'
						data-toggle='collapse'
						data-target='#apps'
						aria-controls='apps'
						aria-expanded='false'
						activeClassName='selected'
					>
						<FontAwesomeIcon className='mr-2' icon={faGripHorizontal} />
						Apps
					</NavLink>
					<ul
						className='nav-second-level cv-collapse collapse'
						id='apps'
						data-parent='#navAccordion'
					>
						<li className='nav-item'>
							<NavLink
								className='nav-link text-secondary pl-2'
								to='/admin/chat'
								activeClassName='selected'
							>
								<span className='nav-link text-secondary-text p-0 ml-n3'>
									<FontAwesomeIcon className='cv-nav-icon' icon={faCircle} />
									chat
								</span>
							</NavLink>
						</li>
						<li className='nav-item'>
							<Link className='nav-link text-secondary pl-2' to='/admin/payments'>
								<span className='nav-link text-secondary-text p-0 ml-n3'>
									<FontAwesomeIcon className='cv-nav-icon' icon={faCircle} />
									comments
								</span>
							</Link>
						</li>
						<li className='nav-item'>
							<a className='nav-link text-secondary pl-2' href='#'>
								<span className='nav-link text-secondary-text p-0 ml-n3'>
									<FontAwesomeIcon className='cv-nav-icon' icon={faCircle} />
									notification
								</span>
							</a>
						</li>
					</ul>
				</li>
				<li className='nav-item'>
					<a className='nav-link text-secondary pl-3' href='#'>
						<FontAwesomeIcon className='mr-2' icon={faHistory} />
						History
					</a>
				</li>
				<li className='nav-item'>
					<Link
						className='nav-link text-secondary nav-link text-secondary-collapse pl-3'
						to='/admin/settings'
						id='hasSubItems'
						data-toggle='collapse'
						data-target='#collapseSubItems4'
						aria-controls='collapseSubItems4'
						aria-expanded='false'
					>
						<FontAwesomeIcon className='mr-2' icon={faCog} />
						settings
					</Link>
					<ul
						className='nav-second-level cv-collapse collapse'
						id='collapseSubItems4'
						data-parent='#navAccordion'
					>
						<li className='nav-item'>
							<Link className='nav-link text-secondary' to='/admin/settings'>
								<span className='nav-link text-secondary-text'>website</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link text-secondary' to='/admin/payments'>
								<span className='nav-link text-secondary-text'>Payments</span>
							</Link>
						</li>
						<li className='nav-item'>
							<a className='nav-link text-secondary' href='#'>
								<span className='nav-link text-secondary-text'>Item 4.2</span>
							</a>
						</li>
					</ul>
				</li>
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
