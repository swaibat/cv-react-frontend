/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import img from '../../../shared/assets/images/img.png';
import * as timeago from 'timeago.js';
import DeleteModal from './user.delete';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-ultimate-pagination-bootstrap-4';
import User from './redux/actions';

const Users = () => {
	const [users, setUsers] = useState([]);
	const dispatch = useDispatch();
	const payload = useSelector(state => state.getUsers.payload);
	useMemo(async () => {
		dispatch(await User.getUsers());
		payload && setUsers(payload);
	}, [dispatch, payload]);

	return (
		<>
			<div className='w-100 bg-white p-3 mt-4 rounded'>
				<div className='d-flex justify-content-between align-items-start'>
					<Link to='/admin/users/create' className='btn btn-sm btn-success mb-2 shadow-xs'>
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
						{users.map((user, index) => {
							return (
								<tr key={index}>
									<td>
										<div className='d-flex align-items-center'>
											<span className='pf-grab' />
											<input type='checkbox' className='mr-3 border-right' />
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
											<label className='custom-control-label' htmlFor={index} />
										</div>
									</td>
									<td className='text-right pr-2'>
										<div className='btn-group btn-group-sm' role='group' aria-label='First group'>
											<Link to={'/users/create'} className='btn text-info'>
												<FontAwesomeIcon icon={faEdit} />
											</Link>
											<DeleteModal user={user} />
										</div>
									</td>
								</tr>
							);
						})}
					</table>
				</div>
			</div>
		</>
	);
};

export default Users;
