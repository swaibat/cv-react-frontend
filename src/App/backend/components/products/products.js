/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { useMemo, useState } from 'react';
import Product from './redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faEdit } from '@fortawesome/free-solid-svg-icons';
import img from '../../../shared/assets/images/img.png';
import * as timeago from 'timeago.js';
import { Link } from 'react-router-dom';
import DeleteProduct from './product.delete';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'react-ultimate-pagination-bootstrap-4';

const AdminItems = () => {
	const [loading, setLoading] = useState(true);
	const [activePage, setActivePage] = useState(1);
	const [itemsCountPerPage] = useState(10);
	const [products, setProducts] = useState([]);
	const [totalPages, setTotalPages] = useState(1);
	const [currentProducts, setCurrentProducts] = useState({ first: 0, last: itemsCountPerPage });
	const dispatch = useDispatch();
	const payload = useSelector(({ getProducts }) => getProducts.payload);

	useMemo(async () => {
		dispatch(await Product.items());
		setLoading(false);
		payload && setProducts(payload);
		products.length && setTotalPages(Math.ceil(products.length / itemsCountPerPage));
	}, [dispatch, itemsCountPerPage, payload, products.length]);
	const handleChange = pageNumber => {
		console.log(pageNumber);
		const first = itemsCountPerPage * pageNumber - itemsCountPerPage;
		const last = first + itemsCountPerPage;
		setCurrentProducts({ first, last });
		setActivePage(pageNumber);
	};
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
						<tbody>
							<tr className='text-capitalize border-bottom bg-light'>
								<th>Picture</th>
								<th>Name</th>
								<th>price</th>
								<th>created at</th>
								<th>status</th>
								<th className='text-right'>actions</th>
							</tr>
							{products.slice(currentProducts.first, currentProducts.last).map((product, index) => (
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
											<label className='custom-control-label' htmlFor={index} />
										</div>
									</td>
									<td className='text-right pr-2'>
										<div className='btn-group btn-group-sm' role='group' aria-label='First group'>
											<Link className='btn text-info' to={`/admin/product/${product.id}/edit`}>
												<FontAwesomeIcon icon={faEdit} />
											</Link>
											<DeleteProduct product={product} />
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
					{loading && (
						<div className='p-5 m-auto'>
							<div className='spinner-border p-4 text-primary' role='status'>
								<span className='sr-only'>Loading...</span>
							</div>
						</div>
					)}
				</div>
				<Pagination currentPage={activePage} totalPages={totalPages} onChange={handleChange} />
			</div>
		</>
	);
};

export default AdminItems;
