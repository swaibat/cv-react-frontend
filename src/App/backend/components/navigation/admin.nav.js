/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import constants from '../../../shared/redux/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica } from '@fortawesome/free-solid-svg-icons';
import decode, { token } from '../../../shared/helper';
import Users from '../../../shared/redux/users/actions';

class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			mini: '',
		};
	}
	componentDidMount() {
		this.props.init();
		this.props.user(token, decode().id);
		// const { menuIsOpen } = this.state;
		// document.getElementById('body').classList.add('mini');
	}
	render() {
		const { payload } = this.props;
		const { menuIsOpen } = this.state;
		document.getElementById('body').classList.add(localStorage.getItem('navType'));
		return (
			<>
				<nav className='navbar navbar-dark bg-transparent align-items-center w-100 h-3 mb-3'>
					<li className='nav-item js-hamburger mt-n4 d-flex flex-row-reverse align-items-center'>
						<button
							onClick={() => this.setState({ menuIsOpen: !menuIsOpen })}
							className={`hamburger-toggle ${menuIsOpen ? 'is-opened' : ''} `}
						>
							<span className='bar-top'></span>
							<span className='bar-mid'></span>
							<span className='bar-bot'></span>
						</button>
						<h6 className='text-white ml-4 mb-0 text-capitalize'>
							{
								document.location.pathname.split('/')[
									document.location.pathname.split('/').length - 1
								]
							}
						</h6>
					</li>
					<ul className='d-flex'>
						<li className='nav-item mx-3'>
							<a
								className='nav-link text-white'
								href='#'
								data-toggle='tooltip'
								data-placement='bottom'
								title='visit website'
							>
								<FontAwesomeIcon className='admin-nav-icons' icon={faGlobeAfrica} />
							</a>
						</li>
						<li className='nav-item mx-3'>
							<a
								className='nav-link text-white'
								href='#'
								data-toggle='tooltip'
								data-placement='bottom'
								title='Notifications'
							>
								<span className='admin-nav-icons'>
									<ion-icon name='notifications' />
								</span>
								<span className='badge badge-light mt-n2 ml-n2 position-absolute'>5</span>
							</a>
						</li>
						<li
							className='dropdown ml-3'
							data-toggle='tooltip'
							data-placement='bottom'
							title='Notifications'
						>
							<button
								className='btn bg-transparent text-white dropdown-toggle'
								type='button'
								id='dropdownMenuButton'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'
							>
								{payload && payload.firstName}
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
				{!document.location.pathname.match('dashboard') && (
					<div className='w-100 container-fluid d-flex justify-content-between align-items-center mb-n3'>
						<div className='btn-group align-items-start'>
							<button
								onClick={() => this.props.history.goBack()}
								className={`btn p-0 text-white font-size-lg`}
							>
								<ion-icon name='arrow-undo-circle' />
							</button>
							<button className={`btn p-0 text-white font-size-lg `}>
								<ion-icon name='arrow-redo-circle' />
							</button>
							<button className={`btn p-0 text-white font-size-lg`}>
								<ion-icon name='reload-circle' />
							</button>
						</div>
						<nav aria-label='breadcrumb'>
							<ol className='breadcrumb p-0 bg-transparent'>
								{document.location.pathname.split('/').map(link => {
									if (link.length > 1) {
										return (
											<li className='breadcrumb-item cv-breadcrumb-item'>
												<a className='text-white' href={`/${link}`}>
													{link}
												</a>
											</li>
										);
									}
								})}
							</ol>
						</nav>
					</div>
				)}
			</>
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

		user: async (token, id) => dispatch(await Users.getUser(token, id)),
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
