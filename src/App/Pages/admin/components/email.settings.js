import React from 'react';
import notify from './../../../../assets/images/alert.svg';

function EmailSettings() {
	return (
		<div className='tab-pane bg-white rounded px-4  py-2 fade shadow-xs' id='v-pills-messages' role='tabpanel' aria-labelledby='v-pills-messages-tab'>
			{/* <div className='cv-title pb-0'>Email settings</div>
			<form className='mt-3'>
				<div className='form-row border-bottom'>
					<div className='form-group col-md-5'>
						<label for='inputEmail4'>Email type</label>
						<select type='email' className='form-control' id='inputEmail4' placeholder='Email'>
							<option>Smtp</option>
						</select>
					</div>
					<div className='form-group col-md-5'>
						<label for='inputEmail4'>Server Name</label>
						<select type='email' className='form-control' id='inputEmail4' placeholder='Email'>
							<option>smtp.gmail.com</option>
						</select>
					</div>
					<div className='form-group col-md-2'>
						<label for='inputEmail4'>Port</label>
						<select type='email' className='form-control' id='inputEmail4' placeholder='Email'>
							<option>465</option>
							<option>587</option>
						</select>
					</div>
					<div className='form-group col-md-5'>
						<label for='inputEmail4'>Smtp Authentication Email</label>
						<input type='email' placeholder='enter sender email' className='form-control' id='inputEmail4' />
					</div>
					<div className='form-group col-md-5'>
						<label for='inputEmail4'>Smtp Authentication Password</label>
						<input type='password' placeholder='enter sender Password' className='form-control' id='inputEmail4' />
					</div>
					<div className='form-group col-md-2'>
						<label for='inputEmail4'>Send Security</label>
						<select type='email' className='form-control' id='inputEmail4' placeholder='Email'>
							<option>false</option>
							<option>true</option>
						</select>
					</div>
				</div> */}
			{/* <div className='form-row'>
					<button type='submit' className='btn btn-primary btn-sm'>
						send test Email
					</button>
					<button type='submit' className='btn btn-primary btn-sm ml-auto'>
						Save
					</button>
				</div> */}
			{/* </form> */}
			<div className='cv-title mt-3 mb-4'>Messages settings</div>
			<div className='py-3 d-flex align-items-center justify-content-between border-top border-bottom'>
				<div className='d-flex'>
					<img className='mr-3' height='60' src={notify} alt='notify' />
					<span>
						<h4>Enable desktop Notification</h4>
						<p className='font-weight-light'>Never miss any important updates! enable desktop notification even if your not on out website</p>
					</span>
				</div>
				<div className='custom-control custom-switch'>
					<input name='negotiable' type='checkbox' className='custom-control-input ml-auto' id='switch1' checked />
					<label className='custom-control-label' for='switch1' />
				</div>
			</div>
			<div className='py-3 d-flex align-items-center justify-content-between border-bottom'>
				<div className=''>
					<h4>Dashboard Notification</h4>
					<p className='font-weight-light'>Turn the type fo notifications you want to see on your dashboard incase of any operation</p>
				</div>
			</div>
			<li className='border-bottom pt-3'>
				<h6>General</h6>
				<div className='d-flex justify-content-between'>
					<p className='font-weight-light'>User signs up as a member</p>
					<div className='custom-control custom-switch'>
						<input name='negotiable' type='checkbox' className='custom-control-input ml-auto' id='switch1' checked />
						<label className='custom-control-label' for='switch1' />
					</div>
				</div>
				<div className='d-flex justify-content-between'>
					<p className='font-weight-light'>user posts a new item</p>
					<div className='custom-control custom-switch'>
						<input name='negotiable' type='checkbox' className='custom-control-input ml-auto' id='switch1' checked />
						<label className='custom-control-label' for='switch1' />
					</div>
				</div>
				<div className='d-flex justify-content-between'>
					<p className='font-weight-light'>user creates a new page</p>
					<div className='custom-control custom-switch'>
						<input name='negotiable' type='checkbox' className='custom-control-input ml-auto' id='switch1' checked />
						<label className='custom-control-label' for='switch1' />
					</div>
				</div>
			</li>
			<li className='pt-3'>
				<h6>Price and Quotes</h6>
				<div className='d-flex justify-content-between'>
					<p className='font-weight-light'>scheduled social post is hared</p>
					<div className='custom-control custom-switch'>
						<input name='negotiable' type='checkbox' className='custom-control-input ml-auto' id='switch1' checked />
						<label className='custom-control-label' for='switch1' />
					</div>
				</div>
				<div className='d-flex justify-content-between'>
					<p className='font-weight-light'>visitor signs up as a member</p>
					<div className='custom-control custom-switch'>
						<input name='negotiable' type='checkbox' className='custom-control-input ml-auto' id='switch1' checked />
						<label className='custom-control-label' for='switch1' />
					</div>
				</div>
			</li>
		</div>
	);
}

export default EmailSettings;
