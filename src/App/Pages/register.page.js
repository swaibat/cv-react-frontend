/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import constants from '../../redux/constants/index';
import { register } from '../../redux/actions/register.action';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faCheck, faMapMarkedAlt, faGlobe, faUserAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import RegisterSuccess from '../Pages/register.success.page';
import Token from '../../helper';
import { Redirect } from 'react-router';
import Header from './../Components/Header';
import Footer from './../Components/Footer';
import Location from '../../helper/google';
import api from './../../Api';
class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: false,
			latitude: '',
			longitude: '',
		};
		this.handleClick = this.handleClick.bind(this);
	}
	async componentDidMount() {
		const defaultCountry = await api.getIp();
		const locIndex = defaultCountry.data.indexOf('loc=');
		const CountryName = defaultCountry.data.slice(locIndex + 4, locIndex + 7).trim();
		const country = Location.getCountry(CountryName);
		const countries = await Location.getCountries();
		this.setState({ flag: country.flag, callingCode: country.callingCodes[0], countries: countries });
	}
	handleClick(e) {
		e.preventDefault();
		this.setState({ callingCode: e.target.id, flag: e.target.name });
	}
	handleInput = e => {
		const target = e.target;
		const value = target.value;
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
		const { payload, error, pending } = this.props;
		return (
			<>
				<Header />
				{Token() ? <Redirect to='/' /> : ''}
				<main className={`d-flex flex-column align-items-center min-vh-85 ${!this.state.flag ? 'loader' : ''} `}>
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
															<span className='nav-link text-center bg-white d-flex flex-column'>
																<FontAwesomeIcon className='m-auto' icon={faLock} />
																<span className='link-text'>Verify</span>
															</span>
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
															<span className='nav-link d-flex flex-column bg-white mt-3'>
																<FontAwesomeIcon className='m-auto' icon={faCheck} />
																<span className='link-text'>complete</span>
															</span>
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
																		<input id='autocomplete' name='address' type='text' className='form-control custom-input' value={this.state.address} onChange={this.handleInput} />
																	</div>
																	<div class='input-group mb-3'>
																		<div class='input-group-prepend'>
																			<button
																				class='btn btn-link dropdown-toggle d-flex align-items-center rounded-0 bg-transparent p-0 border-bottom  text-secondary'
																				type='button'
																				data-toggle='dropdown'
																				aria-haspopup='true'
																				aria-expanded='false'
																			>
																				<img height='17' width='30' className='pr-1' src={`http://localhost:5000/flags/${this.state.flag}`} alt='flag' />+{this.state.callingCode}
																			</button>
																			<div class='dropdown-menu country-select rounded-sm shadow-xs'>
																				{this.state.countries &&
																					this.state.countries.map(e => {
																						return (
																							<a onClick={this.handleClick} id={e.callingCodes} name={e.flag} class='dropdown-item d-flex align-items-center' href='#'>
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
																			class='form-control custom-input'
																			placeholder='758307272'
																			aria-label='Text input with dropdown button'
																			onChange={this.handleInput}
																			required
																		/>
																	</div>

																	<div className='input-group form-group mb-3'>
																		<div className='input-group-prepend rounded-0'>
																			<span className='input-group-text rounded-0 bg-transparent p-0 border-0 text-secondary'>
																				<FontAwesomeIcon icon={faLock} />
																			</span>
																		</div>
																		<input name='password' type='password' className='form-control custom-input' placeholder='enter your password' onChange={this.handleInput} required />
																	</div>
																	<div className='input-group form-group mb-3'>
																		<div className='input-group-prepend rounded-0'>
																			<span className='input-group-text rounded-0 bg-transparent p-0 border-0 text-secondary'>
																				<FontAwesomeIcon icon={faLock} />
																			</span>
																		</div>
																		<input name='confirmPassword' type='password' className='form-control custom-input' placeholder='confirm assword' onChange={this.handleInput} required />
																	</div>
																	<div className='input-group form-group mb-3'>
																		<label className='mr-4 p-0 m-0'>user type:</label>
																		<div className='form-check form-check-inline'>
																			<input className='form-check-input' type='radio' name='RoleId' id='exampleRadios1' value='1' checked />
																			<label className='form-check-label' for='exampleRadios1'>
																				Buyer
																			</label>
																		</div>
																		<div className='form-check'>
																			<input className='form-check-input' type='radio' name='RoleId' id='exampleRadios2' value='2' />
																			<label className='form-check-label' for='exampleRadios2'>
																				Seller
																			</label>
																		</div>
																	</div>
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
		register: async (email, token) => dispatch(await register(email, token)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.RegisterReducer.payload,
		pending: state.RegisterReducer.pending,
		error: state.RegisterReducer.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
