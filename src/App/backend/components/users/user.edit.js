import React, { Component } from 'react';
import TextInput from '../../../shared/components/text-input';
import Select from '../../../shared/components/select-input';

export default class EditUser extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		// this.handleChange = this.handleChange.bind(this);
	}
	render() {
		const {
			state: { actionUser },
		} = this.props;
		return (
			<div
				className='modal fade'
				id='editUserModal'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='ditUserModalTitle'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-lg modal-dialog-centered' role='document'>
					<div className='modal-content'>
						<div className='modal-header border-0'>
							<h5 className='modal-title cv-title' id='exampleModalLongTitle'>
								Create User
							</h5>
							<button type='button' className='close' data-dismiss='modal' aria-label='Close'>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<form className='cv-forms mt-n3' autoComplete='off'>
							<div className='form-row modal-body p-4'>
								<div className='col-md-6'>
									<TextInput
										{...{
											label: 'firstname',
											name: 'firstName',
											type: 'text',
											value: actionUser.firstName,
											icon: { name: 'person-outline' },
											onChange: this.handleChange,
										}}
									/>
								</div>
								<div className='col-md-6'>
									<TextInput
										{...{
											label: 'lastname',
											name: 'lastname',
											type: 'text',
											value: actionUser.lastName,
											icon: { name: 'person-add-outline' },
										}}
									/>
								</div>
								<div className='col-md-9'>
									<TextInput
										{...{
											label: 'email address',
											name: 'email',
											type: 'email',
											value: actionUser.email,
											icon: { name: 'mail-outline' },
										}}
									/>
								</div>
								{/* <div className='col-md-3'>
									<div className='cv-form-group form-group mt-4'>
										<Select
											title='Select user role'
											name='role'
											type='text'
											value={actionUser && actionUser.Role.name}
											data={[
												{ id: 1, name: 'admin' },
												{ id: 2, name: 'vendor' },
												{ id: 2, name: 'user' },
											]}
											pam={this}
										/>
									</div>
								</div> */}
								<div className='col-md-3'>
									<div className='cv-form-group form-group mt-4'>
										<Select
											{...{
												title: 'Select user role',
												name: 'role',
												type: 'text',
												onChange: this.handleChange,
												data: [
													{ id: 1, name: 'admin' },
													{ id: 2, name: 'vendor' },
													{ id: 2, name: 'user' },
												],
												value: actionUser && actionUser.Role.name,
												pam: this,
											}}
										/>
									</div>
								</div>
								<div className='col-md-7'>
									<TextInput
										{...{
											label: 'physical address',
											name: 'address',
											type: 'text',
											value: actionUser.address,
											icon: { name: 'locate-outline' },
										}}
									/>
								</div>
								<div className='col-md-5'>
									<TextInput
										{...{
											label: 'Telephone number',
											name: 'telephone',
											type: 'number',
											value: actionUser.telephone,
											icon: { name: 'call-outline' },
										}}
									/>
								</div>
								<div className='col-md-12'>
									<TextInput
										{...{
											label: 'password',
											name: 'Password',
											type: 'password',
											value: actionUser.Password,
											icon: { name: 'lock-closed-outline' },
											iconRight: { name: 'eye-outline' },
										}}
									/>
								</div>
							</div>
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
}
