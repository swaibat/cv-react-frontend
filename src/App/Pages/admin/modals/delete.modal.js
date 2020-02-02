import React from 'react';

function Delete({ data }) {
	return (
		<div className='modal fade bd-example-modal-sm' tabindex='-1' role='dialog' aria-labelledby='mySmallModalLabel' aria-hidden='true'>
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
						<p>
							Are you sure you wan to delete <emp className='text-primary text-capitalize'>{data.state.name || data.state.parentname}</emp>
						</p>
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

export default Delete;
