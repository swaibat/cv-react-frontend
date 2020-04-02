/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../../../backend/components/products/redux/actions';
import constants from '../../../shared/redux/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import img from '../../../shared/assets/images/img.png';
import * as timeago from 'timeago.js';
import { Link } from 'react-router-dom';
import DeleteModal from './product.delete';

class AdminItems extends Component {
	constructor(props) {
		super(props);
		this.state = {
			prods: [],
			currentItems: [],
			actionProduct: {},
			currentPage: null,
			totalPages: null,
		};
		// this.onPageChanged = this.onPageChanged.bind(this);
	}

	componentDidMount() {
		this.props.items();
		document.title = 'Products';
	}

	handleClick(data) {
		this.setState({ actionProduct: data });
	}

	render() {
		const { payload } = this.props;
		return (
			<>
				<div className='w-100 bg-white p-3 mt-4 rounded'>
					<div className='d-flex justify-content-between align-items-start'>
						<Link to='/admin/products/create' className='btn btn-sm btn-success mb-2 shadow-xs'>
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
							<tr className='text-capitalize border-bottom bg-light'>
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
											<td className='text-capitalize vw-50'>
												<span className='text-truncate w-50'>{product.name}</span>
											</td>
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
													<Link className='btn text-info' to={`/admin/products/${product.id}/edit`}>
														<FontAwesomeIcon icon={faEdit} />
													</Link>
													<button
														type='button'
														data-toggle='modal'
														data-target='#deleteModal'
														className='btn text-danger'
														onClick={this.handleClick.bind(this, product)}
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
					{/* <div className='d-flex flex-row mt-2 align-items-center'>
								<Pagination
									totalRecords={totalItems}
									pageLimit={9}
									pageNeighbours={1}
									onPageChanged={this.onPageChanged}
								/>
							</div> */}
				</div>

				<DeleteModal {...this} />
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
