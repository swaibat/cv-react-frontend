import React, { Component } from 'react';
import { connect } from 'react-redux';
import constants from '../../redux/constants/index';
import { singleItems } from '../../redux/actions/items.action';
import Bread from '../Components/breadcrumb';
import ImageGallery from 'react-image-gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare, faHeart } from '@fortawesome/free-solid-svg-icons';
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
				<div className='container min-vh-80'>
					<Bread data={payload && this.props.match.params} />
					<main className='row m-0'>
						<div className='row w-100 m-0 bg-white rounded'>
							<div className='col-md-7 px-2 m-0 pt-2'>
								<div className='rounded border'>
									<ImageGallery className='rounded border mt-n1' items={images} />
								</div>
								<nav className='w-100 mt-3'>
									<div className='nav nav-tabs' id='nav-tab' role='tablist'>
										<a className='nav-item nav-link active' id='nav-home-tab' data-toggle='tab' href='#nav-home' role='tab' aria-controls='nav-home' aria-selected='true'>
											Details
										</a>
										<a className='nav-item nav-link' id='nav-profile-tab' data-toggle='tab' href='#nav-profile' role='tab' aria-controls='nav-profile' aria-selected='false'>
											Comapany Profile
										</a>
										<a className='nav-item nav-link' id='nav-contact-tab' data-toggle='tab' href='#nav-contact' role='tab' aria-controls='nav-contact' aria-selected='false'>
											Contact
										</a>
									</div>
								</nav>
								<div className='tab-content' id='nav-tabContent'>
									<div className='tab-pane fade' id='nav-home' role='tabpanel' aria-labelledby='nav-home-tab'>
										<p className='pt-3'>{payload && payload.data.description}</p>
										<div className='scroll-table rounded overflow-hidden text-sm'>
											<table className='table table-alt'>
												<thead>
													<tr>
														<th className='text-left text-bold'>Specifications</th>
													</tr>
												</thead>

												<tbody>
													{payload &&
														Object.entries(payload.data.adons).map((e, i) => {
															return (
																<tr>
																	<td className='text-left'>{e[0]}</td>
																	<td className='text-left'>{e[1]}</td>
																</tr>
															);
														})}
												</tbody>
											</table>
										</div>
									</div>
									<div className='tab-pane fade active show' id='nav-profile' role='tabpanel' aria-labelledby='nav-profile-tab'>
										<p>Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.</p>
									</div>
									<div className='tab-pane fade' id='nav-contact' role='tabpanel' aria-labelledby='nav-contact-tab'>
										<p>Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim cupidatat. Deserunt officia id Lorem nostrud aute id commodo elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad irure in labore cillum elit enim. Consequat aliquip incididunt ipsum et minim laborum laborum laborum et cillum labore. Deserunt adipisicing cillum id nulla minim nostrud labore eiusmod et amet. Laboris consequat consequat commodo non ut non aliquip reprehenderit nulla anim occaecat. Sunt sit ullamco reprehenderit irure ea ullamco Lorem aute nostrud magna.</p>
									</div>
								</div>
							</div>
							<div className='col-md-5 p-0 m-0 pr-2 text-secondary'>
								<div className='w-100 border p-2 my-2 rounded'>
									<div className='d-flex'>
										<h3 className='font-weight-bold'>$ 200000</h3>
										<div className='ml-auto'>
											<button className='btn text-secondary'>
												<FontAwesomeIcon icon={faShareSquare} />
											</button>
											<button className='btn text-secondary'>
												<FontAwesomeIcon icon={faHeart} />
											</button>
										</div>
									</div>
									<p className=''>{payload && payload.data.name}</p>
									<div className='d-flex justify-content-between'>
										<p>kampala,Ug</p>
										<small>
											<strong>published:</strong> 4 hours ago
										</small>
									</div>
								</div>
								<div className='card h-auto w-100'>
									<ul className='list-group list-group-flush'>
										<li className='list-group-item'>Vestibulum at eros</li>
										<li className='list-group-item'>
											<div id='map'></div>
										</li>
									</ul>
									<div className='card-body'>
										<a href='#' className='btn btn-block btn-primary'>
											visit company website
										</a>
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
													<path d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z' fill='currentColor'></path>
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
													<path d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z' fill='currentColor'></path>
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
													<path d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z' fill='currentColor'></path>
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
													<path d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z' fill='currentColor'></path>
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
													<path d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z' fill='currentColor'></path>
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
													<path d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z' fill='currentColor'></path>
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
													<path d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z' fill='currentColor'></path>
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
													<path d='M4.244 12.252a4.25 4.25 0 1 1 6.697-5.111h1.118a4.25 4.25 0 1 1 6.697 5.111L11.5 19.51l-7.256-7.257zm15.218.71A5.25 5.25 0 1 0 11.5 6.167a5.25 5.25 0 1 0-7.962 6.795l7.962 7.961l7.962-7.96z' fill='currentColor'></path>
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
