/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import constants from '../../../shared/redux/constants';
import Categorys from '../../../backend/components/categories/redux/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

class Category extends Component {
	componentDidMount() {
		this.props.init();
		this.props.category();
	}

	render() {
		const { payload } = this.props;
		const { href } = window.location;
		const page = window.location.href.match(/(login|register|verify)/);
		return (
			<div className={page ? 'd-none' : 'nav-scroller bg-white'}>
				<nav
					className='nav nav-underline text-capitalize justify-content-center cv-category-nav'
					id='navAccordion'
				>
					<li className='nav-item'>
						<NavLink exact to='/' className={'nav-link cv-nav'} activeClassName='selected'>
							<ion-icon name='home' />
							Home
						</NavLink>
					</li>
					<li className='nav-item'>
						<a
							className={`nav-link nav-link-collapse cv-nav${
								href.match(/category/) ? ' active' : ''
							}`}
							href='#'
							id='hasSubItems'
							data-toggle='collapse'
							data-target='#collapseSubItemsCategories'
							aria-controls='collapseSubItemsCategories'
							aria-expanded='false'
						>
							<ion-icon name='list' />
							genre
						</a>
						<ul
							className='nav-second-level z-index-1050 bg-light p-nav collapse position-absolute shadow-sm'
							id='collapseSubItemsCategories'
							data-parent='#navAccordion'
						>
							<div className='w-75 bg-light h-auto m-auto nav-cats'>
								<div className='row py-3' id='categoriesAccordion'>
									{payload &&
										payload.data.map((e, index) => {
											return (
												<div key={index} className='col-md-3 cat-col '>
													<li className='nav-item '>
														<a
															className='nav-link nav-link-collapse  py-1'
															href='#'
															id='hasSubItems'
															data-toggle='collapse'
															data-target={`#Cat${index}`}
															aria-controls={`Cat${index}`}
															aria-expanded='false'
														>
															{e.name}
														</a>
														<ul
															className='nav-second-level z-index-1050 collapse'
															id={`Cat${index}`}
															data-parent='#categoriesAccordion'
														>
															{e.sub.map((sub, i) => {
																return (
																	<li key={i} className='nav-item'>
																		<a
																			className='nav-link py-1'
																			href={`/category/${e.name}/${sub.name}`}
																		>
																			<span className='nav-link-text'>{sub.name}</span>
																		</a>
																	</li>
																);
															})}
														</ul>
													</li>
												</div>
											);
										})}
								</div>
							</div>
						</ul>
					</li>
					<li className='nav-item'>
						<a
							className='nav-link nav-link-collapse nav-link-show cv-nav'
							onClick={e => e.target.classList.toggle('active')}
							href='/category/Agriculture &amp; Foods'
							id='hasSubItems'
							data-toggle='collapse'
							data-target='#category7'
							aria-controls='category7'
							aria-expanded='false'
						>
							<ion-icon src="data:image/svg+xml,%3Csvg aria-hidden='true' focusable='false' data-prefix='fas' data-icon='store' className='svg-inline--fa fa-store fa-w-20' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 616 512'%3E%3Cpath fill='currentColor' d='M602 118.6L537.1 15C531.3 5.7 521 0 510 0H106C95 0 84.7 5.7 78.9 15L14 118.6c-33.5 53.5-3.8 127.9 58.8 136.4 4.5.6 9.1.9 13.7.9 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18 20.1 44.3 33.1 73.8 33.1 29.6 0 55.8-13 73.8-33.1 18.1 20.1 44.3 33.1 73.8 33.1 4.7 0 9.2-.3 13.7-.9 62.8-8.4 92.6-82.8 59-136.4zM529.5 288c-10 0-19.9-1.5-29.5-3.8V384H116v-99.8c-9.6 2.2-19.5 3.8-29.5 3.8-6 0-12.1-.4-18-1.2-5.6-.8-11.1-2.1-16.4-3.6V480c0 17.7 14.3 32 32 32h448c17.7 0 32-14.3 32-32V283.2c-5.4 1.6-10.8 2.9-16.4 3.6-6.1.8-12.1 1.2-18.2 1.2z'%3E%3C/path%3E%3C/svg%3E" />
							Shops
						</a>
						<ul
							className='nav-second-level z-index-1050  p-nav collapse bg-white position-absolute text-left'
							id='category7'
							data-parent='#categoryNav'
						></ul>
					</li>
					<li className='nav-item'>
						<a
							className='nav-link nav-link-collapse cv-nav'
							href='#'
							id='hasSubItems'
							data-toggle='collapse'
							data-target='#services'
							aria-controls='services'
							aria-expanded='false'
						>
							<ion-icon src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3C!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512.001 512.001' style='enable-background:new 0 0 512.001 512.001;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cpath d='M271.029,0c-33.091,0-61,27.909-61,61s27.909,61,61,61s60-27.909,60-61S304.12,0,271.029,0z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M337.621,122c-16.485,18.279-40.096,30-66.592,30c-26.496,0-51.107-11.721-67.592-30 c-14.392,15.959-23.408,36.866-23.408,60v15c0,8.291,6.709,15,15,15h151c8.291,0,15-6.709,15-15v-15 C361.029,158.866,352.013,137.959,337.621,122z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M144.946,460.404L68.505,307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979,9.897 c-7.439,3.689-10.466,12.73-6.753,20.156l90,180c3.701,7.423,12.704,10.377,20.083,6.738l19.722-9.771 C146.291,493.308,152.354,475.259,144.946,460.404z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3Cg%3E%3Cpath d='M499.73,247.7c-12.301-9-29.401-7.2-39.6,3.9l-82,100.8c-5.7,6-16.5,9.6-22.2,9.6h-69.901c-8.401,0-15-6.599-15-15 s6.599-15,15-15c20.09,0,42.332,0,60,0c16.5,0,30-13.5,30-30s-13.5-30-30-30c-70.446,0-3.25,0-78.6,0 c-7.476,0-11.204-4.741-17.1-9.901c-23.209-20.885-57.949-30.947-93.119-22.795c-19.528,4.526-32.697,12.415-46.053,22.993 l-0.445-0.361L89.016,281.03L174.28,452h25.248h146.501c28.2,0,55.201-13.5,72.001-36l87.999-126 C515.929,276.799,513.229,257.601,499.73,247.7z'/%3E%3C/g%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3Cg%3E%3C/g%3E%3C/svg%3E%0A" />
							Services
						</a>
						<ul
							className='nav-second-level z-index-1050 z-index-md p-nav collapse position-absolute'
							id='services'
							data-parent='#navAccordion'
						>
							<li className='nav-item'>
								<a className='nav-link' href='#'>
									<span className='nav-link-text'>Item 2.1</span>
								</a>
							</li>
							<li className='nav-item'>
								<a className='nav-link' href='#'>
									<span className='nav-link-text'>Item 2.2</span>
								</a>
							</li>
						</ul>
					</li>
					<li className='nav-item'>
						<NavLink
							to='/contact'
							activeClassName='selected'
							className='nav-link nav-link-collapse cv-nav'
						>
							<ion-icon src="data:image/svg+xml,%3Csvg height='512pt' viewBox='0 0 512 512' width='512pt' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m162.296875 505.039062c-33.746094-35.136718-37.246094-82.339843-37.390625-98.476562l-90.582031 38.539062c-20.847657 8.871094-34.32031275 29.242188-34.324219 51.898438v14.992188l169.601562.003906c-2.523437-2.207032-4.964843-4.519532-7.304687-6.957032zm0 0'/%3E%3Cpath d='m477.675781 445.101562-90.582031-38.539062c-.144531 16.140625-3.636719 63.332031-37.390625 98.472656-2.339844 2.441406-4.78125 4.757813-7.308594 6.960938l169.605469.003906v-15.003906c-.003906-22.652344-13.476562-43.023438-34.324219-51.894532zm0 0'/%3E%3Cpath d='m357.070312 384.25c-26.355468 25.527344-62.230468 39.582031-101.070312 39.582031s-74.714844-14.054687-101.070312-39.582031v19.222656c-.136719 4.878906-.550782 50.011719 29.003906 80.78125 17.679687 18.410156 41.929687 27.742188 72.066406 27.742188 30.140625 0 54.386719-9.332032 72.066406-27.742188 29.554688-30.769531 29.144532-75.902344 29.003906-80.78125zm0 0'/%3E%3Cpath d='m113.953125 286.832031v-107.09375c0-10.589843 1.023437-20.984375 3.03125-31.085937h-13.03125c-24.8125 0-45 20.1875-45 45v64.507812c0 24.816406 20.1875 45.003906 45 45.003906h10.957031c-.628906-5.375-.957031-10.824218-.957031-16.332031zm0 0'/%3E%3Cpath d='m408.046875 148.652344h-13.429687c2.273437 10.738281 3.429687 21.804687 3.429687 33.128906v105.050781c0 5.507813-.328125 10.957031-.957031 16.328125h10.957031c24.8125 0 45-20.183594 45-45v-64.507812c0-24.8125-20.1875-45-45-45zm0 0'/%3E%3Cpath d='m256 0c-89.503906 0-142.570312 40.855469-155.402344 118.734375 1.113282-.046875 2.230469-.082031 3.355469-.082031h22.285156c6.488281-15.324219 14.554688-27.023438 24.515625-35.570313 12.164063-10.4375 26.570313-15.726562 42.820313-15.726562 17.351562 0 33.328125 6.203125 46.164062 11.1875 5.300781 2.0625 13.265625 5.152343 16.253907 5.441406 2.914062-.292969 10.640624-3.363281 15.78125-5.40625 12.589843-5 28.257812-11.226563 45.503906-11.226563 37 0 57.167968 27.59375 67.664062 51.296876h23.105469c1.125 0 2.242187.039062 3.355469.085937-12.832032-77.878906-65.898438-118.734375-155.402344-118.734375zm0 0'/%3E%3Cpath d='m341.15625 324.121094c-14.007812 9.34375-30.316406 14.28125-47.15625 14.28125h-23c-8.28125 0-15-6.714844-15-15s6.71875-15 15-15h23c10.894531 0 21.449219-3.195313 30.511719-9.238282l43.535156-29.03125v-88.351562c0-17.171875-3.296875-34.226562-10.097656-49.996094-28.109375-65.1875-73.5625-17.789062-101.949219-17.789062-29.25 0-79.058594-50.335938-105.121094 24.074218-4.6875 13.378907-6.925781 27.492188-6.925781 41.667969v107.089844c0 59.097656 46.988281 107.003906 112.046875 107.003906 57.269531 0 100.527344-37.125 110.066406-86.324219zm0 0'/%3E%3C/svg%3E" />
							contact
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink to='/faq' className='nav-link cv-nav' activeClassName='selected'>
							<ion-icon src="data:image/svg+xml,%3C%3Fxml version='1.0'%3F%3E%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 96 96' width='512' height='512'%3E%3Cg id='_21-information' data-name='21-information'%3E%3Cg id='Glyph'%3E%3Cpath d='M60,20c1.437,0,2.856.072,4.255.206A37.724,37.724,0,0,0,36,8C16.149,8,0,22.355,0,40A29.734,29.734,0,0,0,8.5,60.666c-1.992,3.986-4.184,6.7-6.29,7.756A4,4,0,0,0,4,76a43.452,43.452,0,0,0,19.915-4.477A32.849,32.849,0,0,1,20,56C20,36.149,37.944,20,60,20Z'/%3E%3Cpath d='M93.789,84.422c-2.106-1.053-4.3-3.77-6.29-7.756A29.734,29.734,0,0,0,96,56c0-17.645-16.149-32-36-32S24,38.355,24,56,40.149,88,60,88a40.175,40.175,0,0,0,10.413-1.358A42.8,42.8,0,0,0,92,92a4,4,0,0,0,1.789-7.578ZM64,72H56V56h8ZM60,52a4,4,0,1,1,4-4A4,4,0,0,1,60,52Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A" />
							faq
						</NavLink>
					</li>
					<li className='nav-item'>
						<a
							className='nav-link nav-link-collapse cv-nav'
							href='#'
							id='hasSubItems'
							data-toggle='collapse'
							data-target='#collapseSubItemsSearch'
							aria-controls='collapseSubItemsSearch'
							aria-expanded='false'
						>
							<ion-icon name='options' />
						</a>
						<ul
							className='nav-second-level z-index-1050 p-nav bg-light collapse position-absolute shadow'
							id='collapseSubItemsSearch'
							data-parent='#navAccordion'
						>
							<div className='w-75 h-auto m-auto nav-cats'>
								<div className='row pt-3 mb-3' id='navAccordion1'>
									<div className='col-md-4 cat-col'>
										<div className='input-group shadow-xs'>
											<div className='input-group-prepend'>
												<span className='input-group-text bg-white'>Search</span>
											</div>
											<input
												type='text'
												className='form-control '
												aria-label='Amount (to the nearest dollar)'
											/>
											<div className='input-group-append'>
												<span className='input-group-text bg-white'>.00</span>
											</div>
										</div>
									</div>
									<div className='col-md-4 cat-col'>
										<div className='input-group shadow-xs'>
											<div className='input-group-prepend'>
												<span className='input-group-text bg-white'>$</span>
											</div>
											<input
												type='text'
												className='form-control'
												aria-label='Amount (to the nearest dollar)'
											/>
											<div className='input-group-append'>
												<span className='input-group-text bg-white'>.00</span>
											</div>
										</div>
									</div>
									<div className='col-md-4 cat-col'>
										<div className='input-group shadow-xs'>
											<div className='input-group-prepend'>
												<span className='input-group-text bg-white'>$</span>
											</div>
											<input
												type='text'
												className='form-control'
												aria-label='Amount (to the nearest dollar)'
											/>
											<div className='input-group-append'>
												<span className='input-group-text bg-white'>.00</span>
											</div>
										</div>
									</div>
								</div>
								<div className='row pb-3' id='navAccordion1'>
									<div className='col-md-4 cat-col'>
										<div className='input-group shadow-xs'>
											<div className='input-group-prepend'>
												<span className='input-group-text bg-white'>$</span>
											</div>
											<input
												type='text'
												className='form-control'
												aria-label='Amount (to the nearest dollar)'
											/>
											<div className='input-group-append'>
												<span className='input-group-text bg-white'>.00</span>
											</div>
										</div>
									</div>
									<div className='col-md-4 cat-col'>
										<div className='input-group shadow-xs'>
											<div className='input-group-prepend'>
												<span className='input-group-text bg-white bg-white'>$</span>
											</div>
											<input
												type='text'
												className='form-control'
												aria-label='Amount (to the nearest dollar)'
											/>
											<div className='input-group-append'>
												<span className='input-group-text bg-white'>.00</span>
											</div>
										</div>
									</div>
									<div className='col-md-4 cat-col'>
										<div className='input-group shadow-xs'>
											<div className='input-group-prepend'>
												<span className='input-group-text bg-white'>$</span>
											</div>
											<input
												type='text'
												className='form-control'
												aria-label='Amount (to the nearest dollar)'
											/>
											<div className='input-group-append'>
												<span className='input-group-text bg-white'>.00</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</ul>
					</li>
				</nav>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		init: () =>
			dispatch({
				type: constants.CATEGORY_PENDING,
				pending: true,
			}),

		category: async () => dispatch(await Categorys.getCategories()),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.GetCategories.payload,
		pending: state.GetCategories.pending,
		error: state.GetCategories.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
