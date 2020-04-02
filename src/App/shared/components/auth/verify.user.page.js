/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import constants from '../../../shared/redux/constants';
import Auth from '../../components/auth/redux/actions';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faCheck } from '@fortawesome/free-solid-svg-icons';
import Token from '../../../shared/helper';
import { Redirect } from 'react-router';
import Header from '../../../frontend/components/header/Header';
import Footer from '../../../frontend/components/footer/Footer';
import Local from '../../../shared/redux/locations/actions';
import TextInput from '../select-input/flagSelector';
import VerifyInput from '../auth/code.verification';

class Verify extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false,
			latitude: '',
			longitude: '',
			callingCodes: this.props.clientPayload,
			channel: 'sms',
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.handleVerify = this.handleVerify.bind(this);
	}
	componentDidMount() {
		this.props.loading();
		this.props.clientInfo();
	}
	componentWillReceiveProps(nextProps) {
		// Any time props.email changes, update state.
		if (nextProps.clientPayload !== this.props.clientPayload) {
			this.setState({
				callingCodes: nextProps.clientPayload.callingCodes,
			});
		}
	}
	handleClick(e) {
		e.preventDefault();
		console.log('jfjfjfjfjfj');
		this.setState({ callingCodes: e.target.id, flag: e.target.name });
	}
	handleInput = e => {
		const target = e.target;
		const value =
			target.type === 'radio'
				? target.id
				: target.name === 'telephone'
				? `+${this.state.callingCodes}${target.value}`
				: target.value;
		const name = target.name;
		this.setState({ [name]: value, data: [] });
	};
	handleSubmit = e => {
		e.preventDefault();
		const { token } = this.props.match.params;
		this.props.verifyInit();
		const { email, telephone, channel } = this.state;
		this.props.verify({ email, telephone, channel }, token);
	};
	handleVerify(e) {
		e.preventDefault();
		this.props.verifyCodeInit();
		for (const key in this.state) {
			if (this.state.hasOwnProperty(key)) {
				if (key.match('code')) {
					this.state.data.push(this.state[key]);
				}
			}
		}
		const { telephone, data } = this.state;
		const code = data.toString().replace(/,/g, '');
		this.props.verifyCode({ telephone }, code);
		this.setState({ data: [] });
	}
	render() {
		const { payload, error, pending, match, clientPending, clientPayload } = this.props;
		payload && payload.status === 200 && localStorage.setItem('cv-token', match.params.token);
		console.log(this.state);
		return (
			<>
				<Header />
				<main className={`d-flex flex-column align-items-center min-vh-85 `}>
					{Token() ? <Redirect to='/' /> : ''}
					<div className='container m-auto'>
						<div className='row justify-content-sm-center align-items-center'>
							<div className='col-sm-7 col-md-7'>
								<div className='card text-center bg-transparent border-0'>
									<div
										className={
											error ? 'alert alert-danger text-center mb-0' : 'card-header bg-white rounded'
										}
									>
										<p className='card-text font-weight-bold'>
											{error ? error.message : 'User Verification'}
										</p>
									</div>
									<div className='card-body'>
										<div className='bd-example bd-example-tabs'>
											<div className='row'>
												<div className='col-2 ml-0 pl-0'>
													<div
														className='nav flex-column nav-pills'
														id='v-pills-tab'
														role='tablist'
														aria-orientation='vertical'
													>
														<a
															className='nav-link text-center active d-flex flex-column shadow-xs'
															id='v-pills-home-tab'
															data-toggle='pill'
															href='#v-pills-home'
															role='tab'
															aria-controls='v-pills-home'
															aria-selected='true'
														>
															<FontAwesomeIcon className='m-auto' icon={faLock} />
															Verify
														</a>
														<span className='nav-link d-flex flex-column bg-white mt-3 border-bottom shadow-xs'>
															<FontAwesomeIcon className='m-auto' icon={faUser} />
															Profile
														</span>
														<span className='nav-link d-flex flex-column bg-white mt-3 shadow-xs'>
															<FontAwesomeIcon className='m-auto' icon={faCheck} />
															complete
														</span>
													</div>
												</div>
												<div className='col-10 bg-white p-4 rounded shadow-xs'>
													<div className='tab-content' id='v-pills-tabContent'>
														<div
															className='tab-pane fade show active'
															id='v-pills-home'
															role='tabpanel'
															aria-labelledby='v-pills-home-tab'
														>
															<p>In order to signup you need to verify your email or Phone first</p>
															{!error && payload ? (
																<VerifyInput data={this} />
															) : (
																<form
																	className='font-weight-light rounded-sm text-center'
																	onSubmit={this.handleSubmit}
																>
																	<hr className='' />
																	{/* option1 */}
																	<div
																		className='btn-group btn-group-toggle my-2'
																		data-toggle='buttons'
																	>
																		<label className='btn btn-light active'>
																			<input
																				type='radio'
																				name='verificationType'
																				id='email'
																				autocomplete='off'
																				checked
																				onClick={this.handleInput}
																			/>{' '}
																			Email
																		</label>
																		<label className='btn btn-light'>
																			<input
																				type='radio'
																				name='verificationType'
																				id='phone'
																				autocomplete='off'
																				onClick={this.handleInput}
																			/>{' '}
																			Phone
																		</label>
																	</div>
																	{this.state.verificationType !== 'phone' ? (
																		<div className='input-group form-group mb-3 mt-4'>
																			<div className='input-group-prepend rounded-0'>
																				<span className='input-group-text cv-input-group-text rounded-0 bg-transparent p-0  '>
																					<FontAwesomeIcon icon={faLock} />
																				</span>
																			</div>
																			<input
																				name='email'
																				type='email'
																				className='form-control custom-input'
																				placeholder='Enter your email'
																				onChange={this.handleInput}
																				required
																			/>
																		</div>
																	) : (
																		<>
																			<div className='input-group form-group justify-content-center my-4 text-capitalize'>
																				<div className='custom-control custom-radio custom-control-inline'>
																					<input
																						type='radio'
																						id='sms'
																						name='channel'
																						className='custom-control-input'
																						onChange={this.handleInput}
																						checked={this.state.channel === 'sms'}
																					/>
																					<label className='custom-control-label' htmlFor='sms'>
																						Receive an Sms
																					</label>
																				</div>
																				<div className='custom-control custom-radio custom-control-inline'>
																					<input
																						type='radio'
																						id='call'
																						name='channel'
																						className='custom-control-input'
																						onChange={this.handleInput}
																					/>
																					<label className='custom-control-label' htmlFor='call'>
																						Receve a Voice call
																					</label>
																				</div>
																			</div>
																			<div className='col-md-12'>
																				<div className='cv-form-group form-group mt-4'>
																					<TextInput
																						{...{
																							label: 'enter telephone number',
																							name: 'address',
																							type: 'text',
																							icon: { name: 'locate-outline' },
																							data: this,
																						}}
																					/>
																				</div>
																			</div>
																		</>
																	)}

																	<div className='checkbox my-4 font-weight-light'>
																		<label>
																			<input
																				className='mr-2'
																				type='checkbox'
																				value='remember-me'
																				required
																			/>{' '}
																			I agree with terms and conditions
																		</label>
																	</div>
																	{pending ? (
																		<button
																			className='btn font-weight-light rounded-sm btn-primary btn-block'
																			type='submit'
																			disabled
																		>
																			<span className='spinner-border spinner-border-sm mr-2'></span>
																			Verifying....
																		</button>
																	) : (
																		<button
																			className='btn font-weight-light rounded-sm btn-primary btn-block'
																			type='submit'
																		>
																			Verify
																		</button>
																	)}
																	<div className='w-100 text-center mt-3'>
																		<a href='/password'>have an account login</a>
																	</div>
																</form>
															)}
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
				</main>
				<Footer />
			</>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		verifyCodeInit: () =>
			dispatch({
				type: constants.VERIFY_CODE_PENDING,
				pending: true,
			}),
		verifyInit: () =>
			dispatch({
				type: constants.VERIFY_PENDING,
				pending: true,
			}),
		loading: () =>
			dispatch({
				type: constants.CLIENT_INFO_PENDING,
				pending: true,
			}),

		verify: async data => dispatch(await Auth.verifyUser(data)),
		verifyCode: async (phone, code) => dispatch(await Auth.verifyUserCode(phone, code)),
		clientInfo: async () => dispatch(await Local.getClientInfo()),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.verifyUser.payload,
		pending: state.verifyUser.pending,
		error: state.verifyUser.error,
		clientPayload: state.clentInfo.payload,
		clientPending: state.clentInfo.pending,
		clientError: state.clentInfo.error,
		codePayload: state.verifyUserCode.payload,
		codePending: state.verifyUserCode.pending,
		codeError: state.verifyUserCode.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Verify);
