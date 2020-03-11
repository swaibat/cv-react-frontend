/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Pages from './redux/actions';
import constants from '../../../shared/redux/constants';
import Sidenav from '../../components/navigation/sidenav';
import AdminNav from '../../components/navigation/admin.nav.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import img from '../../../shared/assets/images/img.png';
import * as timeago from 'timeago.js';

class Page extends Component {
	state = {
		prods: [],
		currentCountries: [],
		currentPage: null,
		totalPages: null,
	};

	componentDidMount() {
		this.props.get();
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
						<h5 className='cv-title title-light'>Products</h5>
						<div className='w-100 bg-default p-3 mt-4 rounded'>
							<button
								className='btn btn-sm btn-success add-btn shadow-xs'
								data-toggle='modal'
								data-target='#exampleModalCenter'
								onClick={this.handleClick}
							>
								<FontAwesomeIcon className='mr-2' icon={faPlus} />
								Add Product
							</button>
							<div className='row mt-n2 min-vh-70 prouct-table'>
								<table>
									<tr className='text-capitalize'>
										<th>Picture</th>
										<th>Name</th>
										<th>price</th>
										<th>created at</th>
										<th>status</th>
										<th>actions</th>
									</tr>
									{payload &&
										payload.data.map((page, index) => {
											return (
												<tr key={index}>
													<td>
														<img className='table-img' src={img} alt='' />
													</td>
													<td className='text-capitalize'>{page.company}</td>
													<td>{page.CategoryId}</td>
													<td>
														<small>{timeago.format(new Date(page.createdAt))}</small>
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
														<div
															className='btn-group-vertical btn-group-sm mr-n2'
															role='group'
															aria-label='First group'
														>
															<button type='button' className='btn text-primary border-bottom'>
																<FontAwesomeIcon icon={faEdit} />
															</button>
															<button type='button' className='btn text-secondary'>
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
				type: constants.PAGES_PENDING,
				pending: true,
			}),

		get: async () => dispatch(await Pages.getPages()),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.getPages.payload,
		pending: state.getPages.pending,
		error: state.getPages.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
