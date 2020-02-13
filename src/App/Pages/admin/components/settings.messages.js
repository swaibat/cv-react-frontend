/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import notify from './../../../../assets/images/alert.svg';
import Compare from '../../../../helper/comapre.changes';
import { Input } from 'react-dropzone-uploader';

function ProductSettings({ data }) {
	const { state } = data;
	const { payload } = data.props;

	const changes = Compare(state, payload.data);
	return (
		<div className='tab-pane bg-white text-secondary rounded py-3 px-4 fade shadow-xs show active' id='v-pills-settings' role='tabpanel' aria-labelledby='v-pills-settings-tab'>
			<h4 className='text-center font-weight-light'>Message settings</h4>
			<hr />
			<form className='h-100' onSubmit={data.handleSubmit}>
				<li className='d-flex justify-content-between py-3 border-bottom'>
					<div className=''>
						<h6>select user verification type</h6>
						<small className='font-weight-light w-75'>
							user verification can either be by <strong>email</strong> or <strong>phone verification</strong> and phone verification includes <strong>text sms</strong> and{' '}
							<strong>voice calls</strong>
						</small>
					</div>
					<select className='form-control custom-control custom-input px-0  w-25'>
						<option>Both phone and email</option>
						<option>Email</option>
						<option>Phone </option>
					</select>
				</li>
				<li className='d-flex justify-content-between py-3 border-bottom'>
					<div className=''>
						<h6>Enable email notifications</h6>
						<small className='font-weight-light'>
							enabling this feature will sennd emails for all the features enabled on <strong>notify settings</strong>
						</small>
					</div>
					<div className='custom-control custom-switch'>
						<input name='autoCurrency' checked={state.autoCurrency} type='checkbox' className='custom-control-input ml-auto' id='autoCurrency' onChange={data.handleInput} />
						<label className='custom-control-label' for='autoCurrency' />
					</div>
				</li>
				<li className='d-flex justify-content-between py-3 border-bottom'>
					<div className=''>
						<h6>Enable Phone notifications</h6>
						<small className='font-weight-light'>
							enabling this feature will sennd emails for all the features enabled on <strong>notify settings</strong>
						</small>
					</div>
					<div className='custom-control custom-switch'>
						<input name='currencyFlagDisplay' checked={state.currencyFlagDisplay} type='checkbox' className='custom-control-input ml-auto' id='currencyFlagDisplay' onChange={data.handleInput} />
						<label className='custom-control-label' for='currencyFlagDisplay' />
					</div>
				</li>
				<div className='py-3 d-flex align-items-center justify-content-between'>
					<div className=''>
						<h4>Messages Api keys</h4>
						<p className='font-weight-light'>
							You can get sms api keys from <a href='https://twilio.com'>Twilio</a> and add the keys below
						</p>
					</div>
				</div>
				<div className='form-group form-row'>
					<label for='inputPassword' className='col-md-7 col-form-label'>
						Twilo accountSid
					</label>
					<div className='col-md-5'>
						<input className='form-control custom-control custom-input px-0' placeholder='enter your accountSid' />
					</div>
				</div>
				<div className='form-group form-row'>
					<label for='inputPassword' className='col-md-7 col-form-label'>
						Twilo authToken
					</label>
					<div className='col-md-5'>
						<input className='form-control custom-control custom-input px-0' placeholder='enter your authToken' />
					</div>
				</div>
				<div className='form-group form-row'>
					<label for='inputPassword' className='col-md-7 col-form-label'>
						Twilo serviceId
					</label>
					<div className='col-md-5'>
						<input className='form-control custom-control custom-input px-0' placeholder='enter your serviceId' />
					</div>
				</div>
				<div className='form-row'>
					<button type='submit' className='btn btn-primary btn-sm' disabled={!changes}>
						Save
					</button>
					{!data.props.updatePayload && changes && <span className='badge badge-success position-absolute ml-5 mt-n1'>1+ changes</span>}
				</div>
			</form>
		</div>
	);
}

export default ProductSettings;
