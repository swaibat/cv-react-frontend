/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import constants from '../../../../redux/constants/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica, faBell } from '@fortawesome/free-solid-svg-icons';
import decode, { token } from './../../../../helper';
import { getUser } from '../../../../redux/actions/user.action';

class Nav extends Component {
	componentDidMount() {
		this.props.init();
		this.props.user(token, decode().id);
	}
	render() {
		const { payload } = this.props;
		return (
			<nav className='navbar navbar-dark bg-transparent align-items-center w-100 h-3 mb-3'>
				<li className='nav-item js-hamburger mt-n3'>
					<button className='hamburger-toggle'>
						<span className='bar-top'></span>
						<span className='bar-mid'></span>
						<span className='bar-bot'></span>
					</button>
				</li>
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
							{payload && payload.data.firstName}
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
}
const mapDispatchToProps = dispatch => {
	return {
		init: () =>
			dispatch({
				type: constants.USER_PENDING,
				pending: true,
			}),

		user: async (token, id) => dispatch(await getUser(token, id)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.getUser.payload,
		pending: state.getUser.pending,
		error: state.getUser.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
