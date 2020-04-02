import React, { Component } from 'react';
import TextInput from '../../../shared/components/text-input';
import Select from '../../../shared/components/select-input';
import { token } from '../../../shared/helper';
import constants from '../../../shared/redux/constants';
import Auth from '../../../shared/components/auth/redux/actions';
import Local from '../../../shared/redux/locations/actions';
import { connect } from 'react-redux';

class CreateUser extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleChange(event) {
		event.preventDefault();
		const {
			target: { value, name },
		} = event;
		this.setState({ [name]: value });
	}
	handleSubmit(event) {
		event.preventDefault();
		this.props.createUser(this.state, token);
	}
	render() {
		return (
			<div
				className='modal fade'
				id='addUserModal'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='addUserModalTitle'
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
						<form className='cv-forms mt-n3' autoComplete='off' onSubmit={this.handleSubmit}>
							<div className='form-row modal-body p-4'>
								<div className='col-md-6'>
									<TextInput
										{...{
											label: 'firstname',
											name: 'firstName',
											type: 'text',
											icon: { name: 'person-outline' },
											onChange: this.handleChange,
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
											onChange: this.handleChange,
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
											onChange: this.handleChange,
										}}
									/>
								</div>
								<div className='col-md-3'>
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
											pam: this,
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
											onChange: this.handleChange,
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
											onChange: this.handleChange,
										}}
									/>
								</div>
								<div className='col-md-12'>
									<TextInput
										{...{
											label: 'password',
											name: 'password',
											type: 'password',
											icon: { name: 'lock-closed-outline' },
											iconRight: { name: 'eye-outline' },
											onChange: this.handleChange,
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

const mapDispatchToProps = dispatch => {
	return {
		init: () =>
			dispatch({
				type: constants.REGISTER_PENDING,
				pending: true,
			}),
		loading: () =>
			dispatch({
				type: constants.CLIENT_INFO_PENDING,
				pending: true,
			}),
		createUser: async (data, token) => dispatch(await Auth.register(data, token)),
		clientInfo: async () => dispatch(await Local.getClientInfo()),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.RegisterReducer.payload,
		pending: state.RegisterReducer.pending,
		error: state.RegisterReducer.error,
		clientPayload: state.clentInfo.payload,
		clientPending: state.clentInfo.pending,
		clientError: state.clentInfo.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
