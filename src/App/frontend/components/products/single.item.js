/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import constants from '../../../shared/redux/constants';
import Products from '../../../backend/components/products/redux/actions';
import Bread from '../breadcrumb';
import ImageGallery from 'react-image-gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare, faHeart } from '@fortawesome/free-solid-svg-icons';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Img from '../../../shared/assets/images/img.png';

const images = [];
class Item extends Component {
	componentDidMount() {
		const { name } = this.props.match.params;
		this.props.init();
		this.props.item(name);
	}

	toggleMenu() {
		this.setState({ visible: !this.state.visible });
	}

	render() {
		const { payload } = this.props;
		if (payload) {
			payload.data.productFiles.map((e, i) => {
				images.push({
					original: e.link,
					thumbnail: e.link,
				});
			});
		}
		document.title = this.props.match.params.name;
		return (
			<>
				<Header />
				<div className='container min-vh-80'>
					<Bread data={payload && this.props.match.params} />
					<main className='row'>
						<div className='col-md-10'>
							<div className='row bg-white py-3 rounded'>
								<div className='col-md-5 pt-2'>
									<div className='p-4'>
										<ImageGallery className='rounded border mt-n1' items={images} />
									</div>
								</div>
								<div className='col-md-7 rounded'>
									<div className='d-flex'>
										<p className=''>{payload && payload.data.name}</p>
										<div className='ml-auto'>
											<button className='btn '>
												<FontAwesomeIcon icon={faShareSquare} />
											</button>
											<button className='btn '>
												<FontAwesomeIcon icon={faHeart} />
											</button>
										</div>
									</div>
									<div className='row align-items-center'>
										<h5 className='mb-0'>US $6.19 - 12.26</h5>
										<p className='mb-0 ml-3'>US $13.18 - 26.08</p>
										<span className='badge text-primary bg-primary-light rounded-0 ml-3'>-53%</span>
									</div>

									<div className='my-3'>
										<p className='mb-1'>avaible sizes</p>
										<div className='btn-group'>
											<button className='btn btn-outline-secondary'>S</button>
											<button className='btn btn-outline-secondary'>M</button>
											<button className='btn btn-outline-secondary'>L</button>
											<button className='btn btn-outline-secondary'>XL</button>
											<button className='btn btn-outline-secondary'>XXL</button>
											<button className='btn btn-outline-secondary'>XXXL</button>
											<button className='btn btn-outline-secondary'>4XL</button>
											<button className='btn btn-outline-secondary'>5XL</button>
										</div>
									</div>
									<div className='my-3'>
										<p className='mb-1'>avaible sizes</p>
										<div className='btn-group color-selector mb-2'>
											<div className='custom-control custom-radio custom-control-inline'>
												<input
													type='radio'
													id='customRadioInline1'
													name='customRadioInline1'
													className='custom-control-input'
												/>
												<label className='custom-control-label red' htmlFor='customRadioInline1' />
											</div>
											<div className='custom-control custom-radio custom-control-inline ml-4'>
												<input
													type='radio'
													id='customRadioInline2'
													name='customRadioInline1'
													className='custom-control-input'
												/>
												<label
													className='custom-control-label orange'
													htmlFor='customRadioInline2'
												/>
											</div>
											<div className='custom-control custom-radio custom-control-inline ml-4'>
												<input
													type='radio'
													id='customRadioInline3'
													name='customRadioInline1'
													className='custom-control-input'
												/>
												<label className='custom-control-label grey' htmlFor='customRadioInline3' />
											</div>
										</div>
									</div>
									<p className='mb-1'>Quantity</p>

									<div className='input-group mb-3 quantity-input'>
										<div className='input-group-prepend'>
											<button className='btn btn-outline-secondary' type='button'>
												-
											</button>
										</div>
										<input
											type='text'
											className='form-control'
											placeholder=''
											aria-label=''
											aria-describedby='basic-addon1'
										/>
										<div className='input-group-append'>
											<button className='btn btn-outline-secondary' type='button'>
												+
											</button>
										</div>
									</div>
									<div className='d-flex'>
										<button className='btn btn-primary'>Buy now</button>
										<button className='btn btn-warning ml-2'>Add to cart</button>
										<button className='btn btn-secondary ml-2'>Add to Favourite</button>
									</div>
									<div className='d-flex justify-content-between'>
										<p>kampala,Ug</p>
										<small>
											<strong>published:</strong> 4 hours ago
										</small>
									</div>
								</div>
							</div>
							<div className='row bg-white p-3 rounded mt-4'>
								<ul
									className='nav nav-pills mb-3 bg-white border-bottom w-100'
									id='pills-tab'
									role='tablist'
								>
									<li className='nav-item'>
										<a
											className='nav-link cv-prdct-nav active pb-0'
											id='pills-home-tab'
											data-toggle='pill'
											href='#pills-home'
											role='tab'
											aria-controls='pills-home'
											aria-selected='true'
										>
											<ion-icon name='reader' />
											Details
										</a>
									</li>
									<li className='nav-item'>
										<a
											className='nav-link pb-0 cv-prdct-nav'
											id='pills-profile-tab'
											data-toggle='pill'
											href='#pills-profile'
											role='tab'
											aria-controls='pills-profile'
											aria-selected='false'
										>
											<ion-icon name='reader' />
											Reviews
										</a>
									</li>
									<li className='nav-item'>
										<a
											className='nav-link pb-0 cv-prdct-nav'
											id='pills-contact-tab'
											data-toggle='pill'
											href='#pills-contact'
											role='tab'
											aria-controls='pills-contact'
											aria-selected='false'
										>
											Specifications
										</a>
									</li>
								</ul>
								<div className='tab-content' id='pills-tabContent'>
									<div
										className='tab-pane fade show active'
										id='pills-home'
										role='tabpanel'
										aria-labelledby='pills-home-tab'
									>
										...
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
						{/* main product end */}
						<div className='col-md-2 mr-0 pr-0'>
							<div className='card h-auto w-100 overflow-hidden mb-3 p-2'>
								<h6>MEHASHA Store</h6>
								<p>235 followers</p>
								<div className='d-flex justify-content-between'>
									<button className='btn btn-sm btn-outline-primary'>follow</button>
									<button className='btn btn-sm btn-primary'>visit store</button>
								</div>
							</div>
							<h6 className='cv-title mb-4'>Related products</h6>
							<div className='card border-0 shadow-xs mb-3'>
								<div className='card-body p-2'>
									<img height='174' className='w-100' src={Img} alt='img' />
								</div>
								<div className='card-body px-2 py-1'>
									<h6>USD 200</h6>
								</div>
							</div>
							<div className='card border-0 shadow-xs mb-3'>
								<div className='card-body p-2'>
									<img height='174' className='w-100' src={Img} alt='img' />
								</div>
								<div className='card-body px-2 py-1'>
									<h6>USD 200</h6>
								</div>
							</div>
							<div className='card border-0 shadow-xs mb-3'>
								<div className='card-body p-2'>
									<img height='174' className='w-100' src={Img} alt='img' />
								</div>
								<div className='card-body px-2 py-1'>
									<h6>USD 200</h6>
								</div>
							</div>
						</div>
					</main>
				</div>
				<Footer />
			</>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		init: () =>
			dispatch({
				type: constants.SINGLE_PENDING,
				pending: true,
			}),

		item: async name => dispatch(await Products.getSingleProduct(name)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.singleItem.payload,
		pending: state.singleItem.pending,
		error: state.singleItem.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
