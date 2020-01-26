/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinusCircle, faSearch, faBell, faThLarge, faLayerGroup, faCog, faUsers, faGripHorizontal, faClone, faHistory, faFilePowerpoint } from '@fortawesome/free-solid-svg-icons';
import avatar from '../../../../assets/images/user.svg';
import Logo from '../../../../assets/images/logo.svg';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<ul className='navbar-nav mr-auto sidenav position-absolute bg-white text-secondary-light vh-100' id='navAccordion'>
			<li className='nav-item shadow-sm p-2 m-0 h-3 d-flex justify-content-center'>
				<a className='navbar-brand p-0' href='/'>
					<img src={Logo} alt='logo' />
				</a>
			</li>
			<li className='nav-item h-7 d-flex justify-content-between'>
				<div className='nav-link m-auto d-flex flex-column text-center' href='#'>
					<img className='nav-avatar img-thumbnail' src={avatar} alt='user' />
					<sapn>Admin</sapn>
				</div>
			</li>
			<li className='shadow-sm-top p-2 h-90'>
				<div className='d-flex justify-content-between text-secondary-light'>
					<FontAwesomeIcon className='rotate-90' icon={faMinusCircle} />
					<FontAwesomeIcon className='rotate-20' icon={faMinusCircle} />
				</div>
				<li className='nav-item pt-2'>
					<div className='input-group mt-2 mb-3'>
						<input type='text' className='form-control form-control-sm' placeholder='' aria-label="Recipient's username" aria-describedby='basic-addon2' />
						<div className='input-group-append'>
							<span className='input-group-text bg-white rounded-sm-right text-secondary-light' id='basic-addon2'>
								<FontAwesomeIcon icon={faSearch} />
							</span>
						</div>
					</div>
				</li>
				<li className='nav-item border-top'>
					<Link className='nav-link text-secondary pl-3' to='/user/dashboard'>
						<FontAwesomeIcon className='mr-2' icon={faThLarge} /> Dashboard
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link text-secondary nav-link  pl-3' to='/user/category'>
						<FontAwesomeIcon className='mr-2' icon={faLayerGroup} />
						Categories
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link text-secondary pl-3' to='/user/products'>
						<FontAwesomeIcon className='mr-2' icon={faBell} />
						products
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link text-secondary pl-3' to='/user/pages'>
						<FontAwesomeIcon className='mr-2' icon={faFilePowerpoint} />
						Pages
					</Link>
				</li>
				<li className='nav-item'>
					<Link className='nav-link text-secondary pl-3' to='/user/users'>
						<FontAwesomeIcon className='mr-2' icon={faUsers} />
						Users
					</Link>
				</li>
				<li className='nav-item'>
					<Link
						className='nav-link text-secondary nav-link text-secondary-collapse pl-3'
						to='/user/settings'
						id='hasSubItems'
						data-toggle='collapse'
						data-target='#apps'
						aria-controls='apps'
						aria-expanded='false'
					>
						<FontAwesomeIcon className='mr-2' icon={faGripHorizontal} />
						Apps
					</Link>
					<ul className='nav-second-level collapse' id='apps' data-parent='#navAccordion'>
						<li className='nav-item'>
							<Link className='nav-link text-secondary' to='/user/settings'>
								<span className='nav-link text-secondary-text'>chat</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link text-secondary' to='/user/payments'>
								<span className='nav-link text-secondary-text'>comments</span>
							</Link>
						</li>
						<li className='nav-item'>
							<a className='nav-link text-secondary' href='#'>
								<span className='nav-link text-secondary-text'>notification</span>
							</a>
						</li>
					</ul>
				</li>
				<li className='nav-item'>
					<Link
						className='nav-link text-secondary nav-link text-secondary-collapse pl-3'
						to='/user/settings'
						id='hasSubItems'
						data-toggle='collapse'
						data-target='#otherPages'
						aria-controls='otherPages'
						aria-expanded='false'
					>
						<FontAwesomeIcon className='mr-2' icon={faClone} />
						Other Pages
					</Link>
					<ul className='nav-second-level collapse' id='otherPages' data-parent='#navAccordion'>
						<li className='nav-item'>
							<Link className='nav-link text-secondary' to='/user/faq'>
								<span className='nav-link text-secondary-text'>Faq</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link text-secondary' to='/user/about'>
								<span className='nav-link text-secondary-text'>About-us</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link text-secondary' href='/user/contact'>
								<span className='nav-link text-secondary-text'>contact-us</span>
							</Link>
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
						to='/user/settings'
						id='hasSubItems'
						data-toggle='collapse'
						data-target='#collapseSubItems4'
						aria-controls='collapseSubItems4'
						aria-expanded='false'
					>
						<FontAwesomeIcon className='mr-2' icon={faCog} />
						settings
					</Link>
					<ul className='nav-second-level collapse' id='collapseSubItems4' data-parent='#navAccordion'>
						<li className='nav-item'>
							<Link className='nav-link text-secondary' to='/user/settings'>
								<span className='nav-link text-secondary-text'>website</span>
							</Link>
						</li>
						<li className='nav-item'>
							<Link className='nav-link text-secondary' to='/user/payments'>
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
			</li>
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
