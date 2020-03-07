/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../../../backend/components/products/redux/actions';
import constants from '../../../shared/redux/constants';
import Sidenav from '../navigation/sidenav';
import AdminNav from '../navigation/admin.nav.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
// import Pagination from '../../../components/pagination';
import img from '../../../shared/assets/images/img.png';
import * as timeago from 'timeago.js';
import { Link } from 'react-router-dom';

class AdminItems extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prods: [],
			currentItems: [],
			currentPage: null,
			totalPages: null,
		};
		// this.onPageChanged = this.onPageChanged.bind(this);
	}

	async componentDidMount() {
		this.props.items();
		document.title = 'Products';
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
							<Link className='btn btn-sm btn-success mb-2 shadow-xs' to='/admin/products/create'>
								<FontAwesomeIcon className='mr-2' icon={faPlus} />
								Add Product
							</Link>
							<div className='row mt-n2 min-vh-70 prouct-table p-2'>
								<table className='p-2'>
									<tr className='text-capitalize'>
										<th>Picture</th>
										<th>Name</th>
										<th>price</th>
										<th>created at</th>
										<th>status</th>
										<th className='text-right'>actions</th>
									</tr>
									{payload &&
										payload.data.map((product, index) => {
											return (
												<tr key={index}>
													<td>
														<span className='pf-grab' />
														<input type='checkbox' className='mr-2 border-right' />
														<span className='vl mr-2' />
														<img className='table-img border-left' src={img} alt='' />
													</td>
													<td className='text-capitalize'>{product.name}</td>
													<td>{product.price}</td>
													<td>
														<small>{timeago.format(new Date(product.createdAt))}</small>
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
															<Link
																className='btn btn-blue'
																to={`/admin/products/${product.id}/edit`}
															>
																<FontAwesomeIcon icon={faEdit} />
															</Link>
															<button type='button' className='btn btn-danger'>
																<FontAwesomeIcon icon={faTrash} />
															</button>
														</div>
													</td>
												</tr>
											);
										})}
								</table>
							</div>
							{/* <div className='d-flex flex-row mt-2 align-items-center'>
								<Pagination
									totalRecords={totalItems}
									pageLimit={9}
									pageNeighbours={1}
									onPageChanged={this.onPageChanged}
								/>
							</div> */}
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
				type: constants.PRODUCTS_PENDING,
				pending: true,
			}),

		items: async () => dispatch(await Products.products()),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.getProducts.payload,
		pending: state.getProducts.pending,
		error: state.getProducts.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminItems);
