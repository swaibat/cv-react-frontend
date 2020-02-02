import React, { Component } from 'react';
import Header from './../Components/Header';
import Footer from './../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Banner from '../../assets/images/img.png';
import { faChevronRight, faChevronLeft, faCar, faHome, faDesktop } from '@fortawesome/free-solid-svg-icons';

class Landing extends Component {
	render() {
		document.title = 'Home';
		return (
			<>
				<Header />
				<main className='d-flex flex-column align-items-center'>
					<div className='container-fluid bg-secondary slider visibility-hidden'>
						<div id='carouselExampleControls' class='carousel slide slider  ' data-ride='carousel'>
							<div class='carousel-inner'>
								<div class='carousel-item active slider'>
									<img class='d-block w-100' src={Banner} alt='First slide' />
								</div>
								<div class='carousel-item slider'>
									<img class='d-block w-100' src={Banner} alt='Second slide' />
								</div>
								<div class='carousel-item slider'>
									<img class='d-block w-100' src={Banner} alt='Third slide' />
								</div>
							</div>
							<a class='carousel-control-prev' href='#carouselExampleControls' role='button' data-slide='prev'>
								<span class='carousel-control-prev-icon' aria-hidden='true'></span>
								<span class='sr-only'>Previous</span>
							</a>
							<a class='carousel-control-next' href='#carouselExampleControls' role='button' data-slide='next'>
								<span class='carousel-control-next-icon' aria-hidden='true'></span>
								<span class='sr-only'>Next</span>
							</a>
						</div>
					</div>
					<div className='container p-1 p-md-2 min-vh-80 d-flex w-100 row justify-content-center align-items-center '>
						<div className='d-none align-items-center justify-content-between mt-n6 bg-white w-100 rounded p-3 '>
							<div className='btn border-0 bg-light'>
								<FontAwesomeIcon icon={faChevronLeft} />
							</div>
							<div className='card cat-card d-flex align-items-center justify-content-around border-0 p-2 bg-light'>
								<FontAwesomeIcon className='text-primary category-main-icon' icon={faCar} />
								<h6>vehicles</h6>
							</div>
							<div className='card cat-card d-flex align-items-center justify-content-around border-0 p-2 bg-light'>
								<FontAwesomeIcon className='text-primary category-main-icon' icon={faHome} />
								<h6>property</h6>
							</div>
							<div className='card cat-card d-flex align-items-center justify-content-around border-0 p-2 bg-light'>
								<FontAwesomeIcon className='text-primary category-main-icon' icon={faDesktop} />
								<h6>electronics</h6>
							</div>
							<div className='card cat-card d-flex align-items-center justify-content-around border-0 p-2 bg-light'>
								<FontAwesomeIcon className='text-primary category-main-icon' icon={faCar} />
								<h6>vehicles</h6>
							</div>
							<div className='card cat-card d-flex align-items-center justify-content-around border-0 p-2 bg-light'>
								<FontAwesomeIcon className='text-primary category-main-icon' icon={faCar} />
								<h6>vehicles</h6>
							</div>
							<div className='card cat-card d-flex align-items-center justify-content-around border-0 p-2 bg-light'>
								<FontAwesomeIcon className='text-primary category-main-icon' icon={faCar} />
								<h6>vehicles</h6>
							</div>
							<div className='card cat-card d-flex align-items-center justify-content-around border-0 p-2 bg-light'>
								<FontAwesomeIcon className='text-primary category-main-icon' icon={faCar} />
								<h6>vehicles</h6>
							</div>
							<div className='card cat-card d-flex align-items-center justify-content-around border-0 p-2 bg-light'>
								<FontAwesomeIcon className='text-primary category-main-icon' icon={faCar} />
								<h6>vehicles</h6>
							</div>
							<div className='card cat-card d-flex align-items-center justify-content-around border-0 p-2 bg-light'>
								<FontAwesomeIcon className='text-primary category-main-icon' icon={faCar} />
								<h6>vehicles</h6>
							</div>
							<div className='card cat-card d-flex align-items-center justify-content-around border-0 p-2 bg-light'>
								<FontAwesomeIcon className='text-primary category-main-icon' icon={faCar} />
								<h6>vehicles</h6>
							</div>
							<div className='card cat-card d-flex align-items-center justify-content-around border-0 p-2 bg-light'>
								<FontAwesomeIcon className='text-primary category-main-icon' icon={faCar} />
								<h6>vehicles</h6>
							</div>

							<div className='btn border-0 bg-light'>
								<FontAwesomeIcon icon={faChevronRight} />
							</div>
						</div>
						<div className='h-50 w-100 py-3'>
							<h5 className='cv-title ml-2'>Similar adverts</h5>
							<div className='m-0 mt-3 row'>
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
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
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
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
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
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
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
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
							</div>
						</div>
						<div className='h-50 w-100 py-3'>
							<h5 className='cv-title ml-2'>Similar adverts</h5>
							<div className='m-0 mt-3 row'>
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
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
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
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
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
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
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
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
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
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
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
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
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
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
								<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
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
					</div>
				</main>
				<Footer />
			</>
		);
	}
}

export default Landing;
