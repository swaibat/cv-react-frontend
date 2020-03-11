/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import Products from './redux/actions';
import Category from '../categories/redux/actions';
import constants from '../../../shared/redux/constants';
import Sidenav from '../navigation/sidenav';
import { token } from '../../../shared/helper';
import Select from 'react-select';
import FileUploader from './helpers/file.upload';
import dragula from 'react-dragula';
import AdminNav from '../navigation/admin.nav.component';
import { withRouter } from 'react-router-dom';

class EditItem extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product: {},
			images: [],
			categories: [],
			subCategory: [],
			removedImages: [],
			productImages: [],
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleFileChange = this.handleFileChange.bind(this);
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		document.title = 'Edit Products';
		this.props.init();
		Category.getCategories().then(({ payload }) => {
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
			});
		});
		const { id } = this.props.match.params;
		Products.getSingleProduct(id).then(({ payload }) => {
			const product = payload.data;
			const { Category } = product;
			!Category.ParentId
				? this.setState({
						product,
						sub: {
							value: Category.id,
							label: product.Category.name,
						},
						productImages: product.productFiles,
				  })
				: this.setState({
						product,
						sub: {
							value: Category.id,
							label: product.Category.name,
							parent: {
								value: Category.ParentId,
								label: Category.parent.name,
							},
							productImages: product.productFiles,
						},
				  });
		});
		let container = document.getElementById('previewContainer');
		dragula([container]).on('drop', event => {
			const imgs = [];
			for (let i = 0; i < container.children.length; i++) {
				const e = container.children[i];
				const scr = e.firstElementChild.src;
				const id = e.firstElementChild.id;
				this.state.productImages.find(el => {
					if (el.id === JSON.parse(id)) {
						imgs.push({ ...el, link: scr });
					}
				});
			}
			this.setState({ productImages: imgs });
		});
	}
	handleClick = e => {
		e.preventDefault();
		this.state.productImages.splice(e.target.id.split('-')[0], 1);
		this.setState({
			removedImages: [...new Set([...this.state.removedImages, e.target.id.split('-')[1]])],
		});
	};
	handleInputChange = event => {
		event.sub.length
			? this.setState({
					CategoryId: event.value,
					category: this.state.categories[event.value],
					subCategory: event.sub.map(cat => ({
						value: cat.id,
						label: cat.name,
						sub: cat.sub,
						parent: {
							value: cat.ParentId,
							label: this.state.categories.find(cat => cat.id === cat.ParentId),
						},
					})),
			  })
			: this.setState({ CategoryId: event.value, category: this.state.categories[event.value] });
	};
	handleInput = e => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		this.setState({ product: { ...this.product, [name]: value } });
	};
	handleSubmit = e => {
		const formData = new FormData();
		e.preventDefault();
		this.props.init();
		const { id } = this.props.match.params;
		const { images, removedImages, product } = this.state;
		for (const key in product) {
			if (product.hasOwnProperty(key) && key !== 'images') {
				formData.append(key, product[key]);
			}
		}
		images.map(e => formData.append('images', e));
		formData.append('removedImages', removedImages);
		this.props.updateProduct(formData, token, id);
	};
	handleFileChange(event) {
		const { productImages } = this.state;
		const images = FileUploader(event, productImages);
		this.setState({ images });
	}
	render() {
		const { categories, subCategory, product, sub, productImages } = this.state;
		console.log(this.state.productImages);
		return (
			<>
				<Sidenav />
				<div className='header-bg' />
				<main className='content-wrapper d-flex flex-column align-items-center min-h-display'>
					<AdminNav />
					<div className='container-fluid mt-n2'>
						<div className='w-100 bg-white p-4 mt-4 rounded'>
							<form onSubmit={this.handleSubmit}>
								<div className='form-row'>
									<div className='form-group col-md-6'>
										<label htmlFor='name'>title</label>
										<input
											type='text'
											name='name'
											className='form-control'
											value={product && product.name}
											onChange={this.handleInput}
										/>
									</div>
									<div className='form-group col-md-3'>
										<label htmlFor='Sub category'>Category</label>
										{categories && (
											<Select
												name='CategoryId'
												value={sub && !sub.parent && sub}
												onChange={this.handleInputChange}
												options={categories}
											/>
										)}
									</div>
									<div className='form-group col-md-3'>
										<label htmlFor='Sub category'>Sub category</label>
										<Select
											name='CategoryId'
											value={sub && sub.parent && sub}
											onChange={this.handleInputChange}
											options={subCategory}
										/>
									</div>
									<div className='form-group col-md-6'>
										<label htmlFor='description'>Description</label>
										<div className='card cv-editor'>
											<div className='card-header p-2'>
												<div className='btn-group btn-group-sm mr-2 border'>
													<button className='btn gikaa-link bg-white'>
														<ion-icon src="data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='bold' className='svg-inline--fa fa-bold fa-w-12' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3Cpath fill='currentColor' d='M333.49 238a122 122 0 0 0 27-65.21C367.87 96.49 308 32 233.42 32H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h31.87v288H34a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h209.32c70.8 0 134.14-51.75 141-122.4 4.74-48.45-16.39-92.06-50.83-119.6zM145.66 112h87.76a48 48 0 0 1 0 96h-87.76zm87.76 288h-87.76V288h87.76a56 56 0 0 1 0 112z'%3E%3C/path%3E%3C/svg%3E" />
													</button>
													<button className='btn gikaa-link bg-white'>
														<ion-icon src="data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='italic' className='svg-inline--fa fa-italic fa-w-10' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3Cpath fill='currentColor' d='M320 48v32a16 16 0 0 1-16 16h-62.76l-80 320H208a16 16 0 0 1 16 16v32a16 16 0 0 1-16 16H16a16 16 0 0 1-16-16v-32a16 16 0 0 1 16-16h62.76l80-320H112a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h192a16 16 0 0 1 16 16z'%3E%3C/path%3E%3C/svg%3E" />
													</button>
													<button className='btn gikaa-link bg-white'>
														<ion-icon src="data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='underline' className='svg-inline--fa fa-underline fa-w-14' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3Cpath fill='currentColor' d='M32 64h32v160c0 88.22 71.78 160 160 160s160-71.78 160-160V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H272a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h32v160a80 80 0 0 1-160 0V64h32a16 16 0 0 0 16-16V16a16 16 0 0 0-16-16H32a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16zm400 384H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16z'%3E%3C/path%3E%3C/svg%3E" />
													</button>
													<button className='btn gikaa-link bg-white'>
														<ion-icon name='list-outline' />
													</button>
													<button className='btn gikaa-link bg-white'>
														<ion-icon src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 16.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='319.633px' height='319.634px' viewBox='0 0 319.633 319.634' style='enable-background:new 0 0 319.633 319.634;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M318.766,9.888c-0.063-5.479-4.521-9.888-10-9.888H10.831c-5.523,0-10,4.478-10,10v55c0,5.522,4.477,10,10,10h22.596 c3.039,0,5.912-1.381,7.809-3.753L58.233,50h71.592v81.019H52.316c-12.012,0-21.75,9.738-21.75,21.75s9.738,21.75,21.75,21.75 h77.508v135.115c0,5.521,4.477,10,10,10h40c5.521,0,10-4.479,10-10V174.52h77.492c12.012,0,21.75-9.737,21.75-21.75 s-9.738-21.75-21.75-21.75h-77.492V50h71.512l17.082,21.263c1.898,2.363,4.766,3.737,7.797,3.737h22.588 c2.66,0,5.211-1.061,7.088-2.946c1.878-1.885,2.927-4.441,2.912-7.102L318.766,9.888z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A" />
													</button>
												</div>
												<div className='btn-group btn-group-sm border'>
													<button className='btn gikaa-btn bg-white'>
														<ion-icon name='cut' />
													</button>
													<button className='btn gikaa-btn bg-white'>
														<ion-icon name='code' />
													</button>
													<button className='btn gikaa-btn bg-white'>
														<ion-icon name='copy' />
													</button>
													<button className='btn gikaa-btn bg-white'>
														<ion-icon name='arrow-undo' />
													</button>
													<button className='btn gikaa-btn bg-white'>
														<ion-icon name='arrow-redo' />
													</button>
												</div>
											</div>
											<div className='card-body p-0'>
												<textarea
													className='form-control border-0'
													name=''
													id=''
													rows='2'
												></textarea>
											</div>
											<div className='card-footer p-1 d-flex align-items-center'>
												<small>
													<b>body</b> <span className='ml-2'>p</span>{' '}
												</small>
											</div>
										</div>
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
													value={product && product.price}
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
													checked={product && product.negotiable}
													className='custom-control-input custom-control-input-lg'
													id='switch1'
													onChange={this.handleInput}
												/>
												<label className='custom-control-label' htmlFor='switch1' />
											</div>
										</div>
									</div>
									<div className='my-3 col-12'>
										<label for='photo-upload' className='btn btn-secondary'>
											<FontAwesomeIcon className='mr-2' icon={faImages} />
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
										<div className='img-upload-preview' id='previewContainer'>
											{productImages &&
												productImages.map((image, key) => {
													return (
														<div key={key} id={key} className='previewImage'>
															<img
																className='border shadow-xs'
																id={image.id}
																src={image.link}
																alt='previewImage'
															/>
															<i
																className='icon-bin2-pro-lite'
																id={`${key}-${image.id}`}
																onClick={this.handleClick}
															></i>
														</div>
													);
												})}
										</div>
									</div>
								</div>
								<button type='submit' className='btn btn-primary'>
									<ion-icon name='cloudy' />
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
				type: constants.UPDATE_ITEM_PENDING,
				pending: true,
			}),

		updateProduct: async (data, token, id) =>
			dispatch(await Products.updateProduct(data, token, id)),
		getCat: async () => dispatch(await Category.getCategories()),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.UpdateItem.payload,
		pending: state.UpdateItem.pending,
		error: state.UpdateItem.error,
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditItem));
