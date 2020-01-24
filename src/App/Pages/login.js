import React, { Component } from 'react';
import constants from '../../redux/constants/index';
import { login } from '../../redux/actions/login.action';
import { connect } from 'react-redux';
import { Icon } from '@iconify/react';
import eye from '@iconify/icons-mdi/eye';
import eyeClose from '@iconify/icons-mdi/eye-off';
import lock from '@iconify/icons-mdi/lock';
import email from '@iconify/icons-mdi/envelope';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Token, { setToken } from '../../helper';
import { Redirect } from 'react-router';
import Header from './../Components/Header';
import Footer from './../Components/Footer';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false,
		};

		this.toggleMenu = this.toggleMenu.bind(this);
	}
	toggleMenu() {
		this.setState({ visible: !this.state.visible });
	}
	handleInput = e => {
		const { type, value } = e.target;
		this.setState({ [type]: value });
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
		const { visible } = this.state;
		if (payload && payload.status === 200) {
			setToken(payload.data.token);
			window.location.reload();
		}
		return (
			<>
				<Header />
				<main className='d-flex flex-column align-items-center min-vh-85'>
					{Token ? <Redirect to='/' /> : ''}
					<div className='container m-auto'>
						<div className='row justify-content-sm-center'>
							<div className='col-sm-6 col-md-5'>
								<div className='card text-center'>
									<div className='card-header bg-white'>
										<span className='card-title'>Login</span>
									</div>
									<div className='card-body'>
										<img src='https://placehold.it/75x75' alt='logo' className='mb-3 rounded' />

										<form className='form-signin font-weight-light rounded-sm m-lg-auto' onSubmit={this.handleSubmit}>
											{error && (
												<div className='alert alert-danger rounded-sm text-center scale-in-ver-center' role='alert'>
													{error.message}
												</div>
											)}

											<div className='d-flex justify-content-center'>
												<button className='social-btns text-danger btn rounded border'>
													<FontAwesomeIcon icon={faGoogle} />
												</button>
												<button className='social-btns btn rounded ml-3 facebook border'>
													<FontAwesomeIcon icon={faFacebookF} />
												</button>
												<button className='social-btns btn twitter rounded border'>
													<FontAwesomeIcon icon={faTwitter} />
												</button>
											</div>

											<hr className='my-4' />
											<div className='input-group form-group mb-3'>
												<div className='input-group-prepend rounded-0'>
													<span className='input-group-text rounded-0 bg-transparent p-0 border-0 text-secondary'>
														<Icon icon={email} />
													</span>
												</div>
												<input type='email' className='form-control custom-input' placeholder='email' onChange={this.handleInput} required />
												<div className='input-group-append'>
													<span className='btn p-0 border-0 my-auto invisible'>
														<Icon icon={lock} />
													</span>
												</div>
											</div>
											<div className='input-group form-group mb-3'>
												<div className='input-group-prepend rounded-0'>
													<span className='input-group-text rounded-0 bg-transparent p-0 border-0 text-secondary'>
														<Icon icon={lock} />
													</span>
												</div>
												<input type={visible ? 'text' : 'password'} className='form-control custom-input' placeholder='password' onChange={this.handleInput} required />
												<div className='input-group-append'>
													<span onClick={this.toggleMenu} className='btn p-0 border-0 my-auto text-secondary'>
														<Icon icon={visible ? eyeClose : eye} />
													</span>
												</div>
											</div>
											<div className='checkbox mb-3 font-weight-light'>
												<label>
													<input className='mr-2' type='checkbox' value='remember-me' /> Keep me logged in
												</label>
											</div>
											{pending ? (
												<button className='btn font-weight-light rounded-sm btn-primary btn-block' type='submit' disabled>
													<span className='spinner-border spinner-border-sm mr-2'></span>Logging in....
												</button>
											) : (
												<button className='btn font-weight-light rounded-sm btn-primary btn-block' type='submit'>
													Login
												</button>
											)}
											<div className='w-100 text-center mt-3'>
												<a href='/password'>Forgot password</a>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
				<Footer />
			</>
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
