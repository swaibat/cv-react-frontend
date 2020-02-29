/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import Dropzone from 'react-dropzone-uploader';
// import notify from './../../../../assets/images/alert.svg';

function GeneralSettings() {
	return (
		<div
			className='tab-pane bg-white rounded p-3 fade shadow-xs  '
			id='v-pills-home'
			role='tabpanel'
			aria-labelledby='v-pills-home-tab'
		>
			<form>
				<div className='form-row'>
					<div className='form-group col-md-12'>
						<label htmlFor='inputEmail4'>Site Name</label>
						<input type='email' className='form-control' id='inputEmail4' />
					</div>
					<div className='form-group col-md-12'>
						<label htmlFor='inputPassword4'>Site Description</label>
						<textarea className='form-control' placeholder='enter description'></textarea>
					</div>
				</div>
				<div className='form-row'>
					<div className='form-group col-md-4'>
						<label htmlFor='inputZip'>Upload Favicon</label>
						<div className='input-group'>
							<Dropzone accept='image/*' />
						</div>
					</div>
					<div className='form-group col-md-4'>
						<label htmlFor='inputZip'>Upload Light Logo</label>
						<div className='input-group'>
							<Dropzone accept='image/*' />
						</div>
					</div>
					<div className='form-group col-md-4'>
						<label htmlFor='inputZip'>Upload Dark Logo</label>
						<div className='input-group'>
							<Dropzone accept='image/*' />
						</div>
					</div>
				</div>
				<div className='form-row'>
					<div className='form-group col-md-4'>
						<label htmlFor='inputAddress2'>Company Address</label>
						<input
							type='text'
							className='form-control'
							id='inputAddress2'
							placeholder='Apartment, studio, or floor'
						/>
					</div>
					<div className='form-group col-md-4'>
						<label htmlFor='inputAddress'>Contact Email</label>
						<input
							type='text'
							className='form-control'
							id='contact-email'
							placeholder='1234 Main St'
						/>
					</div>
					<div className='form-group col-md-4'>
						<label htmlFor='inputAddress'>Contact Phone</label>
						<input
							type='text'
							className='form-control'
							id='contact-phone'
							placeholder='1234 Main St'
						/>
					</div>
				</div>
				<div className='form-row'>
					<div className='form-group col-md-4'>
						<label htmlFor='inputCity'>Facebook Page</label>
						<input type='text' className='form-control' id='inputCity' />
					</div>
					<div className='form-group col-md-4'>
						<label htmlFor='inputState'>Twitter Page</label>
						<select id='inputState' className='form-control'>
							<option defaultValue>Choose...</option>
							<option>...</option>
						</select>
					</div>
					<div className='form-group col-md-4'>
						<label htmlFor='inputZip'>Youtube Channel</label>
						<input type='text' className='form-control' id='inputZip' />
					</div>
				</div>
				<button type='submit' className='btn btn-primary btn-sm'>
					Sign in
				</button>
			</form>
		</div>
	);
}

export default GeneralSettings;
