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
import { singleItems } from '../../../redux/actions/items.action';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.scss';

class EditItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			categories: [],
			subCategory: [],
		};
		this.handleInputChange = this.handleInputChange.bind(this);
	}
	componentDidMount() {
		this.props.init();
		this.props.getCat();
		category().then(({ payload }) => {
			payload.data.map(cat => {
				this.setState({
					categories: [
						...this.state.categories,
						{
							value: cat.id,
							label: cat.name,
							sub: cat.sub,
							ParentId: cat.ParentId,
						},
					],
				});
				cat.sub.map(sub => {
					console.log(sub.name);
					this.setState({
						subCategory: [
							...this.state.subCategory,
							{
								value: sub.id,
								label: sub.name,
								ParentId: sub.ParentId,
							},
						],
					});
				});
			});
		});
		const { id } = this.props.match.params;
		singleItems(id).then(({ payload }) => this.setState(payload.data));
	}
	handleChangeStatus = (d, v, allFiles) => {
		this.setState({ images: allFiles });
	};
	handleInputChange = event => {
		// console.log(event);
		if (event.sub) {
			event.sub.map(sub => {
				console.log(sub.name);
				this.setState({
					subCategory: [
						...this.state.subCategory,
						{
							value: sub.id,
							label: sub.name,
							ParentId: sub.ParentId,
						},
					],
				});
			});
		}

		// event.sub.length
		// 	? this.setState({
		// 			category: this.state.categories[event.value],
		// 			subCategory: this.state.subCategory,
		// 	  })
		// 	: this.setState({ category: this.state.categories[event.value] });
	};
	handleInput = e => {
		// console.log(e.target);
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({ [name]: value });
	};
	handleSubmit = e => {
		const formData = new FormData();
		e.preventDefault();
		this.props.init();
		const { images } = this.state;
		for (const key in this.state) {
			if (this.state.hasOwnProperty(key) && key !== 'images') {
				formData.append(key, this.state[key]);
			}
		}
		images.map(e => formData.append('images', e.file));
		this.props.createItem(formData, token);
	};
	render() {
		const { state } = this;
		const { categories, subCategory } = this.state;
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
								<a
									className='nav-link text-white'
									href='#'
									data-toggle='tooltip'
									data-placement='bottom'
									title='visit website'
								>
									<FontAwesomeIcon className='admin-nav-icons' icon={faGlobeAfrica} />
								</a>
							</li>
							<li className='nav-item mx-3'>
								<a
									className='nav-link text-white'
									href='#'
									data-toggle='tooltip'
									data-placement='bottom'
									title='Notifications'
								>
									<FontAwesomeIcon className='admin-nav-icons' icon={faBell} />
									<span className='badge badge-light mt-n2 ml-n1 position-absolute'>5</span>
								</a>
							</li>
							<li
								className='dropdown ml-3'
								data-toggle='tooltip'
								data-placement='bottom'
								title='Notifications'
							>
								<button
									className='btn bg-transparent text-white dropdown-toggle'
									type='button'
									id='dropdownMenuButton'
									data-toggle='dropdown'
									aria-haspopup='true'
									aria-expanded='false'
								>
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
										<label htmlFor='category'>title</label>
										<input
											type='text'
											name='name'
											className='form-control'
											value={state.name}
											onInputChange={this.handleInputChange}
										/>
									</div>
									<div className='form-group col-md-3'>
										<label htmlFor='Sub category'>Category</label>
										{categories && (
											<Select
												defaultValue={categories[0]}
												name='CategoryId'
												onChange={this.handleInputChange}
												options={categories}
											/>
										)}
									</div>
									<div className='form-group col-md-3'>
										<label htmlFor='Sub category'>Sub category</label>
										{categories && (
											<Select
												defaultValue='select Category'
												name='CategoryId'
												onChange={this.handleInputChange}
												options={subCategory}
											/>
										)}
									</div>
									<div className='form-group col-md-9'>
										<label htmlFor='description'>Description</label>
										<Editor
											wrapperClassName='demo-wrapper'
											editorClassName='demo-editor'
											value='hello'
											onChange={this.handleInputChange}
											toolbar={{
												inline: { inDropdown: true },
												list: { inDropdown: true },
												textAlign: { inDropdown: true },
												link: { inDropdown: true },
												history: { inDropdown: true },
											}}
										/>
									</div>
									<div className='form-group col-md-3 mb-0'>
										<div className='form-group'>
											<label htmlFor='price'>Price</label>
											<div className='input-group'>
												<div className='input-group-prepend'>
													<span className='input-group-text' id='basic-addon1'>
														$
													</span>
												</div>
												<input
													name='price'
													type='number'
													className='form-control'
													placeholder='e.g 300'
													aria-label='e.g 300'
													aria-describedby='basic-addon1'
													onChange={this.handleInput}
												/>
											</div>
										</div>
										<div className='form-group d-flex mb-0'>
											<label className='pr-3' htmlFor='inputState'>
												Price Negotiable
											</label>
											<div className='custom-control custom-switch'>
												<input
													name='negotiable'
													type='checkbox'
													checked={this.state.negotiable}
													className='custom-control-input custom-control-input-lg'
													id='switch1'
													onChange={this.handleInput}
												/>
												<label className='custom-control-label' htmlFor='switch1' />
											</div>
										</div>
									</div>
								</div>

								<div className='form-group'>
									<label htmlFor='inputZip'>upload images</label>
									<div className='input-group'>
										<Dropzone onChangeStatus={this.handleChangeStatus} accept='image/*' />
									</div>
								</div>
								<div className='form-row'>
									<div className='form-group col-md-2'>
										<label htmlFor='color'>Color</label>
										<CreatableSelect
											isClearable
											onChange={this.handleInputChang}
											options={[
												{ value: 'one', label: 'One' },
												{ value: 'two', label: 'Two' },
												{ value: 'three', label: 'Three' },
											]}
										/>
									</div>
									<div className='form-group col-md-2'>
										<label htmlFor='milage'>milage</label>
										<input
											type='text'
											name='milage'
											className='form-control form-control-sm'
											onChange={this.handleInput}
										/>
									</div>
									<div className='form-group col-md-2'>
										<label htmlFor='transition'>Transition</label>
										<select
											type='text'
											name='transition'
											className='form-control form-control-sm'
											onChange={this.handleInput}
										>
											<option value=''>select transition</option>
											<option value='automatic'>automatic</option>
											<option value='manual'>manual</option>
										</select>
									</div>
									<div className='form-group col-md-2'>
										<label htmlFor='inputZip'>fuel</label>
										<select
											name='fuel'
											type='text'
											className='form-control form-control-sm'
											onChange={this.handleInput}
										>
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
										<label htmlFor='inputZip'>engine size</label>
										<select
											name='engine'
											className='form-control form-control-sm'
											onChange={this.handleInput}
										>
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
										<label htmlFor='year'>Year</label>
										<select
											name='year'
											className='form-control form-control-sm'
											onChange={this.handleInput}
										>
											{years()}
										</select>
									</div>
									<div className='form-group col-md-2'>
										<label htmlFor='brand'>Car brand</label>
										<input
											list='carsData'
											type='text'
											name='brand'
											className='form-control form-control-sm'
											onChange={this.handleInput}
										/>
										<datalist id='carsData'>{brands}</datalist>
									</div>
									<div className='form-group col-md-2'>
										<label htmlFor='model'>car model</label>
										<input
											list='car-model'
											type='text'
											name='model'
											className='form-control form-control-sm'
											onChange={this.handleInput}
										/>
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

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
