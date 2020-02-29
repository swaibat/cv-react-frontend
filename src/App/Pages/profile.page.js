import React, { Component } from 'react';
// import constants from '../../redux/constants/index';
// import { connect } from 'react-redux';
import decode, { token } from '../../helper';
import Header from './../Components/Header';
import Footer from './../Components/Footer';
import { getUser } from '../../redux/actions/user.action';
import avatar from './../../assets/images/user.svg';
import profileBg from './../../assets/images/profile-cover.svg';
import StarRatings from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
		};
		this.toggleMenu = this.toggleMenu.bind(this);
	}
	toggleMenu() {
		this.setState({ edit: true });
	}
	async componentDidMount() {
		// this.props.init();
		const user = await getUser(token, decode().id);
		this.setState(user.payload.data);
	}
	handleInput = e => {
		e.preventDefault();
		const { name, value } = e.target;
		this.setState({ [name]: value });
	};
	// handleSubmit = e => {
	// 	e.preventDefault();
	// 	const { token } = this.props.match.params;
	// 	this.props.verifyInit();
	// 	const { email } = this.state;
	// 	this.props.verify({ email }, token);
	// };
	render() {
		console.log(this.state);
		return (
			<>
				<Header />
				<main className='d-flex flex-column align-items-center min-vh-85'>
					<div className='container m-auto'>
						<div className='row bg-white mb-3 rounded shadow-xs'>
							<div className='col-12 bg-primary-dark overflow-hidden'>
								<img
									className='profile-banner bg-primary-dark shadow-xs'
									src={profileBg}
									alt='avatar'
								/>
							</div>
							<div className='col-md-12'>
								<div className='d-flex profile-holder align-items-center'>
									<span className='d-flex'>
										<img
											className='profile-image img-thumbnail img-fluid shadow-xs'
											src={avatar}
											alt='avatar'
										/>
										<div className='ml-3 mt-2 text-white'>
											<h5 className='mb-1'>{`${this.state.firstName} ${this.state.lastName}`}</h5>
											<p className='mb-1'>{this.state.email}</p>
										</div>
									</span>
									<button className='btn btn-light ml-auto mt-n5' onClick={this.toggleMenu}>
										Edit profile
									</button>
								</div>
							</div>
							<div className='col-md-2 mt-n5 w-100 p-0 m-0'>
								<div className='card border-0 mt-5 h-75'>
									<ul className='list-group'>
										<li className='list-group-item border-0 text-center'>
											<h1 className='font-weight-light'>3.5</h1>
											<StarRatings
												fullSymbol={
													<FontAwesomeIcon
														icon={faStar}
														className='mx-2'
														style={{ color: '#ffd700' }}
													/>
												}
												emptySymbol={
													<FontAwesomeIcon
														icon={faStar}
														className='mx-2'
														style={{ color: '#C0C0C0' }}
													/>
												}
												id='singleBooking'
												initialRating={3.5}
												disabled
											/>
											<small>2.8k reviewers</small>
										</li>
										<li className='list-group-item border-0 d-flex'>
											<div className='d-flex flex-column w-100'>
												<span className='d-flex w-100 align-items-center justify-content-between'>
													<span className='p-1'>5</span>
													<span className='w-100'>
														<div className='progress' style={{ height: '.4rem' }}>
															<div
																className='progress-bar bg-primary'
																role='progressbar'
																style={{ width: '75%' }}
																aria-valuenow='25'
																aria-valuemin='0'
																aria-valuemax='100'
															></div>
														</div>
													</span>
													<span className='p-1 reviewers-number'>1005</span>
												</span>
												<span className='d-flex w-100 align-items-center'>
													<span className='p-1'>4</span>
													<span className='w-100'>
														<div className='progress' style={{ height: '.4rem' }}>
															<div
																className='progress-bar bg-primary'
																role='progressbar'
																style={{ width: '50%' }}
																aria-valuenow='25'
																aria-valuemin='0'
																aria-valuemax='100'
															></div>
														</div>
													</span>
													<span className='p-1 reviewers-number'>500</span>
												</span>
												<span className='d-flex w-100 align-items-center'>
													<span className='p-1'>3</span>
													<span className='w-100'>
														<div className='progress' style={{ height: '.4rem' }}>
															<div
																className='progress-bar bg-primary'
																role='progressbar'
																style={{ width: '35%' }}
																aria-valuenow='25'
																aria-valuemin='0'
																aria-valuemax='100'
															></div>
														</div>
													</span>
													<span className='p-1 reviewers-number' style={{ MinminWidth: '3rem' }}>
														50
													</span>
												</span>
												<span className='d-flex w-100 align-items-center'>
													<span className='p-1'>2</span>
													<span className='w-100'>
														<div className='progress' style={{ height: '.4rem' }}>
															<div
																className='progress-bar bg-primary'
																role='progressbar'
																style={{ width: '25%' }}
																aria-valuenow='25'
																aria-valuemin='0'
																aria-valuemax='100'
															></div>
														</div>
													</span>
													<span className='p-1 reviewers-number'>10</span>
												</span>
												<span className='d-flex w-100 align-items-center'>
													<span className='p-1'>1</span>
													<span className='w-100'>
														<div className='progress' style={{ height: '.4rem' }}>
															<div
																className='progress-bar bg-primary'
																role='progressbar'
																style={{ width: '15%' }}
																aria-valuenow='25'
																aria-valuemin='0'
																aria-valuemax='100'
															></div>
														</div>
													</span>
													<span className='p-1 reviewers-number'>4</span>
												</span>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div className='col-md-10 bg-white px-0 ml-auto mt-n5 rounded-bottom'>
								<ul className='nav nav-pills bg-light p-2 shadow-sm' id='pills-tab' role='tablist'>
									<li className='nav-item'>
										<a
											className='nav-link active'
											id='pills-home-tab'
											data-toggle='pill'
											href='#pills-home'
											role='tab'
											aria-controls='pills-home'
											aria-selected='true'
										>
											profile
										</a>
									</li>
									<li className='nav-item'>
										<a
											className='nav-link'
											id='pills-profile-tab'
											data-toggle='pill'
											href='#pills-profile'
											role='tab'
											aria-controls='pills-profile'
											aria-selected='false'
										>
											my products
										</a>
									</li>
									<li className='nav-item'>
										<a
											className='nav-link'
											id='pills-contact-tab'
											data-toggle='pill'
											href='#pills-contact'
											role='tab'
											aria-controls='pills-contact'
											aria-selected='false'
										>
											my favourite
											<span className='badge badge-primary ml-1'>5</span>
										</a>
									</li>
									<li className='nav-item'>
										<a
											className='nav-link'
											id='pills-contact-tab'
											data-toggle='pill'
											href='#pills-contact'
											role='tab'
											aria-controls='pills-contact'
											aria-selected='false'
										>
											my feedback
										</a>
									</li>
								</ul>
								<div className='tab-content' id='pills-tabContent'>
									<div
										className='tab-pane p-4 rounded fade show active'
										id='pills-home'
										role='tabpanel'
										aria-labelledby='pills-home-tab'
									>
										<form>
											<div className='form-row'>
												<div className='form-group col-md-6'>
													<label htmlFor='inputEmail4'>Firstname</label>
													<input
														type='firstName'
														value={this.state.firstName}
														className='form-control'
														onChange={this.handleInput}
														disabled={!this.state.edit}
													/>
												</div>
												<div className='form-group col-md-6'>
													<label htmlFor='inputPassword4'>lastname</label>
													<input
														type='text'
														name='lastName'
														value={this.state.lastName}
														className='form-control'
														onChange={this.handleInput}
														disabled={!this.state.edit}
													/>
												</div>
											</div>
											<div className='form-row'>
												<div className='form-group col-md-9'>
													<label htmlFor='inputEmail4'>Email</label>
													<input
														type='email'
														name='email'
														value={this.state.email}
														className='form-control'
														disabled
													/>
												</div>
												<div className='form-group col-md-3'>
													<label htmlFor='inputEmail4'>Role</label>
													<select type='text' className='form-control' disabled={!this.state.edit}>
														<option value={this.state.roleId}>
															{this.state.Role && this.state.Role.name}
														</option>
														<option value='3'>seller</option>
													</select>
												</div>
											</div>
											<div className='form-group'>
												<label htmlFor='company'>company</label>
												<input
													type='text'
													value={this.state.company}
													className='form-control'
													onChange={this.handleInput}
													disabled={!this.state.edit}
												/>
											</div>

											<div className='form-row'>
												<div className='form-group col-md-6'>
													<label htmlFor='inputEmail4'>address</label>
													<input
														type='email'
														name='email'
														value={this.state.address}
														className='form-control'
														onChange={this.handleInput}
														disabled={!this.state.edit}
													/>
												</div>
												<div className='form-group col-md-6'>
													<label htmlFor='inputPassword4'>telephone</label>
													<input
														type='text'
														value={this.state.telephone}
														className='form-control'
														onChange={this.handleInput}
														disabled={!this.state.edit}
													/>
												</div>
											</div>
										</form>
									</div>
									<div
										className='tab-pane fade'
										id='pills-profile'
										role='tabpanel'
										aria-labelledby='pills-profile-tab'
									>
										...
									</div>
									<div
										className='tab-pane fade'
										id='pills-contact'
										role='tabpanel'
										aria-labelledby='pills-contact-tab'
									>
										...
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

// const mapDispatchToProps = dispatch => {
// 	return {
// 		init: () =>
// 			dispatch({
// 				type: constants.USER_PENDING,
// 				pending: true,
// 			}),

// 		user: async (token, id) => dispatch(await getUser(token, id)),
// 	};
// };

// const mapStateToProps = state => {
// 	return {
// 		payload: state.getUser.payload,
// 		pending: state.getUser.pending,
// 		error: state.getUser.error,
// 	};
// };

export default Nav;
