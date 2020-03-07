import React from 'react';

function Update({ data }) {
	return (
		<div
			className='modal fade'
			id='updateModel'
			tabIndex='-1'
			role='dialog'
			aria-labelledby='exampleModalCenterTitle'
			aria-hidden='true'
		>
			<div className='modal-dialog modal-dialog-centered' role='document'>
				<div className='modal-content'>
					<div className='modal-header border-0'>
						<h5 className='modal-title cv-title text-capitalize' id='exampleModalLongTitle'>
							{!data.state.name ? 'Update category' : 'Update sub category'}
						</h5>
						<button type='button' className='close' data-dismiss='modal' aria-label='Close'>
							<span aria-hidden='true'>&times;</span>
						</button>
					</div>
					<form onSubmit={data.handleUpdate}>
						{!data.state.name ? (
							<div className='modal-body'>
								<div className='form-group'>
									<input
										id={data.state.ParentId}
										name='parentname'
										type='text'
										value={data.state.parentname}
										className='form-control rounded-sm'
										onChange={data.handleInput}
									/>
								</div>
							</div>
						) : (
							<div className='modal-body'>
								<div className='form-group'>
									<input
										id={data.state.ParentId}
										type='text'
										value={data.state.parentname}
										className='form-control rounded-sm'
										onChange={data.handleInput}
										disabled
									/>
								</div>
								<div className='form-group'>
									<input
										type='text'
										name='name'
										placeholder='enter sub category'
										value={data.state.name}
										className='form-control rounded-sm'
										onChange={data.handleInput}
									/>
								</div>
							</div>
						)}
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-sm btn-secondary mr-auto'
								data-dismiss='modal'
							>
								Close
							</button>
							<button type='submit' className='btn btn-sm btn-primary'>
								Save
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default Update;
