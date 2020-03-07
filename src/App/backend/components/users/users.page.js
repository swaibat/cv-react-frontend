/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Users from '../../../shared/redux/users/actions';
import constants from '../../../shared/redux/constants';
import Sidenav from '../navigation/sidenav';
import AdminNav from '../navigation/admin.nav.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import img from '../../../shared/assets/images/img.png';
import * as timeago from 'timeago.js';
import { token } from '../../../shared/helper';
import CreateModal from './user.create';
import EditModal from './user.edit';
import DeleteModal from './user.delete';
import { Link } from 'react-router-dom';

class Page extends Component {
	constructor(props) {
		super(props);
		this.state = {
			actionUser: { Role: { name: '' } },
		};
	}

	componentDidMount() {
		this.props.get(token);
	}
	handleClick(data) {
		this.setState({ actionUser: data });
	}

	render() {
		const { payload } = this.props;
		return (
			<>
				<div className='w-100 bg-white p-3 mt-4 rounded'>
					<div className='d-flex justify-content-between align-items-start'>
						<Link
							className='btn btn-sm btn-success mb-2 shadow-xs'
							data-toggle='modal'
							data-target='#addUserModal'
						>
							<FontAwesomeIcon className='mr-2' icon={faPlus} />
							Add Product
						</Link>
						<div className='btn-group btn-group-sm'>
							<div className='btn btn-light'>search</div>
							<div className='btn btn-light'>search</div>
							<div className='btn btn-light'>search</div>
						</div>
					</div>
					<div className='row mt-n2 min-vh-70 prouct-table p-2'>
						<table className='p-2'>
							<tr className='text-capitalize border-bottom bg-light font-weight-bold'>
								<th>user</th>
								<th>company</th>
								<th>contact no.</th>
								<th>role</th>
								<th>created</th>
								<th>status</th>
								<th className='text-right'>status</th>
							</tr>
							{payload &&
								payload.data.map((user, index) => {
									return (
										<tr key={index}>
											<td>
												<div className='d-flex align-items-center'>
													<span className='pf-grab' />
													<input type='checkbox' className='mr-3 border-right' />
													{/* <span className='vl mr-2' /> */}
													<img className='table-img rounded' src={img} alt='' />
													<div className='d-flex flex-column ml-3'>
														<span>
															{user.firstName} {user.lastName}
														</span>
														<small>{user.email}</small>
													</div>
												</div>
											</td>
											<td className='text-capitalize'>{user.company}</td>
											<td>{user.telephone}</td>
											<td>{user.Role && user.Role.name}</td>
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
											<td className='text-right pr-2'>
												<div
													className='btn-group btn-group-sm'
													role='group'
													aria-label='First group'
												>
													<button
														type='button'
														data-toggle='modal'
														data-target='#editUserModal'
														className='btn text-info'
														onClick={this.handleClick.bind(this, user)}
													>
														<FontAwesomeIcon icon={faEdit} />
													</button>
													<button
														type='button'
														data-toggle='modal'
														data-target='#deleteModal'
														onClick={this.handleClick.bind(this, user)}
														className='btn text-danger'
													>
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
				<CreateModal {...this} />
				<EditModal {...this} />
				<DeleteModal {...this} />
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
