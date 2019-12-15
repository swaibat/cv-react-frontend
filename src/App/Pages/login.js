import React, { Component } from 'react';
import constants from '../../redux/constants/index';
import { login } from '../../redux/actions/login.action';
import { connect } from 'react-redux';

class Login extends Component {
	handleInput = e => {
		this.setState({
			[e.target.type]: e.target.value,
			loading: true,
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const { email, password } = this.state;
		const user = { email, password };
		this.props.init();
		this.props.login(user);
	};
	render() {
		const { payload, error, pending } = this.props;
		payload && payload.status === 200 && localStorage.setItem('cv-token', payload.data.token);
		return (
			<main className='d-flex flex-column align-items-center vh-100'>
				<form className='form-signin font-weight-light' onSubmit={this.handleSubmit}>
					<h4 className='text-center mb-4 font-weight-light'>Login</h4>
					<div className='text-center'>
						<button className='btn rounded-sm btn-danger font-weight-light'>login with Google</button>
						<button className='btn rounded-sm facebook ml-3 font-weight-light'>login with Facebook</button>
					</div>

					<hr className='mb-4' />
					<div class='form-group '>
						<input type='email' class='form-control custom-input font-weight-light' onChange={this.handleInput} required />
						<label class='form-control-placeholder font-weight-light' for='email'>
							Email address
						</label>
					</div>
					<div class='form-group '>
						<input type='password' class='form-control custom-input' onChange={this.handleInput} required />
						<label class='form-control-placeholder font-weight-light' for='password'>
							Password
						</label>
					</div>

					<div className='checkbox mb-3 font-weight-light'>
						<label>
							<input className='mr-2' type='checkbox' value='remember-me' /> Keep me logged in
						</label>
					</div>
					{pending ? (
						<button className='btn font-weight-light rounded-sm btn-primary btn-block' type='submit' disabled>
							<span class='spinner-border spinner-border-sm mr-2'></span>Logging in....
						</button>
					) : (
						<button className='btn font-weight-light rounded-sm btn-primary btn-block' type='submit'>
							Login
						</button>
					)}
				</form>
			</main>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		init: () =>
			dispatch({
				type: constants.LOGIN_PENDING,
				pending: true,
			}),

		login: async user => dispatch(await login(user)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.LoginReducer.payload,
		pending: state.LoginReducer.pending,
		error: state.LoginReducer.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
