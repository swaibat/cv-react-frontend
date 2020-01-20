import React, { Component } from 'react';
import Sidenav from './components/sidenav';
import AdminNav from './components/admin.nav.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';
import Dropzone from 'react-dropzone-uploader';

class Dashboard extends Component {
	render() {
		return (
			<>
				<Sidenav />
				<div className='header-bg' />
				<main className='content-wrapper d-flex flex-column align-items-center min-h-display'>
					<AdminNav />
					<div className='container-fluid mt-n2'>
						<h5 className='cv-title title-light'>Settings</h5>
						<div className='row mt-4'>
							<div class='col-1'>
								<div class='nav flex-column settings-nav nav-pills' id='v-pills-tab' role='tablist' aria-orientation='vertical'>
									<a class='nav-link shadow-xs d-flex flex-column active' id='v-pills-home-tab' data-toggle='pill' href='#v-pills-home' role='tab' aria-controls='v-pills-home' aria-selected='true'>
										<FontAwesomeIcon className='m-auto' icon={faCogs} />
										General
									</a>
									<a
										class='nav-link shadow-xs d-flex flex-column '
										id='v-pills-profile-tab'
										data-toggle='pill'
										href='#v-pills-profile'
										role='tab'
										aria-controls='v-pills-profile'
										aria-selected='false'
									>
										<FontAwesomeIcon className='m-auto' icon={faCogs} />
										themes
									</a>
									<a
										class='nav-link shadow-xs d-flex flex-column '
										id='v-pills-messages-tab'
										data-toggle='pill'
										href='#v-pills-messages'
										role='tab'
										aria-controls='v-pills-messages'
										aria-selected='false'
									>
										<FontAwesomeIcon className='m-auto' icon={faCogs} />
										Email
									</a>
									<a
										class='nav-link shadow-xs d-flex flex-column '
										id='v-pills-settings-tab'
										data-toggle='pill'
										href='#v-pills-settings'
										role='tab'
										aria-controls='v-pills-settings'
										aria-selected='false'
									>
										<FontAwesomeIcon className='m-auto' icon={faCogs} />
										Users
									</a>
									<a
										class='nav-link shadow-xs d-flex flex-column '
										id='v-pills-products-tab'
										data-toggle='pill'
										href='#v-pills-products'
										role='tab'
										aria-controls='v-pills-products'
										aria-selected='false'
									>
										<FontAwesomeIcon className='m-auto' icon={faCogs} />
										Products
									</a>
								</div>
							</div>
							<div class='col-11'>
								<div class='tab-content' id='v-pills-tabContent'>
									<div class='tab-pane bg-white rounded p-3 fade shadow-xs show active' id='v-pills-home' role='tabpanel' aria-labelledby='v-pills-home-tab'>
										<form>
											<div class='form-row'>
												<div class='form-group col-md-12'>
													<label for='inputEmail4'>Site Name</label>
													<input type='email' class='form-control' id='inputEmail4' />
												</div>
												<div class='form-group col-md-12'>
													<label for='inputPassword4'>Site Description</label>
													<textarea class='form-control' placeholder='enter description'></textarea>
												</div>
											</div>
											<div class='form-row'>
												<div className='form-group col-md-4'>
													<label for='inputZip'>Upload Favicon</label>
													<div className='input-group'>
														<Dropzone onChangeStatus={this.handleChangeStatus} accept='image/*' />
													</div>
												</div>
												<div className='form-group col-md-4'>
													<label for='inputZip'>Upload Light Logo</label>
													<div className='input-group'>
														<Dropzone onChangeStatus={this.handleChangeStatus} accept='image/*' />
													</div>
												</div>
												<div className='form-group col-md-4'>
													<label for='inputZip'>Upload Dark Logo</label>
													<div className='input-group'>
														<Dropzone onChangeStatus={this.handleChangeStatus} accept='image/*' />
													</div>
												</div>
											</div>
											<div class='form-row'>
												<div class='form-group col-md-4'>
													<label for='inputAddress2'>Company Address</label>
													<input type='text' class='form-control' id='inputAddress2' placeholder='Apartment, studio, or floor' />
												</div>
												<div class='form-group col-md-4'>
													<label for='inputAddress'>Contact Email</label>
													<input type='text' class='form-control' id='inputAddress' placeholder='1234 Main St' />
												</div>
												<div class='form-group col-md-4'>
													<label for='inputAddress'>Contact Phone</label>
													<input type='text' class='form-control' id='inputAddress' placeholder='1234 Main St' />
												</div>
											</div>
											<div class='form-row'>
												<div class='form-group col-md-4'>
													<label for='inputCity'>Facebook Page</label>
													<input type='text' class='form-control' id='inputCity' />
												</div>
												<div class='form-group col-md-4'>
													<label for='inputState'>Twitter Page</label>
													<select id='inputState' class='form-control'>
														<option selected>Choose...</option>
														<option>...</option>
													</select>
												</div>
												<div class='form-group col-md-4'>
													<label for='inputZip'>Youtube Channel</label>
													<input type='text' class='form-control' id='inputZip' />
												</div>
											</div>
											<button type='submit' class='btn btn-primary'>
												Sign in
											</button>
										</form>
									</div>
									<div class='tab-pane bg-white rounded p-3 fade shadow-xs' id='v-pills-profile' role='tabpanel' aria-labelledby='v-pills-profile-tab'>
										<form>
											<div class='form-row'>
												<div class='form-group col-md-12'>
													<label for='inputEmail4'>Site Name</label>
													<input type='email' class='form-control' id='inputEmail4' />
												</div>
												<div class='form-group col-md-12'>
													<label for='inputPassword4'>Site Description</label>
													<textarea class='form-control' placeholder='enter description'></textarea>
												</div>
											</div>
											<div class='form-row'>
												<div className='form-group col-md-4'>
													<label for='inputZip'>Upload Favicon</label>
													<div className='input-group'>
														<Dropzone onChangeStatus={this.handleChangeStatus} accept='image/*' />
													</div>
												</div>
												<div className='form-group col-md-4'>
													<label for='inputZip'>Upload Light Logo</label>
													<div className='input-group'>
														<Dropzone onChangeStatus={this.handleChangeStatus} accept='image/*' />
													</div>
												</div>
												<div className='form-group col-md-4'>
													<label for='inputZip'>Upload Dark Logo</label>
													<div className='input-group'>
														<Dropzone onChangeStatus={this.handleChangeStatus} accept='image/*' />
													</div>
												</div>
											</div>
											<div class='form-row'>
												<div class='form-group col-md-4'>
													<label for='inputAddress2'>Company Address</label>
													<input type='text' class='form-control' id='inputAddress2' placeholder='Apartment, studio, or floor' />
												</div>
												<div class='form-group col-md-4'>
													<label for='inputAddress'>Contact Email</label>
													<input type='text' class='form-control' id='inputAddress' placeholder='1234 Main St' />
												</div>
												<div class='form-group col-md-4'>
													<label for='inputAddress'>Contact Phone</label>
													<input type='text' class='form-control' id='inputAddress' placeholder='1234 Main St' />
												</div>
											</div>
											<div class='form-row'>
												<div class='form-group col-md-4'>
													<label for='inputCity'>Facebook Page</label>
													<input type='text' class='form-control' id='inputCity' />
												</div>
												<div class='form-group col-md-4'>
													<label for='inputState'>Twitter Page</label>
													<select id='inputState' class='form-control'>
														<option selected>Choose...</option>
														<option>...</option>
													</select>
												</div>
												<div class='form-group col-md-4'>
													<label for='inputZip'>Youtube Channel</label>
													<input type='text' class='form-control' id='inputZip' />
												</div>
											</div>
											<button type='submit' class='btn btn-primary'>
												Sign in
											</button>
										</form>
									</div>
									<div class='tab-pane bg-white rounded p-3 fade shadow-xs' id='v-pills-messages' role='tabpanel' aria-labelledby='v-pills-messages-tab'>
										<form>
											<div class='form-row'>
												<div class='form-group col-md-5'>
													<label for='inputEmail4'>Email type</label>
													<select type='email' class='form-control' id='inputEmail4' placeholder='Email'>
														<option>Smtp</option>
													</select>
												</div>
												<div class='form-group col-md-5'>
													<label for='inputEmail4'>Server Name</label>
													<select type='email' class='form-control' id='inputEmail4' placeholder='Email'>
														<option>smtp.gmail.com</option>
													</select>
												</div>
												<div class='form-group col-md-2'>
													<label for='inputEmail4'>Port</label>
													<select type='email' class='form-control' id='inputEmail4' placeholder='Email'>
														<option>465</option>
														<option>587</option>
													</select>
												</div>
												<div class='form-group col-md-5'>
													<label for='inputEmail4'>Smtp Authentication Email</label>
													<input type='email' placeholder='enter sender email' class='form-control' id='inputEmail4' />
												</div>
												<div class='form-group col-md-5'>
													<label for='inputEmail4'>Smtp Authentication Password</label>
													<input type='password' placeholder='enter sender Password' class='form-control' id='inputEmail4' />
												</div>
												<div class='form-group col-md-2'>
													<label for='inputEmail4'>Send Security</label>
													<select type='email' class='form-control' id='inputEmail4' placeholder='Email'>
														<option>false</option>
														<option>true</option>
													</select>
												</div>
											</div>
											<div class='form-row'>
												<button type='submit' class='btn btn-success'>
													send test Email
												</button>
												<button type='submit' class='btn btn-primary ml-auto'>
													Save
												</button>
											</div>
										</form>
									</div>
									<div class='tab-pane bg-white rounded p-3 fade shadow-xs' id='v-pills-settings' role='tabpanel' aria-labelledby='v-pills-settings-tab'>
										Cillum ad ut irure tempor velit nostrud occaecat ullamco aliqua anim Lorem sint. Veniam sint duis incididunt do esse magna mollit excepteur laborum qui. Id id reprehenderit sit est
										eu aliqua occaecat quis et velit excepteur laborum mollit dolore eiusmod. Ipsum dolor in occaecat commodo et voluptate minim reprehenderit mollit pariatur. Deserunt non laborum
										enim et cillum eu deserunt excepteur ea incididunt minim occaecat.
									</div>
									<div class='tab-pane bg-white rounded p-3 fade shadow-xs' id='v-pills-products' role='tabpanel' aria-labelledby='v-pills-products-tab'>
										<form className='h-100'>
											<div class='form-row'>
												<div class='form-group col-md-6'>
													<label for='inputEmail4'>products default view Type</label>
													<select type='email' class='form-control' id='inputEmail4' placeholder='Email'>
														<option>List</option>
														<option>Grid</option>
													</select>
												</div>
												<div class='form-group col-md-6'>
													<label for='inputEmail4'>currency type</label>
													<select type='email' class='form-control' id='inputEmail4' placeholder='Email'>
														<option>Smtp</option>
													</select>
												</div>
												<div class='form-group col-md-5'>
													<label for='inputEmail4'>Smtp Authentication Email</label>
													<input type='email' placeholder='enter sender email' class='form-control' id='inputEmail4' />
												</div>
												<div class='form-group col-md-12'>
													<div className='form-group d-flex mb-0'>
														<label className='pr-3' for='inputState'>
															Auto detect countries currency
														</label>
														<div className='custom-control custom-switch'>
															<input name='negotiable' type='checkbox' className='custom-control-input custom-control-input-lg' id='switch1' onChange={this.handleInput} />
															<label className='custom-control-label' for='switch1' />
														</div>
													</div>
												</div>
												<div class='form-group col-md-2'>
													<label for='inputEmail4'>Send Security</label>
													<select type='email' class='form-control' id='inputEmail4' placeholder='Email'>
														<option>false</option>
														<option>true</option>
													</select>
												</div>
											</div>
											<div class='form-group col-md-6'>
												<div className='form-group d-flex mb-0'>
													<label className='pr-3' for='inputState'>
														Automatic Product Approval
													</label>
													<div className='custom-control custom-switch'>
														<input name='negotiable' type='checkbox' className='custom-control-input custom-control-input-lg' id='switch1' onChange={this.handleInput} />
														<label className='custom-control-label' for='switch1' />
													</div>
												</div>
											</div>
											<div class='form-row'>
												<button type='submit' class='btn btn-success'>
													send test Email
												</button>
												<button type='submit' class='btn btn-primary ml-auto'>
													Save
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</>
		);
	}
}

export default Dashboard;