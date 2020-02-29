import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

function BulkDelete({ data }) {
	return (
		<div
			className='modal fade'
			id='bulkDelete'
			tabindex='-1'
			role='dialog'
			aria-labelledby='bulkDeleteLabel'
			aria-hidden='true'
		>
			<div className='modal-dialog modal-dialog-centered'>
				<div className='modal-content'>
					<div className='modal-header border-0'>
						<h5 className='modal-title cv-title' id='exampleModalLongTitle'>
							{!data.state.name ? 'Delete category' : 'Delete sub category'}
						</h5>
						<button type='button' className='close' data-dismiss='modal' aria-label='Close'>
							<span aria-hidden='true'>&times;</span>
						</button>
					</div>
					<div className='modal-body'>
						<p>Are you sure you wan to delete the following</p>
						<ul>
							{data.state.bulk.map((cat, i) => (
								<li key={i} className='w-100 ml-n2 d-flex align-items-center'>
									<FontAwesomeIcon className='mr-2' icon={faCheckSquare} />
									{cat.split('>')[0]}{' '}
									<small className='text-secondary font-weight-light'> ({cat.split('>')[2]})</small>
									<button className='btn btn-sm text-secondary ml-auto text-center'>
										<FontAwesomeIcon icon={faTimes} />
									</button>
								</li>
							))}
						</ul>
					</div>
					<div className='modal-footer'>
						<button type='button' className='btn btn-sm btn-secondary mr-auto' data-dismiss='modal'>
							Cancel
						</button>
						<button type='button' onClick={data.handleDelete} className='btn btn-sm btn-danger'>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BulkDelete;
