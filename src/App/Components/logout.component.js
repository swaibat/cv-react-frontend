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
			<li className='dropdown mx-2 d-flex flex-row align-items-center'>
				<img className='user-avatar-nav img-thumbnail' src={avatar} alt='user' />
				<Link className='nav-link dropdown-toggle' data-toggle='dropdown' to='#' role='button' aria-haspopup='true' aria-expanded='false'>
					<span>Rumbiiha swaibu</span>
				</Link>
				<div className='dropdown-menu shadow notification-pane'>
					<div className='dropdown-item card border-0 p-0' href='#'>
						<div className='card-header bg-white py-1 px-2 d-flex'>
							<span>Inbox</span>
							<div className='d-flex ml-auto'>
								<Link className='px-2 border-right' to='/settings'>
									<small>Mark all as read</small>
								</Link>
								<Link onClick={this.logout} className='mx-2'>
									<small>Logout</small>
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
									<p className='mb-1 text-truncate font-weight-light'>Dapibus ac facilisis in</p>
								</li>
								<div className='dropdown-divider' />
								<li className='dropdown-item d-flex flex-column'>
									<div className='d-flex w-100 justify-content-between'>
										<p className='mb-1'>List group item heading</p>
										<small className='ml-2'>3 days</small>
									</div>
									<p className='mb-1 text-truncate font-weight-light'>Dapibus ac facilisis in</p>
								</li>
								<div className='dropdown-divider' />
								<li className='dropdown-item d-flex flex-column'>
									<div className='d-flex w-100 justify-content-between'>
										<p className='mb-1'>List group item heading</p>
										<small className='ml-2'>3 days</small>
									</div>
									<p className='mb-1 text-truncate font-weight-light'>Dapibus ac facilisis in</p>
								</li>
								<div className='dropdown-divider' />
								<li className='dropdown-item d-flex flex-column'>
									<div className='d-flex w-100 justify-content-between'>
										<p className='mb-1'>List group item heading</p>
										<small className='ml-2'>3 days</small>
									</div>
									<p className='mb-1 text-truncate font-weight-light'>Dapibus ac facilisis in</p>
								</li>
								<div className='dropdown-divider' />
								<li className='dropdown-item d-flex flex-column'>
									<div className='d-flex w-100 justify-content-between'>
										<p className='mb-1'>List group item heading</p>
										<small className='ml-2'>3 days</small>
									</div>
									<p className='mb-1 text-truncate font-weight-light'>Dapibus ac facilisis in</p>
								</li>
							</ul>
						</div>
						<div className='card-footer  py-1 px-2'>show all Notifications</div>
					</div>
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
