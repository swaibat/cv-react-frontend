/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { products } from '../../../redux/actions/items.action';
import constants from '../../../redux/constants/index';
import Sidenav from './components/sidenav';
import AdminNav from './components/admin.nav.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import Pagination from '../../Components/pagination';
import img from '../../../assets/images/img.png';
import * as timeago from 'timeago.js';

class AdminItems extends Component {
	state = {
		prods: [],
		currentCountries: [],
		currentPage: null,
		totalPages: null,
	};

	async componentDidMount() {
		this.props.items();
		const prods = await products();
		this.setState({ prods: prods.payload.data });
	}

	onPageChanged = data => {
		const { prods } = this.state;
		const { currentPage, totalPages, pageLimit } = data;

		const offset = (currentPage - 1) * pageLimit;
		const currentCountries = prods.slice(offset, offset + pageLimit);

		this.setState({ currentPage, currentCountries, totalPages });
	};

	render() {
		const { prods, currentCountries } = this.state;
		const totalCountries = prods.length;

		if (totalCountries === 0) return null;
		return (
			<>
				<Sidenav />
				<div className='header-bg' />
				<main className='content-wrapper d-flex flex-column align-items-center min-h-display'>
					<AdminNav />
					<div className='container-fluid mt-n2'>
						<h5 className='cv-title title-light'>Products</h5>
						<div className='w-100 bg-default p-3 mt-4 rounded'>
							<button className='btn btn-sm btn-success add-btn shadow-xs' data-toggle='modal' data-target='#exampleModalCenter' onClick={this.handleClick}>
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
									{currentCountries &&
										currentCountries.map((product, index) => {
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
															<input name='negotiable' type='checkbox' className='custom-control-input custom-control-input-lg' id={index} />
															<label className='custom-control-label' for={index} />
														</div>
													</td>
													<td className='text-right'>
														<div className='btn-group-vertical btn-group-sm mr-n2' role='group' aria-label='First group'>
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
							<div className='d-flex flex-row mt-2 align-items-center'>
								<Pagination totalRecords={totalCountries} pageLimit={6} pageNeighbours={1} onPageChanged={this.onPageChanged} />
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
