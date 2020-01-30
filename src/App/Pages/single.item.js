/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import constants from '../../redux/constants/index';
import { singleItems } from '../../redux/actions/items.action';
import Bread from '../Components/breadcrumb';
import ImageGallery from 'react-image-gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare, faHeart } from '@fortawesome/free-solid-svg-icons';
import Header from './../Components/Header';
import Footer from './../Components/Footer';

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
					<main className='row m-0'>
						<div className='row w-100 m-0 bg-white rounded'>
							<div className='col-md-5 px-2 m-0 pt-2'>
								<div className='rounded border'>
									<ImageGallery className='rounded border mt-n1' items={images} />
								</div>
								<div className='p-3'>
									<span className='cv-title'>Description</span>
									<p className='pt-2'>
										Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
										McClintock, a Latin professor at Hampden-Sydney College in Virginia
									</p>
								</div>
							</div>
							<div className='col-md-7 p-0 m-0 pr-2 text-secondary'>
								<div className='w-100 border p-2 my-2 mb-3 rounded'>
									<div className='d-flex'>
										<h3 className='font-weight-bold text-primary'>{payload && payload.data.name}</h3>
										<div className='ml-auto'>
											<button className='btn text-secondary'>
												<FontAwesomeIcon icon={faShareSquare} />
											</button>
											<button className='btn text-secondary'>
												<FontAwesomeIcon icon={faHeart} />
											</button>
										</div>
									</div>
									<h5 className=''>{payload && payload.data.price}</h5>
									<div className='d-flex justify-content-between'>
										<p>kampala,Ug</p>
										<small>
											<strong>published:</strong> 4 hours ago
										</small>
									</div>
								</div>
								<div className='row'>
									<div className='col-7'>
										<div className='card h-auto w-100 mb-3 overflow-hidden'>
											<table className='table card-specs'>
												<thead className='border-0 thead-light'>
													<tr>
														<th scope='col'>Name</th>
														<th scope='col'>First</th>
													</tr>
												</thead>
												<tbody>
													{payload &&
														Object.entries(payload.data.adons).map((e, i) => {
															return (
																<tr>
																	<td className='text-left font-weight-bold text-capitalize'>{e[0]}</td>
																	<td className='text-left'>{e[1]}</td>
																</tr>
															);
														})}
												</tbody>
											</table>
										</div>
									</div>
									<div className='col-5 pl-0'>
										<div className='card h-auto w-100 overflow-hidden mb-3'>
											<div id='map'></div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='h-50 w-100 py-3'>
							<h5 className='cv-title ml-2'>Similar adverts</h5>
							<div className='m-0 mt-3 row'>
								<div className='col-6 col-md-3 col-sm-4 p-2'>
									<a href='/products/techno spark 4' className='card text-secondary w-100 bg-white border-0 shadow-xs'>
										<div className='banner_holder rounded'>
											<div className='banner_holderImage img-thumbnail'></div>
										</div>
										<div className='card-footer bg-transparent'>
											<span className='heart text-primary shadow-sm'>
												<svg xmlns='http://www.w3.org/2000/svg' focusable='false' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'>
													<path
														d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z'
														fill='currentColor'
													></path>
												</svg>
											</span>
											<p className='card-text mb-1 text-truncate'>techno spark 4</p>
											<h5 className='card-text text-primary'>450000</h5>
										</div>
									</a>
								</div>
								<div className='col-6 col-md-3 col-sm-4 p-2'>
									<a href='/products/techno spark 4' className='card text-secondary w-100 bg-white border-0 shadow-xs'>
										<div className='banner_holder rounded'>
											<div className='banner_holderImage img-thumbnail'></div>
										</div>
										<div className='card-footer bg-transparent'>
											<span className='heart text-primary shadow-sm'>
												<svg xmlns='http://www.w3.org/2000/svg' focusable='false' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'>
													<path
														d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z'
														fill='currentColor'
													></path>
												</svg>
											</span>
											<p className='card-text mb-1 text-truncate'>techno spark 4</p>
											<h5 className='card-text text-primary'>450000</h5>
										</div>
									</a>
								</div>
								<div className='col-6 col-md-3 col-sm-4 p-2'>
									<a href='/products/techno spark 4' className='card text-secondary w-100 bg-white border-0 shadow-xs'>
										<div className='banner_holder rounded'>
											<div className='banner_holderImage img-thumbnail'></div>
										</div>
										<div className='card-footer bg-transparent'>
											<span className='heart text-primary shadow-sm'>
												<svg xmlns='http://www.w3.org/2000/svg' focusable='false' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'>
													<path
														d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z'
														fill='currentColor'
													></path>
												</svg>
											</span>
											<p className='card-text mb-1 text-truncate'>techno spark 4</p>
											<h5 className='card-text text-primary'>450000</h5>
										</div>
									</a>
								</div>
								<div className='col-6 col-md-3 col-sm-4 p-2'>
									<a href='/products/techno spark 4' className='card text-secondary w-100 bg-white border-0 shadow-xs'>
										<div className='banner_holder rounded'>
											<div className='banner_holderImage img-thumbnail'></div>
										</div>
										<div className='card-footer bg-transparent'>
											<span className='heart text-primary shadow-sm'>
												<svg xmlns='http://www.w3.org/2000/svg' focusable='false' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'>
													<path
														d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z'
														fill='currentColor'
													></path>
												</svg>
											</span>
											<p className='card-text mb-1 text-truncate'>techno spark 4</p>
											<h5 className='card-text text-primary'>450000</h5>
										</div>
									</a>
								</div>
								<div className='col-6 col-md-3 col-sm-4 p-2'>
									<a href='/products/techno spark 4' className='card text-secondary w-100 bg-white border-0 shadow-xs'>
										<div className='banner_holder rounded'>
											<div className='banner_holderImage img-thumbnail'></div>
										</div>
										<div className='card-footer bg-transparent'>
											<span className='heart text-primary shadow-sm'>
												<svg xmlns='http://www.w3.org/2000/svg' focusable='false' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'>
													<path
														d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z'
														fill='currentColor'
													></path>
												</svg>
											</span>
											<p className='card-text mb-1 text-truncate'>techno spark 4</p>
											<h5 className='card-text text-primary'>450000</h5>
										</div>
									</a>
								</div>
								<div className='col-6 col-md-3 col-sm-4 p-2'>
									<a href='/products/techno spark 4' className='card text-secondary w-100 bg-white border-0 shadow-xs'>
										<div className='banner_holder rounded'>
											<div className='banner_holderImage img-thumbnail'></div>
										</div>
										<div className='card-footer bg-transparent'>
											<span className='heart text-primary shadow-sm'>
												<svg xmlns='http://www.w3.org/2000/svg' focusable='false' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'>
													<path
														d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z'
														fill='currentColor'
													></path>
												</svg>
											</span>
											<p className='card-text mb-1 text-truncate'>techno spark 4</p>
											<h5 className='card-text text-primary'>450000</h5>
										</div>
									</a>
								</div>
								<div className='col-6 col-md-3 col-sm-4 p-2'>
									<a href='/products/techno spark 4' className='card text-secondary w-100 bg-white border-0 shadow-xs'>
										<div className='banner_holder rounded'>
											<div className='banner_holderImage img-thumbnail'></div>
										</div>
										<div className='card-footer bg-transparent'>
											<span className='heart text-primary shadow-sm'>
												<svg xmlns='http://www.w3.org/2000/svg' focusable='false' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'>
													<path
														d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z'
														fill='currentColor'
													></path>
												</svg>
											</span>
											<p className='card-text mb-1 text-truncate'>techno spark 4</p>
											<h5 className='card-text text-primary'>450000</h5>
										</div>
									</a>
								</div>
								<div className='col-6 col-md-3 col-sm-4 p-2'>
									<a href='/products/techno spark 4' className='card text-secondary w-100 bg-white border-0 shadow-xs'>
										<div className='banner_holder rounded'>
											<div className='banner_holderImage img-thumbnail'></div>
										</div>
										<div className='card-footer bg-transparent'>
											<span className='heart text-primary shadow-sm'>
												<svg xmlns='http://www.w3.org/2000/svg' focusable='false' width='1em' height='1em' preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'>
													<path
														d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z'
														fill='currentColor'
													></path>
												</svg>
											</span>
											<p className='card-text mb-1 text-truncate'>techno spark 4</p>
											<h5 className='card-text text-primary'>450000</h5>
										</div>
									</a>
								</div>
								<div className='w-100 p-3 bg-white my-3 text-center'>load more</div>
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

		item: async name => dispatch(await singleItems(name)),
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
