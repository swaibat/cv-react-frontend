/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from '../../../shared/redux/users/actions';
import constants from '../../../shared/redux/constants';
import Sidenav from '../navigation/sidenav';
import AdminNav from '../navigation/admin.nav.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import img from '../../../shared/assets/images/img.png';
import * as timeago from 'timeago.js';
import { token } from '../../../shared/helper';

class Page extends Component {
	state = {};
	componentDidMount() {
		this.props.get(token);
	}

	render() {
		const { payload } = this.props;

		return (
			<>
				<Sidenav />
				<div className='header-bg' />
				<main className='content-wrapper d-flex flex-column align-items-center min-h-display'>
					<AdminNav />
					<div className='container-fluid mt-n2'>
						<div className='w-100 bg-white p-3 mt-4 rounded'>
							<div className='w-100 d-flex justify-content-between align-items-center'>
								<h6 className='mb-0'>Add Product</h6>
								<div className='btn-group'>
									<button className='btn'>
										<ion-icon name='add' />
									</button>
									<button className='btn'>
										<ion-icon name='search' />
									</button>
									<button className='btn'>
										<ion-icon name='cloud-upload' />
									</button>
								</div>
							</div>
							<hr />
							<div className='row mt-n2 min-vh-70 prouct-table'>
								<table>
									<tr className='text-capitalize'>
										<th>user</th>
										<th>company</th>
										<th>contact no.</th>
										<th>role</th>
										<th>created</th>
										<th>status</th>
										<th>status</th>
									</tr>
									{payload &&
										payload.data.map((user, index) => {
											return (
												<tr key={index}>
													<td>
														<div className='d-flex'>
															<img className='user-img rounded-circle' src={img} alt='' />
															<div className='d-flex flex-column ml-2'>
																<span>
																	{user.firstName} {user.lastName}
																</span>
																<small>{user.email}</small>
															</div>
														</div>
													</td>
													<td className='text-capitalize'>{user.company}</td>
													<td>{user.telephone}</td>
													<td>{user.Role.name}</td>
													<td>
														<small>{timeago.format(new Date(user.createdAt))}</small>
													</td>
													<td>
														<div className='custom-control custom-switch'>
															<input
																name='negotiable'
																type='checkbox'
																className='custom-control-input custom-control-input-lg'
																id={index}
															/>
															<label className='custom-control-label' for={index} />
														</div>
													</td>
													<td className='text-right'>
														<button type='button' className='btn text-secondary btn-sm border'>
															<FontAwesomeIcon icon={faExternalLinkAlt} />
														</button>
														<div
															className='btn-group-vertical btn-group-sm mr-n2'
															role='group'
															aria-label='First group'
														>
															<button type='button' className='btn text-primary border-bottom'>
																<FontAwesomeIcon icon={faEdit} />
															</button>
															<button type='button' className='btn text-danger'>
																<FontAwesomeIcon icon={faTrash} />
															</button>
														</div>
													</td>
												</tr>
											);
										})}
								</table>
							</div>
						</div>
					</div>
				</main>
			</>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		init: () =>
			dispatch({
				type: constants.USERS_PENDING,
				pending: true,
			}),

		get: async token => dispatch(await Users.getUsers(token)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.getUsers.payload,
		pending: state.getUsers.pending,
		error: state.getUsers.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
