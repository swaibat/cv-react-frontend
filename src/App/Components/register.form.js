import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import lock from '@iconify/icons-mdi/lock';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUser, faCheck, faMapMarkedAlt, faPhone, faGlobe, faUserAlt } from '@fortawesome/free-solid-svg-icons';

class Registerform extends Component {
	render() {
		const { error, pending } = this.props;
		return (
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
											<div className='row'>
												<div className='input-group form-group mb-3 col-md-6'>
													<div className='input-group-prepend rounded-0'>
														<span className='input-group-text rounded-0 bg-transparent p-0 border-0 text-secondary'>
															<FontAwesomeIcon icon={faUser} />
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
															<FontAwesomeIcon icon={faUserAlt} />
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
														<FontAwesomeIcon icon={faGlobe} />
													</span>
												</div>
												<input name='email' type='text' className='form-control custom-input' value={this.state.email} placeholder='email address' onChange={this.handleInput} disabled />
												<div className='input-group-append'>
													<span className='btn p-0 border-0 my-auto invisible'>
														<Icon icon={lock} />
													</span>
												</div>
											</div>
											<div className='input-group form-group mb-3'>
												<div className='input-group-prepend rounded-0'>
													<span className='input-group-text rounded-0 bg-transparent p-0 border-0 text-secondary'>
														<FontAwesomeIcon icon={faMapMarkedAlt} />
													</span>
												</div>
												<input name='address' type='text' className='form-control custom-input' placeholder='address' onChange={this.handleInput} required />
												<div className='input-group-append'>
													<span className='btn p-0 border-0 my-auto invisible'>
														<FontAwesomeIcon icon={faMapMarkedAlt} />
													</span>
												</div>
											</div>
											<div className='input-group form-group mb-3'>
												<div className='input-group-prepend rounded-0'>
													<span className='input-group-text rounded-0 bg-transparent p-0 border-0 text-secondary'>
														<FontAwesomeIcon icon={faPhone} />
													</span>
												</div>
												<input name='telephone' type='number' className='form-control custom-input' placeholder='Telephone' onChange={this.handleInput} required />
												<div className='input-group-append'>
													<span className='btn p-0 border-0 my-auto invisible'>
														<FontAwesomeIcon icon={faMapMarkedAlt} />
													</span>
												</div>
											</div>
											<div className='input-group form-group mb-3'>
												<div className='input-group-prepend rounded-0'>
													<span className='input-group-text rounded-0 bg-transparent p-0 border-0 text-secondary'>
														<FontAwesomeIcon icon={faLock} />
													</span>
												</div>
												<input name='password' type='password' className='form-control custom-input' placeholder='enter your password' onChange={this.handleInput} required />
												<div className='input-group-append'>
													<span className='btn p-0 border-0 my-auto invisible'>
														<FontAwesomeIcon icon={faLock} />
													</span>
												</div>
											</div>
											<div className='input-group form-group mb-3'>
												<div className='input-group-prepend rounded-0'>
													<span className='input-group-text rounded-0 bg-transparent p-0 border-0 text-secondary'>
														<FontAwesomeIcon icon={faLock} />
													</span>
												</div>
												<input name='confirmPassword' type='password' className='form-control custom-input' placeholder='confirm assword' onChange={this.handleInput} required />
												<div className='input-group-append'>
													<span className='btn p-0 border-0 my-auto invisible'>
														<FontAwesomeIcon icon={faLock} />
													</span>
												</div>
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
											{this.state && console.log(this.state)}
											<div className='input-group form-group mb-3'>
												<div className='input-group-prepend rounded-0'>
													<span className='input-group-text rounded-0 bg-transparent p-0 border-0 text-secondary'>
														<FontAwesomeIcon icon={faGlobe} />
													</span>
												</div>
												<input name='company' type='text' className='form-control custom-input' placeholder='company' onChange={this.handleInput} required />
												<div className='input-group-append'>
													<span className='btn p-0 border-0 my-auto'>.biz.ug</span>
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
		);
	}
}

export default Registerform;
