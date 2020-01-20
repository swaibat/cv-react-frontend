/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica, faBell } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { category, createItem } from '../../../redux/actions/items.action';
import constants from '../../../redux/constants/index';
import { brands, models } from '../../../helper/cars.helper';
import { getc, years } from '../../../helper/category.helper';
import Sidenav from './components/sidenav';
import { token } from '../../../helper';
import Dropzone from 'react-dropzone-uploader';

class CreateItem extends Component {
	componentDidMount() {
		this.props.init();
		this.props.getCat();
	}
	handleChangeStatus = allFiles => {
		this.setState({ images: allFiles.meta });
	};
	handleInput = e => {
		const target = e.target;
		const value = target.name === 'images' ? e.target.files : target.value;
		const name = target.name;
		this.setState({ [name]: value });
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.init();
		this.props.createItem(this.state, token);
	};
	render() {
		const { categories } = this.props;
		console.log(this.state);
		return (
			<>
				<Sidenav />
				<div className='header-bg' />
				<main className='content-wrapper d-flex flex-column align-items-center min-h-display'>
					<nav className='navbar navbar-dark bg-transparent w-100'>
						<ul className='navbar-nav mr-auto'>
							<li className='nav-item active'>
								<a className='nav-link text-white' href='#'>
									<span className='navbar-toggler-icon text-white'></span>
								</a>
							</li>
						</ul>
						<ul className='d-flex'>
							<li className='nav-item mx-3'>
								<a className='nav-link text-white' href='#' data-toggle='tooltip' data-placement='bottom' title='visit website'>
									<FontAwesomeIcon className='admin-nav-icons' icon={faGlobeAfrica} />
								</a>
							</li>
							<li className='nav-item mx-3'>
								<a className='nav-link text-white' href='#' data-toggle='tooltip' data-placement='bottom' title='Notifications'>
									<FontAwesomeIcon className='admin-nav-icons' icon={faBell} />
									<span className='badge badge-light mt-n2 ml-n1 position-absolute'>5</span>
								</a>
							</li>
							<li className='dropdown ml-3' data-toggle='tooltip' data-placement='bottom' title='Notifications'>
								<button className='btn bg-transparent text-white dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
									admin
								</button>
								<div className='dropdown-menu' aria-labelledby='dropdownMenuButton'>
									<a className='dropdown-item' href='#'>
										Action
									</a>
									<a className='dropdown-item' href='#'>
										Another action
									</a>
									<a className='dropdown-item' href='#'>
										Something else here
									</a>
								</div>
							</li>
						</ul>
					</nav>
					<div className='container-fluid mt-n2'>
						<h5 className='cv-title title-light'>Create Product</h5>
						<div className='w-100 bg-white p-4 mt-4 rounded'>
							<form onSubmit={this.handleSubmit}>
								<div className='form-row'>
									<div className='form-group col-md-6'>
										<label for='category'>title</label>
										<input type='text' name='name' className='form-control' placeholder='enter title' onChange={this.handleInput} />
									</div>
									<div className='form-group col-md-3'>
										<label for='category'>category</label>
										<select name='CategoryId' className='form-control' onChange={this.handleInput}>
											<option value={false}>Select category</option>
											{categories &&
												categories.data.map((category, index) => (
													<option key={index} value={category.id}>
														{category.name}
													</option>
												))}
										</select>
									</div>
									<div className='form-group col-md-3'>
										<label for='Sub category'>Sub category</label>
										<select name='subCategoryId' className='form-control' onChange={this.handleInput} disabled={this.state && getc(categories.data, this.state.categoryId) === false ? true : false}>
											<option selected>Select sub-category</option>
											{this.state && getc(categories.data, this.state.CategoryId)}
										</select>
									</div>
								</div>
								<div className='form-row m-0'>
									<div className='form-group col-md-9'>
										<label for='description'>Description</label>
										<textarea name='description' rows='3' placeholder='item description' className='form-control' onChange={this.handleInput} />
									</div>
									<div className='form-group col-md-3 mb-0'>
										<div className='form-group'>
											<label for='price'>Price</label>
											<div className='input-group'>
												<div className='input-group-prepend'>
													<span className='input-group-text' id='basic-addon1'>
														$
													</span>
												</div>
												<input name='price' type='number' className='form-control' placeholder='e.g 300' aria-label='e.g 300' aria-describedby='basic-addon1' onChange={this.handleInput} />
											</div>
										</div>
										<div className='form-group d-flex mb-0'>
											<label className='pr-3' for='inputState'>
												Price Negotiable
											</label>
											<div className='custom-control custom-switch'>
												<input name='negotiable' type='checkbox' className='custom-control-input custom-control-input-lg' id='switch1' onChange={this.handleInput} />
												<label className='custom-control-label' for='switch1' />
											</div>
										</div>
									</div>
								</div>
								<div className='form-group'>
									<label for='inputZip'>upload images</label>
									<div className='input-group'>
										<Dropzone onChangeStatus={this.handleChangeStatus} accept='image/*' />
									</div>
								</div>
								<div className='form-row'>
									<div className='form-group col-md-2'>
										<label for='color'>Color</label>
										<input type='text' name='color' className='form-control form-control-sm' onChange={this.handleInput} />
									</div>
									<div className='form-group col-md-2'>
										<label for='milage'>milage</label>
										<input type='text' name='milage' className='form-control form-control-sm' onChange={this.handleInput} />
									</div>
									<div className='form-group col-md-2'>
										<label for='transition'>Transition</label>
										<select type='text' name='transition' className='form-control form-control-sm' onChange={this.handleInput}>
											<option value=''>select transition</option>
											<option value='automatic'>automatic</option>
											<option value='manual'>manual</option>
										</select>
									</div>
									<div className='form-group col-md-2'>
										<label for='inputZip'>fuel</label>
										<select name='fuel' type='text' className='form-control form-control-sm' onChange={this.handleInput}>
											<option value=''>select year</option>
											<option value='petrol'>petrol</option>
											<option value='diesel'>diesel</option>
											<option value='electric'>electric</option>
											<option value='hybrid(diesel)'>hybrid(diesel)</option>
											<option value='hybrid(electric)'>hybrid(electric)</option>
											<option value='others'>others</option>
										</select>
									</div>
									<div className='form-group col-md-2'>
										<label for='inputZip'>engine size</label>
										<select name='engine' className='form-control form-control-sm' onChange={this.handleInput}>
											<option value=''>select engine size</option>
											<option>700</option>
											<option>1000</option>
											<option>1300</option>
											<option>1500</option>
											<option>1800</option>
											<option>2000</option>
											<option>2500</option>
											<option>3000</option>
											<option>4000</option>
										</select>
									</div>
									<div className='form-group col-md-2'>
										<label for='year'>Year</label>
										<select name='year' className='form-control form-control-sm' onChange={this.handleInput}>
											{years()}
										</select>
									</div>
									<div className='form-group col-md-2'>
										<label for='brand'>Car brand</label>
										<input list='carsData' type='text' name='brand' className='form-control form-control-sm' onChange={this.handleInput} />
										<datalist id='carsData'>{brands}</datalist>
									</div>
									<div className='form-group col-md-2'>
										<label for='model'>car model</label>
										<input list='car-model' type='text' name='model' className='form-control form-control-sm' onChange={this.handleInput} />
										<datalist id='car-model'>{this.state && models(this.state.brand)}</datalist>
									</div>
								</div>
								<button type='submit' className='btn btn-primary'>
									Create
								</button>
							</form>
						</div>
					</div>
				</main>
			</>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		init: () =>
			dispatch({
				type: constants.CREATE_ITEM_PENDING,
				pending: true,
			}),

		createItem: async (data, token) => dispatch(await createItem(data, token)),
		getCat: async () => dispatch(await category()),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.createItem.payload,
		pending: state.createItem.pending,
		error: state.createItem.error,
		categories: state.categories.payload,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem);
