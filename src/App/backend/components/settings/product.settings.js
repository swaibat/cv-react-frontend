import React from 'react';
// import notify from './../../../../assets/images/alert.svg';

function ProductSettings() {
	return (
		<div
			className='tab-pane bg-white rounded p-3 fade shadow-xs show active'
			id='v-pills-products'
			role='tabpanel'
			aria-labelledby='v-pills-products-tab'
		>
			<form className='h-100'>
				<li className='d-flex justify-content-between py-3 border-bottom'>
					<div className=''>
						<h6>Auto detect countries currency</h6>
						<p className='font-weight-light'>
							these feature automatically detects and converts currency to local currency if
							disabled you will have to add currency manually
						</p>
					</div>
					<div className='custom-control custom-switch'>
						<input
							name='negotiable'
							type='checkbox'
							className='custom-control-input ml-auto'
							id='switch1'
							checked
						/>
						<label className='custom-control-label' htmlFor='switch1' />
					</div>
				</li>
				<li className='d-flex justify-content-between py-3 border-bottom'>
					<div className=''>
						<h6>Auto detect countries currency</h6>
						<p className='font-weight-light'>
							these feature automatically detects and converts currency to local currency if
							disabled you will have to add currency manually
						</p>
					</div>
					<div className='custom-control custom-switch'>
						<input
							name='negotiable'
							type='checkbox'
							className='custom-control-input ml-auto'
							id='switch1'
							checked
						/>
						<label className='custom-control-label' htmlFor='switch1' />
					</div>
				</li>
				<li className='d-flex justify-content-between py-3'>
					<div className=''>
						<h6>Automatic Product Approval</h6>
						<p className='font-weight-light'>
							if you set this on all products will be aproved automatically and visible by everyone
							on your website
						</p>
					</div>
					<div className='custom-control custom-switch'>
						<input
							name='negotiable'
							type='checkbox'
							className='custom-control-input ml-auto'
							id='switch1'
							checked
						/>
						<label className='custom-control-label' htmlFor='switch1' />
					</div>
				</li>
				<div className='form-row'>
					<button type='submit' className='btn btn-primary btn-sm'>
						Save
					</button>
				</div>
			</form>
		</div>
	);
}

export default ProductSettings;
