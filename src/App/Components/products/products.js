/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { products } from '../../../redux/actions/items.action';
import constants from '../../../redux/constants/index';
import Sidenav from '../../Pages/admin/components/sidenav';
import AdminNav from '../../Pages/admin/components/admin.nav.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Pagination from '../pagination';
import img from '../../../assets/images/img.png';
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
		const prods = await products();
		this.setState({ prods: prods.payload.data });
		document.title = 'Products';
	}

	onPageChanged = data => {
		const { prods } = this.state;
		const { currentPage, totalPages, pageLimit } = data;

		const offset = (currentPage - 1) * pageLimit;
		const currentItems = prods.slice(offset, offset + pageLimit);

		this.setState({ currentPage, currentItems, totalPages });
	};

	render() {
		const { prods, currentItems } = this.state;
		const totalItems = prods.length;
		if (totalItems === 0) return null;
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
									{currentItems &&
										currentItems.map((product, index) => {
											return (
												<tr key={index}>
													<td>
														<img className='table-img' src={img} alt='' />
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
													<td className='text-right'>
														<Link
															type='button'
															className='btn text-success btn-sm border'
															to={`/products/${product.id}`}
														>
															<FontAwesomeIcon icon={faExternalLinkAlt} />
														</Link>
														<div
															className='btn-group-vertical btn-group-sm mr-n2'
															role='group'
															aria-label='First group'
														>
															<Link
																className='btn text-primary border-bottom'
																to={`/admin/products/${product.id}/edit`}
															>
																<FontAwesomeIcon icon={faEdit} />
															</Link>
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
							<div className='d-flex flex-row mt-2 align-items-center'>
								<Pagination
									totalRecords={totalItems}
									pageLimit={9}
									pageNeighbours={1}
									onPageChanged={this.onPageChanged}
								/>
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
				type: constants.PRODUCTS_PENDING,
				pending: true,
			}),

		items: async () => dispatch(await products()),
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
