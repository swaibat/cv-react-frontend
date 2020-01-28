/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPages } from '../../../redux/actions/pages.action';
import constants from '../../../redux/constants/index';
import Sidenav from './components/sidenav';
import AdminNav from './components/admin.nav.component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faPen, faPaperPlane, faImage, faPaperclip } from '@fortawesome/free-solid-svg-icons';

class Page extends Component {
	state = {
		prods: [],
		currentCountries: [],
		currentPage: null,
		totalPages: null,
	};

	componentDidMount() {
		this.props.get();
	}

	render() {
		return (
			<>
				<Sidenav />
				<div className='header-bg' />
				<main className='content-wrapper d-flex flex-column align-items-center min-h-display'>
					<AdminNav />
					<div className='container-fluid mt-n2'>
						<h5 className='cv-title title-light'>Chat</h5>
						<div className='w-100 bg-white px-3 pt-0 mt-4 rounded'>
							<div className='row'>
								<div className='col-md-3 border-right p-1'>
									<nav className='max-vh-80 overflow-y-scroll'>
										<div className='list-group'>
											<a href='#' className='list-group-item border-0 rounded list-group-item-action'>
												<div className='media d-flex align-items-center'>
													<img className='mr-3 rounded-circle' height='50' src='https://via.placeholder.com/150' alt='Generic placeholder image' />
													<div className='media-body text-truncate'>
														<h5 className='mb-1 front-weight-bolder'>Media heading</h5>
													</div>
												</div>
											</a>
											<a href='#' className='list-group-item border-bottom border-0 rounded list-group-item-action'>
												<div className='input-group input-group-sm'>
													<input type='text' className='form-control' aria-label='Amount (to the nearest dollar)' />
													<div className='input-group-append'>
														<span className='input-group-text'>0</span>
													</div>
												</div>
											</a>
											<a href='#' className='list-group-item border-0 rounded list-group-item-action'>
												<div className='media'>
													<img className='mr-3 rounded-circle' height='40' src='https://via.placeholder.com/150' alt='Generic placeholder image' />
													<div className='media-body text-truncate'>
														<p className='mb-1 front-weight-bolder'>Media heading</p>
														<span className='text-secondary'>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
														<span className='badge badge-primary badge-pill'>2</span>
													</div>
												</div>
											</a>
											<a href='#' className='list-group-item border-0 rounded list-group-item-action'>
												<div className='media'>
													<img className='mr-3 rounded-circle' height='40' src='https://via.placeholder.com/150' alt='Generic placeholder image' />
													<div className='media-body text-truncate'>
														<p className='mb-1 front-weight-bolder'>Media heading</p>
														<span className='text-secondary'>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
														<span className='badge badge-primary badge-pill'>2</span>
													</div>
												</div>
											</a>
											<a href='#' className='list-group-item border-0 rounded list-group-item-action bg-light'>
												<div className='media'>
													<img className='mr-3 rounded-circle' height='40' src='https://via.placeholder.com/150' alt='Generic placeholder image' />
													<div className='media-body text-truncate'>
														<p className='mb-1 front-weight-bolder'>Media heading</p>
														<span className='text-secondary'>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
														<span className='badge badge-primary badge-pill'>2</span>
													</div>
												</div>
											</a>
											<a href='#' className='list-group-item border-0 rounded list-group-item-action'>
												<div className='media'>
													<img className='mr-3 rounded-circle' height='40' src='https://via.placeholder.com/150' alt='Generic placeholder image' />
													<div className='media-body text-truncate'>
														<p className='mb-1 front-weight-bolder'>Media heading</p>
														<span className='text-secondary'>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
														<span className='badge badge-primary badge-pill'>2</span>
													</div>
												</div>
											</a>
											<a href='#' className='list-group-item border-0 rounded list-group-item-action'>
												<div className='media'>
													<img className='mr-3 rounded-circle' height='40' src='https://via.placeholder.com/150' alt='Generic placeholder image' />
													<div className='media-body text-truncate'>
														<p className='mb-1 front-weight-bolder'>Media heading</p>
														<span className='text-secondary'>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
														<span className='badge badge-primary badge-pill'>2</span>
													</div>
												</div>
											</a>
											<a href='#' className='list-group-item border-0 rounded list-group-item-action'>
												<div className='media'>
													<img className='mr-3 rounded-circle' height='40' src='https://via.placeholder.com/150' alt='Generic placeholder image' />
													<div className='media-body text-truncate'>
														<p className='mb-1 front-weight-bolder'>Media heading</p>
														<span className='text-secondary'>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
														<span className='badge badge-primary badge-pill'>2</span>
													</div>
												</div>
											</a>
											<a href='#' className='list-group-item border-0 rounded list-group-item-action'>
												<div className='media'>
													<img className='mr-3 rounded-circle' height='40' src='https://via.placeholder.com/150' alt='Generic placeholder image' />
													<div className='media-body text-truncate'>
														<p className='mb-1 front-weight-bolder'>Media heading</p>
														<span className='text-secondary'>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
														<span className='badge badge-primary badge-pill'>2</span>
													</div>
												</div>
											</a>
											<a href='#' className='list-group-item border-0 rounded list-group-item-action'>
												<div className='media'>
													<img className='mr-3 rounded-circle' height='40' src='https://via.placeholder.com/150' alt='Generic placeholder image' />
													<div className='media-body text-truncate'>
														<p className='mb-1 front-weight-bolder'>Media heading</p>
														<span className='text-secondary'>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
														<span className='badge badge-primary badge-pill'>2</span>
													</div>
												</div>
											</a>
											<a href='#' className='list-group-item border-0 rounded list-group-item-action'>
												<div className='media'>
													<img className='mr-3 rounded-circle' height='40' src='https://via.placeholder.com/150' alt='Generic placeholder image' />
													<div className='media-body text-truncate'>
														<p className='mb-1 front-weight-bolder'>Media heading</p>
														<span className='text-secondary'>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.</span>
														<span className='badge badge-primary badge-pill'>2</span>
													</div>
												</div>
											</a>
										</div>
									</nav>
								</div>
								<div className='col-md-9 p-0'>
									<ul className='nav shadow-xs mb-3'>
										<li className='nav-item d-flex align-items-center px-2'>
											<img className='rounded-circle' height='40' src='https://via.placeholder.com/150' alt='image' />
											<a className='nav-link d-flex flex-column' href='#'>
												<span>John Doe</span>
												<small className='text-secondary font-weight-light'>active 56 minutes ago</small>
											</a>
										</li>
										<ul className='nav-item ml-auto d-flex align-items-center'>
											<li className='nav-item'>
												<a className='nav-link' href='#'>
													<FontAwesomeIcon className='' icon={faPen} />
												</a>
											</li>
											<li className='nav-item'>
												<a className='nav-link' href='#'>
													<FontAwesomeIcon className='' icon={faCog} />
												</a>
											</li>
										</ul>
									</ul>
									<div className='d-flex flex-column align-items-start mb-auto mx-2'>
										<div className='p-2 mb-auto vh-71'>
											<div className='d-flex flex-row-reverse'>
												<div className='media my-2 mw-85'>
													<div className='media-body bg-primary text-white p-2 rounded chat-bubble send shadow-xs'>
														Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
														condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
													</div>
													<img className='ml-3 rounded-circle' height='50' src='https://via.placeholder.com/150' alt='image' />
												</div>
											</div>
											<div className='d-flex'>
												<div className='media my-2 mw-85'>
													<img className='mr-3 rounded-circle' height='50' src='https://via.placeholder.com/150' alt='image' />
													<div className='media-body bg-light p-2 rounded chat-bubble receive shadow-xs'>
														Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
														condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
													</div>
												</div>
											</div>
											<div className='d-flex flex-row-reverse'>
												<div className='media my-2 mw-85'>
													<div className='media-body bg-primary text-white p-2 rounded chat-bubble send'>Cras sit amet nibh libero, in gravida nulla.</div>
													<img className='ml-3 rounded-circle' height='50' src='https://via.placeholder.com/150' alt='image' />
												</div>
											</div>
										</div>
										<div className='input-group d-flex align-items-end'>
											<div className='input-group-append'>
												<span className='input-group-text bg-white text-primary border-0'>
													<span>
														<FontAwesomeIcon className='chat-icon' icon={faPaperclip} />
													</span>
												</span>
												<span className='input-group-text bg-white text-primary border-0'>
													<span>
														<FontAwesomeIcon className='chat-icon' icon={faImage} />
													</span>
												</span>
											</div>
											<input type='text' className='form-control rounded-left' aria-label='Amount (to the nearest dollar)' />
											<div className='input-group-append'>
												<span className='input-group-text bg-white text-primary'>
													<span>
														<FontAwesomeIcon className='' icon={faPaperPlane} />
													</span>
												</span>
											</div>
										</div>
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

const mapDispatchToProps = dispatch => {
	return {
		init: () =>
			dispatch({
				type: constants.PAGES_PENDING,
				pending: true,
			}),

		get: async () => dispatch(await getPages()),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.getPages.payload,
		pending: state.getPages.pending,
		error: state.getPages.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
