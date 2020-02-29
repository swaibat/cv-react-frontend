/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import constants from '../../redux/constants';
import LogoutAction from '../../redux/actions/logout.action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { delToken, token } from '../../helper';
import avatar from '../../assets/images/user.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPowerOff } from '@fortawesome/free-solid-svg-icons';

export class Logout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.logout = this.logout.bind(this);
	}
	logout = () => {
		this.props.inits();
		this.props.logout(token);
	};
	render() {
		const { payload } = this.props;
		if (payload && payload.status === 200) {
			delToken();
			window.location.reload();
		}
		return (
			<li className='dropdown mx-2 d-flex flex-row align-items-center font-weight-light'>
				<img className='user-avatar-nav img-thumbnail' src={avatar} alt='user' />
				<Link
					className='nav-link dropdown-toggle font-weight-light text-secondary'
					data-toggle='dropdown'
					to='/profile'
					role='button'
					aria-haspopup='true'
					aria-expanded='false'
				>
					<span>Rumbiiha swaibu</span>
				</Link>
				<ul className='dropdown-menu shadow notification-pane' aria-labelledby='dropdownMenuButton'>
					<li className='dropdown-item rounded'>
						<Link className='py-3 d-flex' to='/profile'>
							<span className='dropdown-icon'>
								<FontAwesomeIcon className='mr-1' icon={faCog} />
							</span>
							<span className='d-flex flex-column ml-2'>
								<h5 className='text-primary-dark-30'>Settings</h5>
								<span className='text-secondary'>set up your profile</span>
							</span>
						</Link>
					</li>
					<li className='dropdown-item rounded'>
						<Link className='py-3 d-flex' to='#' onClick={this.logout}>
							<span className='dropdown-icon'>
								<FontAwesomeIcon className='mr-1' icon={faPowerOff} />
							</span>
							<span className='d-flex flex-column ml-2'>
								<h5 className='text-primary-dark-30'>Logout</h5>
								<span className='text-secondary'>To keep your account secure</span>
							</span>
						</Link>
					</li>
				</ul>
			</li>
		);
	}
}

export function mapStateToProps(state) {
	return {
		payload: state.Logout.payload,
		pending: state.Logout.pending,
	};
}
export const mapDispatchToProps = dispatch => {
	return {
		inits: () =>
			dispatch({
				type: constants.LOGOUT_PENDING,
				pending: true,
			}),
		logout: async token => dispatch(await LogoutAction(token)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
