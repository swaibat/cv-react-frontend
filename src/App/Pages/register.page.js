/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import constants from '../../redux/constants/index';
import { register } from '../../redux/actions/register.action';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faMapMarkedAlt, faGlobe, faUserAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import RegisterSuccess from '../Pages/register.success.page';
import Token from '../../helper';
import { Redirect } from 'react-router';
import Header from './../Components/Header';
import Footer from './../Components/Footer';
import { Link } from 'react-router-dom';
import countries from '../../helper/countries.json';
import { getClientInfo } from '../../redux/actions/country.info.action';
import { withRouter } from 'react-router-dom';

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false,
			latitude: '',
			longitude: '',
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleInput = this.handleInput.bind(this);
	}
	async componentDidMount() {
		this.props.loading();
		this.props.clientInfo();
	}
	handleClick(e) {
		e.preventDefault();
		this.setState({ callingCode: e.target.id, flag: e.target.name });
	}
	handleInput = e => {
		const target = e.target;
		const value = target.type === 'radio' ? (target.id === 'both' ? 3 : 2) : target.value;
		const name = target.name;
		this.setState({ [name]: value });
	};
	handleChange = selectedOption => {
		this.setState({ selectedOption });
	};

	handleSubmit = e => {
		e.preventDefault();
		const { token } = this.props.match.params;
		const { firstName, lastName, email, address, telephone, company, password, confirmPassword, roleId } = this.state;
		const data = { email, firstName, lastName, address, telephone, company, password, confirmPassword, roleId };
		this.props.init();
		this.props.register(data, token);
	};
	render() {
		const { payload, error, pending, clientPending, clientPayload } = this.props;
		return (
			<>
				<Header />
				{Token() ? <Redirect to='/' /> : ''}
				<main className={`d-flex flex-column align-items-center min-vh-85 ${clientPending ? 'loader' : ''} `}>
					<div className='container m-auto'>
						<div className='row justify-content-sm-center'>
							<div className='col-sm-7 col-md-7'>
								{payload && payload ? (
									<RegisterSuccess />
								) : (
									<div className='card text-center bg-transparent border-0'>
										<div className={error ? 'alert alert-danger text-center mb-0' : 'card-header bg-white rounded'}>
											<p className='card-text'>{error ? error.message : 'Profile infomation'}</p>
										</div>
										<div className='card-body'>
											<div className='bd-example bd-example-tabs'>
												<div className='row'>
													<div className='col-2 pl-0'>
														<div className='nav flex-column nav-pills' id='v-pills-tab' role='tablist' aria-orientation='vertical'>
															<Link className='nav-link text-center bg-white d-flex flex-column' id='v-pills-home-tab' to='#h' role='tab' aria-controls='v-pills-home' aria-selected='false'>
																<FontAwesomeIcon className='m-auto' icon={faLock} />
																<span className='link-text'>Verify</span>
															</Link>
															<a
																className='nav-link d-flex flex-column mt-3 active'
																id='v-pills-profile-tab'
																data-toggle='pill'
																href='#v-pills-profile'
																role='tab'
																aria-controls='v-pills-profile'
																aria-selected='true'
															>
																<FontAwesomeIcon className='m-auto' icon={faUser} />
																<span className='link-text'>Profile</span>
															</a>
															<Link className='nav-link text-center bg-white d-flex flex-column mt-3' id='v-pills-home-tab' to='#h' role='tab' aria-controls='v-pills-home' aria-selected='false'>
																<FontAwesomeIcon className='m-auto' icon={faUser} />
																<span className='link-text'>complete</span>
															</Link>
														</div>
													</div>
													<div className='col-10 bg-white p-4 rounded'>
														<div className='tab-content' id='v-pills-tabContent'>
															<div className='tab-pane fade show active' id='v-pills-profile' role='tabpanel' aria-labelledby='v-pills-profile-tab'>
																<form className='font-weight-light rounded-sm' onSubmit={this.handleSubmit}>
																	<div className='form-row'>
																		<div className='input-group form-group mb-3 col-md-6'>
																			<div className='input-group-prepend rounded-0'>
																				<span className='input-group-text cv-input-group-text rounded-0 bg-transparent p-0 text-secondary'>
																					<FontAwesomeIcon icon={faUser} />
																				</span>
																			</div>
																			<input name='firstName' type='text' className='form-control custom-input' placeholder='firstname' onChange={this.handleInput} required />
																		</div>
																		<div className='input-group form-group mb-3 col-md-6'>
																			<div className='input-group-prepend rounded-0'>
																				<span className='input-group-text cv-input-group-text rounded-0 bg-transparent p-0 text-secondary'>
																					<FontAwesomeIcon icon={faUserAlt} />
																				</span>
																			</div>
																			<input name='lastName' type='text' className='form-control custom-input' placeholder='lastname' onChange={this.handleInput} required />
																		</div>
																	</div>
																	<div className='input-group form-group mb-3'>
																		<div className='input-group-prepend rounded-0'>
																			<span className='input-group-text cv-input-group-text rounded-0 p-1 border-bottom text-secondary'>
																				<FontAwesomeIcon icon={faEnvelope} />
																			</span>
																		</div>
																		<input name='email' type='text' className='form-control custom-input' value={this.state.email} placeholder='email address' onChange={this.handleInput} disabled />
																	</div>
																	<div className='input-group form-group mb-3'>
																		<span className='input-group-text bg-transparent cv-input-group-text rounded-0 p-0 border-bottom text-secondary'>
																			<FontAwesomeIcon icon={faMapMarkedAlt} />
																		</span>
																		<input
																			id='autocomplete'
																			name='address'
																			type='text'
																			className='form-control custom-input'
																			value={clientPayload && clientPayload.address1}
																			onChange={this.handleInput}
																			disabled
																		/>
																	</div>
																	<div className='input-group mb-3'>
																		<div className='input-group-prepend'>
																			<button
																				className='btn btn-link dropdown-toggle d-flex align-items-center rounded-0 bg-transparent p-0 border-bottom  text-secondary'
																				type='button'
																				data-toggle='dropdown'
																				aria-haspopup='true'
																				aria-expanded='false'
																			>
																				<img height='17' width='30' className='pr-1' src={`http://localhost:5000/flags/${this.state.flag || (clientPayload && clientPayload.flag)}`} alt='flag' />+
																				{this.state.callingCode || (clientPayload && clientPayload.callingCodes)}
																			</button>
																			<div className='dropdown-menu country-select rounded-sm shadow-xs'>
																				{countries.map((e, index) => {
																					return (
																						<a key={index} onClick={this.handleClick} id={e.callingCodes} name={e.flag} className='dropdown-item d-flex align-items-center' href='#'>
																							<img height='17' width='30' className='pr-1' src={`http://localhost:5000/flags/${e.flag}`} alt='flag' />
																							<span className='px-1'>{e.name}</span>
																							<small className='text-secondary'>+{e.callingCodes}</small>
																						</a>
																					);
																				})}
																			</div>
																		</div>
																		<input
																			type='number'
																			name='telephone'
																			className='form-control custom-input'
																			placeholder='758307272'
																			aria-label='Text input with dropdown button'
																			onChange={this.handleInput}
																			required
																		/>
																	</div>
																	<div className='input-group form-group mb-3'>
																		<div className='input-group-prepend rounded-0'>
																			<span className='input-group-text cv-input-group-text rounded-0 bg-transparent p-0 text-secondary'>
																				<FontAwesomeIcon icon={faLock} />
																			</span>
																		</div>
																		<input name='password' type='password' className='form-control custom-input' placeholder='enter your password' onChange={this.handleInput} required />
																	</div>
																	<div className='input-group form-group mb-3'>
																		<div className='input-group-prepend rounded-0'>
																			<span className='input-group-text cv-input-group-text rounded-0 bg-transparent p-0 text-secondary'>
																				<FontAwesomeIcon icon={faLock} />
																			</span>
																		</div>
																		<input name='confirmPassword' type='password' className='form-control custom-input' placeholder='confirm assword' onChange={this.handleInput} required />
																	</div>
																	<div className='input-group form-group mb-3 '>
																		<div className='custom-control custom-radio custom-control-inline'>
																			<input type='radio' id='roleId' name='roleId' className='custom-control-input' onChange={this.handleInput} />
																			<label className='custom-control-label' htmlFor='roleId'>
																				Buyer
																			</label>
																		</div>
																		<div className='custom-control custom-radio custom-control-inline'>
																			<input type='radio' id='both' name='roleId' className='custom-control-input' onChange={this.handleInput} />
																			<label className='custom-control-label' htmlFor='both'>
																				Buyer and seller
																			</label>
																		</div>
																	</div>
																	{this.state.roleId === 3 && (
																		<div className='input-group form-group mb-3'>
																			<div className='input-group-prepend rounded-0'>
																				<span className='input-group-text cv-input-group-text rounded-0 bg-transparent p-0 text-secondary'>
																					<FontAwesomeIcon icon={faGlobe} />
																				</span>
																			</div>
																			<input name='company' type='text' className='form-control custom-input' placeholder='company' onChange={this.handleInput} required />
																			<div className='input-group-append'>
																				<span className='input-group-text cv-input-group-text bg-transparent p-0'>.biz.ug</span>
																			</div>
																		</div>
																	)}

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
								)}
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
				type: constants.REGISTER_PENDING,
				pending: true,
			}),
		loading: () =>
			dispatch({
				type: constants.CLIENT_INFO_PENDING,
				pending: true,
			}),
		register: async (email, token) => dispatch(await register(email, token)),
		clientInfo: async () => dispatch(await getClientInfo()),
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Register));
