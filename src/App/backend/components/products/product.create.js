/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../products/redux/actions';
import Category from '../categories/redux/actions';
import constants from '../../../shared/redux/constants';
import Sidenav from '../../components/navigation/sidenav';
import { token } from '../../../shared/helper';
import TagInput from './../tag-input';
import AdminNav from '../navigation/admin.nav.component';
import Editor from '../../../shared/components/text-editor';
import Select from '../../../shared/components/select-input';
import FileUploader from './helpers/file.upload';
import CarVariants from '../variants/cars';
import PropertyVariants from '../variants/property';
import FashionVariants from '../variants/fashion';
import PhonesVariants from '../variants/phones';

class CreateItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			selectedCategory: {},
			sub: [],
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleFileChange = this.handleFileChange.bind(this);
	}
	componentDidMount() {
		this.props.init();
		this.props.getCat();
	}
	handleChangeStatus = (d, v, allFiles) => {
		this.setState({ images: allFiles });
	};
	handleInput = e => {
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
	handleFileChange(event) {
		const images = FileUploader(event);
		this.setState({ images });
	}
	componentWillReceiveProps(nextProps) {
		if (nextProps.categories !== this.props.categories) {
			this.setState({ categories: nextProps.categories.data });
		}
	}
	render() {
		const { categories } = this.props;
		const { selectedCategory } = this.state;
		return (
			<>
				<Sidenav />
				<div className='header-bg' />
				<main className='content-wrapper d-flex flex-column align-items-center min-h-display'>
					<AdminNav />
					<div className='container-fluid mt-n2 cv-forms'>
						<div className='w-100 bg-white p-4 mt-4 rounded'>
							<form onSubmit={this.handleSubmit} autocomplete='off'>
								<div className='form-row pt-3'>
									<div className='cv-form-group form-group col-md-6'>
										<div className='cv-form-group form-group px-3'>
											<div className='input-group'>
												<div className='input-group-prepend'>
													<span
														className='input-group-text bg-white rounded-0 cv-chev left'
														id='basic-addon1'
													>
														<ion-icon name='trail-sign-outline' />
													</span>
												</div>
												<input
													name='price'
													type='text'
													className='form-control custom-input'
													aria-describedby='basic-addon1'
													onChange={this.handleInput}
													required
												/>
												<span className='bar' />
												<label className='cv-label left' htmlFor='price'>
													Product Title
												</label>
											</div>
										</div>
									</div>
									<div className='col-md-3'>
										<div className='cv-form-group form-group px-4'>
											{categories && (
												<Select title='Select Category' data={categories.data} pam={this} />
											)}
										</div>
									</div>
									<div className='col-md-3'>
										<div className='cv-form-group form-group px-4'>
											{categories && (
												<Select title='Select Sub Category' data={this.state.sub} pam={this} />
											)}
										</div>
									</div>
								</div>
								<div className='form-row m-0'>
									<div className='form-group col-md-9'>
										<label htmlFor='description'>Description</label>
										<Editor />
									</div>
									<div className='col-md-3'>
										<div className='form-group  px-3 mb-0 '>
											<div className='cv-form-group form-group px-3 pt-3'>
												<div className='input-group'>
													<div className='input-group-prepend'>
														<span
															className='input-group-text bg-white rounded-0 cv-chev left'
															id='basic-addon1'
														>
															<ion-icon src="data:image/svg+xml,%3Csvg id='Capa_1' enable-background='new 0 0 475.293 475.293' height='512' viewBox='0 0 475.293 475.293' width='512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m430.734 415.882h-386.175c-24.571 0-44.559-19.988-44.559-44.559v-74.265c0-8.21 6.643-14.853 14.853-14.853 24.571 0 44.559-19.988 44.559-44.559s-19.988-44.559-44.559-44.559c-8.21.001-14.853-6.642-14.853-14.852v-74.265c0-24.571 19.988-44.559 44.559-44.559h386.176c24.571 0 44.559 19.988 44.559 44.559v74.265c0 8.21-6.643 14.853-14.853 14.853-24.571 0-44.559 19.988-44.559 44.559s19.988 44.559 44.559 44.559c8.21 0 14.853 6.643 14.853 14.853v74.265c-.001 24.57-19.988 44.558-44.56 44.558zm-401.028-105.465v60.906c0 8.195 6.658 14.853 14.853 14.853h386.176c8.195 0 14.853-6.658 14.853-14.853v-60.906c-33.854-6.904-59.412-36.9-59.412-72.771s25.557-65.866 59.412-72.771v-60.905c0-8.195-6.658-14.853-14.853-14.853h-386.176c-8.195 0-14.853 6.658-14.853 14.853v60.906c33.854 6.904 59.412 36.9 59.412 72.771s-25.558 65.866-59.412 72.77z'/%3E%3Cpath d='m-253.192 288.847h253.806v29.716h-253.806z' transform='matrix(.351 -.936 .936 .351 -2.301 12.678)'/%3E%3Cpath id='path-1_20_' d='m163.382 237.647c-24.571 0-44.559-19.988-44.559-44.559s19.988-44.559 44.559-44.559 44.559 19.988 44.559 44.559-19.988 44.559-44.559 44.559zm0-59.412c-8.195 0-14.853 6.658-14.853 14.853s6.658 14.853 14.853 14.853 14.853-6.658 14.853-14.853-6.658-14.853-14.853-14.853z' transform='translate(4 5)'/%3E%3Cpath id='path-1_19_' d='m311.911 326.764c-24.571 0-44.559-19.988-44.559-44.559s19.988-44.559 44.559-44.559 44.559 19.988 44.559 44.559-19.988 44.559-44.559 44.559zm0-59.412c-8.195 0-14.853 6.658-14.853 14.853s6.658 14.853 14.853 14.853 14.853-6.658 14.853-14.853-6.658-14.853-14.853-14.853z' transform='translate(9 8)'/%3E%3C/svg%3E" />
														</span>
													</div>
													<input
														name='price'
														type='text'
														className='form-control custom-input'
														aria-describedby='basic-addon1'
														onChange={this.handleInput}
														required
													/>
													<span className='bar' />
													<label className='cv-label left' htmlFor='price'>
														Actual Price
													</label>
												</div>
											</div>
											<div className='cv-form-group form-group px-3 pt-3'>
												<div className='input-group'>
													<div className='input-group-prepend'>
														<span
															className='input-group-text bg-white rounded-0 cv-chev left'
															id='basic-addon1'
														>
															<ion-icon src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512.001 512.001' style='enable-background:new 0 0 512.001 512.001;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M341.954,328.358c-12.131,0-22-8.542-22-19.041c0-10.5,9.869-19.042,22-19.042c12.131,0,22,8.542,22,19.042 c0,5.522,4.478,10,10,10c5.522,0,10-4.478,10-10c0-18.325-13.654-33.733-32-37.915v-5.201c0-5.522-4.478-10-10-10 c-5.522,0-10,4.478-10,10v5.201c-18.346,4.182-32,19.59-32,37.915c0,21.527,18.841,39.041,42,39.041c12.131,0,22,8.542,22,19.042 s-9.869,19.042-22,19.042c-12.131,0-22-8.542-22-19.042c0-5.522-4.478-10-10-10c-5.522,0-10,4.478-10,10 c0,18.325,13.654,33.733,32,37.915v4.32c0,5.522,4.478,10,10,10c5.522,0,10-4.478,10-10v-4.32c18.346-4.182,32-19.59,32-37.915 C383.954,345.872,365.113,328.358,341.954,328.358z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M451.482,268.876c-13.063-20.355-31.467-36.643-53.222-47.101c-4.979-2.394-10.954-0.298-13.346,4.68 c-2.393,4.978-0.298,10.952,4.68,13.345C427.505,258.024,452,296.963,452,339.001c0,17.988-4.434,35.827-12.821,51.591 c-2.594,4.875-0.745,10.931,4.131,13.525c1.496,0.796,3.104,1.174,4.688,1.174c3.578,0,7.039-1.926,8.837-5.305 C466.756,381.342,472,360.253,472,339.001C472,314.041,464.905,289.792,451.482,268.876z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M357.673,209.002L357,209.001c-5.522,0-10,4.477-10,10c0,5.523,4.478,10,10,10l0.579,0.001c0.016,0,0.031,0,0.048,0 c5.501,0,9.973-4.446,9.999-9.953C367.651,213.526,363.195,209.028,357.673,209.002z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M294.407,438.202c-37.91-18.225-62.405-57.164-62.405-99.201c0-17.988,4.434-35.827,12.821-51.591 c2.594-4.875,0.745-10.931-4.131-13.525c-4.874-2.594-10.932-0.745-13.525,4.131c-9.921,18.645-15.165,39.733-15.165,60.985 c0,24.96,7.095,49.208,20.518,70.125c13.063,20.355,31.467,36.643,53.222,47.102c1.397,0.672,2.873,0.989,4.326,0.989 c3.724,0,7.298-2.089,9.02-5.669C301.479,446.57,299.385,440.595,294.407,438.202z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M327.002,449.001l-0.579-0.002c-5.548-0.01-10.02,4.429-10.045,9.953c-0.026,5.523,4.432,10.021,9.954,10.047l0.67,0.002 c5.522,0,10-4.478,10-10C337.002,453.479,332.524,449.001,327.002,449.001z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M387.409,175.168c-1.217-2.9-2.708-5.633-4.443-8.168H409c25.364,0,46-20.636,46-46s-20.636-46-46-46h-80.08 c5.091-7.402,8.08-16.357,8.08-26c0-25.364-20.636-46-46-46H46C20.636,3,0,23.636,0,49s20.636,46,46,46h80.08 c-5.091,7.402-8.08,16.357-8.08,26s2.988,18.598,8.08,26H100c-25.364,0-46,20.636-46,46c0,14.567,6.814,27.566,17.415,36 C60.814,237.434,54,250.433,54,265s6.814,27.566,17.415,36C60.814,309.434,54,322.433,54,337c0,14.567,6.814,27.566,17.415,36 C60.814,381.434,54,394.433,54,409c0,25.364,20.636,46,46,46h117.85c31.046,33.207,75.212,54.001,124.151,54.001 c93.738,0,170-76.262,170-170C512.001,260.984,459.171,195.083,387.409,175.168z M409,95c14.337,0,26,11.664,26,26 s-11.663,26-26,26h-64H164c-14.337,0-26-11.664-26-26s11.663-26,26-26H409z M46,75c-14.337,0-26-11.664-26-26s11.663-26,26-26h245 c14.337,0,26,11.664,26,26s-11.663,26-26,26H46z M100,167h245c4.028,0,7.885,0.936,11.345,2.612 c-4.73-0.397-9.512-0.611-14.344-0.611c-46.945,0-89.505,19.129-120.299,49.999H100c-14.336,0-26-11.664-26-26S85.664,167,100,167 z M100,239h104.615c-11.352,15.553-20.129,33.095-25.703,52H100c-14.337,0-26-11.663-26-26C74,250.664,85.663,239,100,239z M100,311h74.32c-1.517,9.113-2.319,18.464-2.319,28.001c0,8.146,0.589,16.156,1.702,23.999H100c-14.337,0-26-11.663-26-26 C74,322.663,85.663,311,100,311z M100,435c-14.337,0-26-11.663-26-26c0-14.337,11.663-26,26-26h77.786 c5.046,18.813,13.243,36.346,23.993,52H100z M342.001,489.001c-82.71,0-150-67.29-150-150s67.29-150,150-150s150,67.29,150,150 S424.711,489.001,342.001,489.001z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A" />
														</span>
													</div>
													<input
														name='price'
														type='text'
														className='form-control custom-input'
														aria-describedby='basic-addon1'
														onChange={this.handleInput}
														required
													/>
													<span className='bar' />
													<label className='cv-label left' htmlFor='price'>
														DIscount Price
													</label>
												</div>
											</div>
											{/* <div className='form-group d-flex mb-0'>
											<label className='pr-3' htmlFor='inputState'>
												Price Negotiable
											</label>
											<div className='custom-control custom-switch'>
												<input
													name='negotiable'
													type='checkbox'
													className='custom-control-input custom-control-input-lg'
													id='switch1'
													onChange={this.handleInput}
												/>
												<label className='custom-control-label' htmlFor='switch1' />
											</div>
										</div> */}
										</div>
									</div>
								</div>
								<div className='row'>
									<div className='col-md-9 ml-0'>
										<div className='cv-form-group form-group mt-3 '>
											<TagInput />
										</div>
									</div>
									<div className='col-md-3'>
										<div className='cv-form-group form-group px-3 pt-3'>
											<div className='input-group'>
												<div className='input-group-prepend'>
													<span
														className='input-group-text bg-white rounded-0 cv-chev left'
														id='basic-addon1'
													>
														<ion-icon name='albums-outline' />
													</span>
												</div>
												<input
													name='price'
													type='text'
													className='form-control custom-input'
													aria-describedby='basic-addon1'
													onChange={this.handleInput}
													required
												/>
												<span className='bar' />
												<label className='cv-label left' htmlFor='price'>
													Available Quantity
												</label>
											</div>
										</div>
									</div>
								</div>
								<div className='form-group row'>
									<div className='my-3 col-12'>
										<label for='photo-upload' className='btn btn-sm btn-outline-secondary'>
											<span className='mr-2'>
												<ion-icon name='image-outline' />
											</span>
											Upload Images
										</label>
										<input
											type='file'
											id='photo-upload'
											className='d-none'
											accept='image/*'
											multiple
											onChange={this.handleFileChange}
											required
										/>
										<p>Drag and drop to change images positions</p>
										<div className='img-upload-preview' id='previewContainer' />
									</div>
								</div>

								{selectedCategory.name === 'vehicles' && <CarVariants />}
								{selectedCategory.name === 'property' && <PropertyVariants />}
								<PhonesVariants />
								{selectedCategory.name === 'Fashion' && <FashionVariants />}
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
				type: constants.CREATE_PRODUCT_PENDING,
				pending: true,
			}),

		createItem: async (data, token) => dispatch(await Products.createProduct(data, token)),
		getCat: async () => dispatch(await Category.getCategories()),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.createItem.payload,
		pending: state.createItem.pending,
		error: state.createItem.error,
		categories: state.GetCategories.payload,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateItem);
