/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import constants from '../../redux/constants';
import LogoutAction from '../../redux/actions/logout.action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { delToken, token } from '../../helper';
import avatar from '../../assets/images/user.svg';

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
				<Link className='nav-link dropdown-toggle font-weight-light text-secondary' data-toggle='dropdown' to='#' role='button' aria-haspopup='true' aria-expanded='false'>
					<span>Rumbiiha swaibu</span>
				</Link>
				<div className='dropdown-menu shadow notification-pane' aria-labelledby='dropdownMenuButton'>
					<span className='dropdown-item'>
						<div className='card-header bg-white py-1 px-2 d-flex align-items-center'>
							<div className='d-flex'>
								<img className='user-avatar-nav img-thumbnail' src={avatar} alt='user' />
								<Link className='nav-link text-secondary '>
									<span>Rumbiiha swaibu</span>
								</Link>
							</div>
							<div className='d-flex ml-auto'>
								<Link onClick={this.logout} className='btn btn-sm btn-primary'>
									<small>Logout</small>
								</Link>
							</div>
						</div>
					</span>
					<a className='dropdown-item' href='#'>
						<span className='mb-1'>Account settings</span>
					</a>
					<a className='dropdown-item' href='#'>
						<span className='mb-1'>Dashboard</span>
					</a>
					<a className='dropdown-item' href='#'>
						<span className='mb-1'>Account profile</span>
					</a>
					<a className='dropdown-item' href='#'>
						<span className='mb-1'>Create a new Site</span>
					</a>
				</div>
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
