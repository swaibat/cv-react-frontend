/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Auth from './redux/actions';
import { useDispatch } from 'react-redux';
import avatar from '../../assets/images/user.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { delToken } from '../../helper';

const Logout = ({ user, setUser }) => {
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(false);
	const logout = async () => {
		setLoading(true);
		dispatch(await Auth.logout());
		setLoading(false);
		delToken();
		setUser({});
	};
	return (
		<li className='dropdown mx-2 d-flex flex-row align-items-center font-weight-light'>
			{loading && (
				<span className='px-5 position-absolute'>
					<div class='spinner-border text-primary' role='status'>
						<span class='sr-only'>Loading...</span>
					</div>
				</span>
			)}
			<img className='user-avatar-nav img-thumbnail' src={avatar} alt='user' />
			<Link
				className='nav-link dropdown-toggle font-weight-light '
				data-toggle='dropdown'
				to='/profile'
				role='button'
				aria-haspopup='true'
				aria-expanded='false'
			>
				<span>{user && user.username}</span>
			</Link>

			<ul className='dropdown-menu shadow notification-pane' aria-labelledby='dropdownMenuButton'>
				<li className='dropdown-item rounded'>
					<Link className='py-3 d-flex' to='/profile'>
						<span className='dropdown-icon'>
							<FontAwesomeIcon className='mr-1' icon={faCog} />
						</span>
						<span className='d-flex flex-column ml-2'>
							<h5 className='text-primary-dark-30'>Settings</h5>
							<span className=''>set up your profile</span>
						</span>
					</Link>
				</li>
				<li className='dropdown-item rounded'>
					<span className='py-3 d-flex' onClick={logout}>
						<span className='dropdown-icon'>
							<FontAwesomeIcon className='mr-1' icon={faPowerOff} />
						</span>
						<span className='d-flex flex-column ml-2'>
							<h5 className='text-primary-dark-30'>Logout</h5>
							<span className=''>To keep your account secure</span>
						</span>
					</span>
				</li>
			</ul>
		</li>
	);
};

export default Logout;
