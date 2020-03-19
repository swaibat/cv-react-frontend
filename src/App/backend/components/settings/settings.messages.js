/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class MessageSettings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: '',
			answer: '',
			id: '',
		};
	}
	render() {
		console.log(this.props);
		return (
			<div
				className='tab-pane bg-white text-secondary rounded py-3 px-4 fade shadow-xs show active'
				id='v-pills-settings'
				role='tabpanel'
				aria-labelledby='v-pills-settings-tab'
			>
				<h4 className='text-center font-weight-light'>Message settings</h4>
				<hr />
				<form className='h-100'>
					<li className='d-flex justify-content-between py-3 border-bottom'>
						<div className=''>
							<h6>select user verification type</h6>
							<small className='font-weight-light w-75'>
								user verification can either be by <strong>email</strong> or{' '}
								<strong>phone verification</strong> and phone verification includes{' '}
								<strong>text sms</strong> and <strong>voice calls</strong>
							</small>
						</div>
						<select
							name='verificationType'
							className='form-control custom-control custom-input px-0  w-25'
						>
							<option value='both'>Both phone and email</option>
							<option value='email'>Email</option>
							<option value='phone'>Phone </option>
						</select>
					</li>
					<li className='d-flex justify-content-between py-3 border-bottom'>
						<div className=''>
							<h6>select how to notify your users</h6>
							<small className='font-weight-light w-75'>
								enabling this feature will sennd emails for all the features enabled on{' '}
								<strong>notify settings</strong>
							</small>
						</div>
						<select
							name='notificationType'
							className='form-control custom-control custom-input px-0  w-25'
						>
							<option value='both'>Both phone and email</option>
							<option value='email'>Email</option>
							<option value='phone'>Phone </option>
						</select>
					</li>
					<div className='py-3 d-flex align-items-center justify-content-between'>
						<div className=''>
							<h4>Messages Api keys</h4>
							<p className='font-weight-light'>
								You can get sms api keys from <a href='https://twilio.com'>Twilio</a> and add the
								keys below
							</p>
						</div>
					</div>
					<div className='form-group form-row'>
						<label htmlFor='inputPassword' className='col-md-7 col-form-label'>
							Twilo accountSid
						</label>
						<div className='col-md-5'>
							<input
								name='twilo_accountSid'
								className='form-control custom-control custom-input px-0'
								placeholder='enter your accountSid'
							/>
						</div>
					</div>
					<div className='form-group form-row'>
						<label htmlFor='inputPassword' className='col-md-7 col-form-label'>
							Twilo authToken
						</label>
						<div className='col-md-5'>
							<input
								name='twilo_authToken'
								className='form-control custom-control custom-input px-0'
								placeholder='enter your authToken'
							/>
						</div>
					</div>
					<div className='form-group form-row'>
						<label htmlFor='inputPassword' className='col-md-7 col-form-label'>
							Twilo serviceId
						</label>
						<div className='col-md-5'>
							<input
								name='twilo_serviceId'
								className='form-control custom-control custom-input px-0'
								placeholder='enter your serviceId'
							/>
						</div>
					</div>
					<div className='form-row'>
						<button type='submit' className='btn btn-primary btn-sm'>
							Save
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default MessageSettings;
