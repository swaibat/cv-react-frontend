import React, { useState } from 'react';
import Products from './redux/actions';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import UseReduxSelector from '../../../shared/helper/use.selector';

const DeleteProduct = ({ product }) => {
	const dispatch = useDispatch();
	const [delStatus, setDelStatus] = useState();
	const handleDelete = async () => {
		dispatch(await Products.deleteProduct(product.id));
		dispatch(await Products.items());
	};
	UseReduxSelector('DeleteProduct', setDelStatus);
	return (
		<>
			<button
				type='button'
				data-toggle='modal'
				data-target={`#deleteModal-${product.id}`}
				className='btn text-danger'
			>
				<FontAwesomeIcon icon={faTrash} />
			</button>
			<div
				className={`modal fade`}
				id={`deleteModal-${product.id}`}
				tabIndex='-1'
				role='dialog'
				aria-labelledby={`deleteModal-${product.id}`}
				aria-hidden='true'
			>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-header border-0'>
							<h5 className='modal-title cv-title' id='exampleModalLongTitle'>
								Delete Product
							</h5>
							<button type='button' className='close' data-dismiss='modal' aria-label='Close'>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='modal-body text-center'>
							<p className='mb-2'>Are you sure you wan to delete</p>
							<p className='text-primary text-capitalize text-truncate'>{product.name}</p>
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-sm btn-secondary mr-auto'
								data-dismiss='modal'
							>
								Cancel
							</button>
							<button type='button' onClick={handleDelete} className='btn btn-sm btn-danger'>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DeleteProduct;
