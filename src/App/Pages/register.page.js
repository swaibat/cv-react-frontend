import React, { Component } from 'react';
import constants from '../../redux/constants/index';
import { register } from '../../redux/actions/register.action';
import { connect } from 'react-redux';
import { Icon } from '@iconify/react';
import lock from '@iconify/icons-mdi/lock';
import email from '@iconify/icons-mdi/envelope';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faCheck } from '@fortawesome/free-solid-svg-icons';
import RegisterSuccess from '../Pages/register.success.page';
import Token, { setToken } from '../../helper';
import { Redirect } from 'react-router';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false,
		};
	}
	handleInput = e => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { token } = this.props.match.params;
		const { firstName, lastName, address, telephone, company, password, confirmPassword } = this.state;
		const email = Token.email;
		const data = { email, firstName, lastName, address, telephone, company, password, confirmPassword };
		this.props.init();
		this.props.register(data, token);
	};
	render() {
		const { payload, error, pending, match } = this.props;
		payload && payload.status === 200 && localStorage.setItem('cv-token', match.params.token);
		return (
			<>
				{Token ? <Redirect to='/' /> : ''}
				{/* <main className='d-flex flex-column align-items-center min-vh-85 d-none'>
					<div className='container m-auto'>
						<div className='row justify-content-sm-center'>
							<div className='col-sm-7 col-md-7'>
								<div className='card text-center bg-transparent border-0'>
									<div className='card-header bg-white rounded'>
										<p className='card-text'>Profile infomation</p>
									</div>
									<div className='card-body'>
										<div className='bd-example bd-example-tabs'>
											<div className='row'>
												<div className='col-2 pl-0'>
													<div className='nav flex-column nav-pills' id='v-pills-tab' role='tablist' aria-orientation='vertical'>
														<span className='nav-link text-center bg-white d-flex flex-column'>
															<FontAwesomeIcon className='m-auto' icon={faLock} />
															Verify
														</span>
														<a className='nav-link d-flex flex-column mt-3 active' id='v-pills-profile-tab' data-toggle='pill' href='#v-pills-profile' role='tab' aria-controls='v-pills-profile' aria-selected='true'>
															<FontAwesomeIcon className='m-auto' icon={faUser} />
															Profile
														</a>
														<span className='nav-link d-flex flex-column bg-white mt-3'>
															<FontAwesomeIcon className='m-auto' icon={faCheck} />
															complete
														</span>
													</div>
												</div>
												<div className='col-10 bg-white p-4 rounded'>
													<div className='tab-content' id='v-pills-tabContent'>
														<div className='tab-pane fade show active' id='v-pills-profile' role='tabpanel' aria-labelledby='v-pills-profile-tab'>
															<form className='font-weight-light rounded-sm' onSubmit={this.handleSubmit}>
																{error && (
																	<div className='alert alert-danger rounded-sm text-center scale-in-ver-center' role='alert'>
																		{error.message}
																	</div>
																)}
																<div className='row'>
																	<div className='input-group form-group mb-3 col-md-6'>
																		<div className='input-group-prepend rounded-0'>
																			<span className='input-group-text rounded-0 bg-transparent p-0 border-0 text-secondary'>
																				<Icon icon={email} />
																			</span>
																		</div>
																		<input name='firstName' type='text' className='form-control custom-input' placeholder='firstname' onChange={this.handleInput} required />
																		<div className='input-group-append'>
																			<span className='btn p-0 border-0 my-auto invisible'>
																				<Icon icon={lock} />
																			</span>
																		</div>
																	</div>
																	<div className='input-group form-group mb-3 col-md-6'>
																		<div className='input-group-prepend rounded-0'>
																			<span className='input-group-text rounded-0 bg-transparent p-0 border-0 text-secondary'>
																				<Icon icon={email} />
																			</span>
																		</div>
																		<input name='lastName' type='text' className='form-control custom-input' placeholder='lastname' onChange={this.handleInput} required />
																		<div className='input-group-append'>
																			<span className='btn p-0 border-0 my-auto invisible'>
																				<Icon icon={lock} />
																			</span>
																		</div>
																	</div>
																</div>
																<div className='input-group form-group mb-3'>
																	<div className='input-group-prepend rounded-0'>
																		<span className='input-group-text rounded-0 bg-transparent p-0 border-0 text-secondary'>
																			<Icon icon={email} />
																		</span>
																	</div>
																	<input name='company' type='text' className='form-control custom-input' placeholder='company' onChange={this.handleInput} required />
																	<div className='input-group-append'>
																		<span className='btn p-0 border-0 my-auto'>.biz.ug</span>
																	</div>
																</div>
																<div className='input-group form-group mb-3'>
																	<div className='input-group-prepend rounded-0'>
																		<span className='input-group-text rounded-0 bg-transparent p-0 border-0 text-secondary'>
																			<Icon icon={email} />
																		</span>
																	</div>
																	<input name='address' type='text' className='form-control custom-input' placeholder='address' onChange={this.handleInput} required />
																	<div className='input-group-append'>
																		<span className='btn p-0 border-0 my-auto invisible'>
																			<Icon icon={lock} />
																		</span>
																	</div>
																</div>
																<div className='input-group form-group mb-3'>
																	<div className='input-group-prepend rounded-0'>
																		<span className='input-group-text rounded-0 bg-transparent p-0 border-0 text-secondary'>
																			<Icon icon={email} />
																		</span>
																	</div>
																	<input name='telephone' type='text' className='form-control custom-input' placeholder='Telephone' onChange={this.handleInput} required />
																	<div className='input-group-append'>
																		<span className='btn p-0 border-0 my-auto invisible'>
																			<Icon icon={lock} />
																		</span>
																	</div>
																</div>
																<div className='input-group form-group mb-3'>
																	<div className='input-group-prepend rounded-0'>
																		<span className='input-group-text rounded-0 bg-transparent p-0 border-0 text-secondary'>
																			<Icon icon={email} />
																		</span>
																	</div>
																	<input name='password' type='password' className='form-control custom-input' placeholder='enter your password' onChange={this.handleInput} required />
																	<div className='input-group-append'>
																		<span className='btn p-0 border-0 my-auto invisible'>
																			<Icon icon={lock} />
																		</span>
																	</div>
																</div>
																<div className='input-group form-group mb-3'>
																	<div className='input-group-prepend rounded-0'>
																		<span className='input-group-text rounded-0 bg-transparent p-0 border-0 text-secondary'>
																			<Icon icon={email} />
																		</span>
																	</div>
																	<input name='confirmPassword' type='password' className='form-control custom-input' placeholder='confirm assword' onChange={this.handleInput} required />
																	<div className='input-group-append'>
																		<span className='btn p-0 border-0 my-auto invisible'>
																			<Icon icon={lock} />
																		</span>
																	</div>
																</div>
																{pending ? (
																	<button className='btn font-weight-light rounded-sm btn-primary btn-block' type='submit' disabled>
																		<span className='spinner-border spinner-border-sm mr-2'></span>Verifying....
																	</button>
																) : (
																	<button className='btn font-weight-light rounded-sm btn-primary btn-block' type='submit'>
																		Complete registration
																	</button>
																)}
															</form>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main> */}
				<RegisterSuccess />
			</>
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
		register: async (email, token) => dispatch(await register(email, token)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.RegisterReducer.payload,
		pending: state.RegisterReducer.payload,
		error: state.RegisterReducer.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
