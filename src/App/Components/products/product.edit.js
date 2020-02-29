/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { category, updateItem } from '../../../redux/actions/items.action';
import constants from '../../../redux/constants/index';
import Sidenav from '../../Pages/admin/components/sidenav';
import { token } from '../../../helper';
import { singleItems } from '../../../redux/actions/items.action';
import Select from 'react-select';
import { Editor } from 'react-draft-wysiwyg';
import FileUploader from './helpers/file.upload';
import dragula from 'react-dragula';
import AdminNav from '../../Pages/admin/components/admin.nav.component';
import IosBackspace from 'react-ionicons/lib/IosBackspace';

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
		// this.onDragOver = this.onDragOver.bind(this);
		// this.onDrop = this.onDrop.bind(this);
	}
	// onDrop(event) {
	// 	const b = document.getElementById(event.target.id);
	// 	if (b.classList.length > 1) {
	// 		let container = document.getElementById('previewContainer');
	// 		console.log(container);
	// 	}
	// }
	componentDidMount() {
		this.props.init();
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
			});
		});
		const { id } = this.props.match.params;
		singleItems(id).then(({ payload }) => {
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
		// let cont = document.getElementById('previewContainer');
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
						<h5 className='cv-title title-light'>Create Product</h5>
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
											class='d-none'
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
															<span
																class='preview-del-btn'
																id={`${key}-${image.id}`}
																onClick={this.handleClick}
															>
																<IosBackspace color='grey' />
															</span>
														</div>
													);
												})}
										</div>
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
				type: constants.UPDATE_ITEM_PENDING,
				pending: true,
			}),

		updateProduct: async (data, token, id) => dispatch(await updateItem(data, token, id)),
		getCat: async () => dispatch(await category()),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.UpdateItem.payload,
		pending: state.UpdateItem.pending,
		error: state.UpdateItem.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditItem);
