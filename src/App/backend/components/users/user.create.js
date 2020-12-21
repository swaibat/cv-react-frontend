import React, { useState } from 'react';
import TextInput from '../../../shared/components/text-input';
import Select from '../../../shared/components/select-input';
import Auth from '../../../shared/components/auth/redux/actions';
import Local from '../../../shared/redux/locations/actions';
import { useDispatch } from 'react-redux';

const CreateUser = () => {
	const dispatch = useDispatch();
	const [viewPassword, setViewPassword] = useState(false);
	const [values, setValues] = useState({});

	const handleChange = ({ target }) => {
		setValues({ ...values, [target.name]: target.value });
	};
	const handleSubmit = async event => {
		event.preventDefault();
		dispatch(await Auth.register(values));
		dispatch(await Local.getClientInfo());
	};
	const handleToggle = () => {
		setViewPassword(!viewPassword);
	};
	return (
		<form className='card mt-4' onSubmit={handleSubmit}>
			<div className='card-header border-0'>
				<h5 className='card-title cv-title'>Create User</h5>
			</div>
			<div className='card-body cv-forms mt-n3'>
				<div className='form-row modal-body p-4'>
					<div className='col-md-6'>
						<TextInput
							{...{
								label: 'firstname',
								name: 'firstName',
								type: 'text',
								icon: { name: 'person-outline' },
								onChange: handleChange,
							}}
						/>
					</div>
					<div className='col-md-6'>
						<TextInput
							{...{
								label: 'lastname',
								name: 'lastName',
								type: 'text',
								icon: { name: 'person-add-outline' },
								onChange: handleChange,
							}}
						/>
					</div>
					<div className='col-md-9'>
						<TextInput
							{...{
								label: 'email address',
								name: 'email',
								type: 'email',
								icon: { name: 'mail-outline' },
								onChange: handleChange,
							}}
						/>
					</div>
					<div className='col-md-3'>
						<Select
							{...{
								title: 'Select user role',
								name: 'roleId',
								type: 'text',
								onChange: handleChange,
								data: [
									{ id: 1, name: 'admin' },
									{ id: 2, name: 'vendor' },
									{ id: 2, name: 'user' },
								],
								// pam: this,
							}}
						/>
					</div>
					<div className='col-md-7'>
						<TextInput
							{...{
								label: 'physical address',
								name: 'address',
								type: 'text',
								icon: { name: 'locate-outline' },
								onChange: handleChange,
							}}
						/>
					</div>
					<div className='col-md-5'>
						<TextInput
							{...{
								label: 'Telephone number',
								name: 'telephone',
								type: 'number',
								icon: { name: 'call-outline' },
								onChange: handleChange,
							}}
						/>
					</div>
					<div className='col-md-6'>
						<TextInput
							{...{
								label: 'company',
								name: 'company',
								type: 'text',
								icon: { name: 'briefcase-outline' },
								onChange: handleChange,
							}}
						/>
					</div>
					<div className='col-md-6'>
						<TextInput
							{...{
								label: 'password',
								name: 'password',
								type: viewPassword ? 'text' : 'password',
								icon: { name: 'lock-closed-outline' },
								iconRight: {
									name: viewPassword ? 'eye-off-outline' : 'eye-outline',
									onClick: handleToggle,
								},
								onChange: handleChange,
							}}
						/>
					</div>
				</div>
			</div>
			<div className='card-footer d-flex'>
				<button type='button' className='btn btn-sm btn-secondary mr-auto'>
					Close
				</button>

				<button type='submit' className='btn btn-sm btn-primary'>
					Save
				</button>
			</div>
		</form>
	);
};

export default CreateUser;
