/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import constants from '../../redux/constants/index';
import { category } from '../../redux/actions/items.action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Category extends Component {
	componentDidMount() {
		this.props.init();
		this.props.category();
	}

	render() {
		const { payload } = this.props;
		const { href, pathname } = window.location;
		const page = window.location.href.match(/(login|register)/);
		return (
			<div className={page ? 'd-none' : 'nav-scroller bg-white'}>
				<nav className='nav nav-underline text-capitalize justify-content-center cv-category-nav' id='navAccordion'>
					<li className='nav-item'>
						<a href='/' className={`nav-link nav-link-collapse cv-nav${pathname === '/' ? ' active' : ''}`} id='hasSubItems' data-toggle='collapse' data-target='#Home' aria-controls='Home' aria-expanded='true'>
							Home
						</a>
					</li>
					<ul class='nav-second-level z-index-1050  p-nav collapse position-absolute show' id='Home' data-parent='#navAccordion'></ul>
					<li class='nav-item'>
						<a class={`nav-link nav-link-collapse cv-nav${href.match(/category/) ? ' active' : ''}`} href='#' id='hasSubItems' data-toggle='collapse' data-target='#collapseSubItemsCategories' aria-controls='collapseSubItemsCategories' aria-expanded='false'>
							categories
						</a>
						<ul class='nav-second-level z-index-1050  p-nav collapse position-absolute shadow-sm' id='collapseSubItemsCategories' data-parent='#navAccordion'>
							<div className='w-75 bg-white h-auto m-auto nav-cats'>
								<div className='row py-3' id='categoriesAccordion'>
									{payload &&
										payload.data.map((e, index) => {
											return (
												<div className='col-md-3 cat-col border-left'>
													<li className='nav-item text-secondary'>
														<a class='nav-link nav-link-collapse text-secondary py-1' href='#' id='hasSubItems' data-toggle='collapse' data-target={`#Cat${index}`} aria-controls={`Cat${index}`} aria-expanded='false'>
															{e.name}
														</a>
														<ul className='nav-second-level z-index-1050 collapse position-absolute' id={`Cat${index}`} data-parent='#categoriesAccordion'>
															{e.sub.map((sub, i) => {
																return (
																	<li class='nav-item'>
																		<a class='nav-link py-1' href='#'>
																			<span class='nav-link-text'>{sub.name}</span>
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
						<a className='nav-link nav-link-collapse nav-link-show cv-nav' onClick={e => e.target.classList.toggle('active')} href='/category/Agriculture &amp; Foods' id='hasSubItems' data-toggle='collapse' data-target='#category7' aria-controls='category7' aria-expanded='false'>
							Shops
						</a>
						<ul className='nav-second-level z-index-1050  p-nav collapse bg-white position-absolute text-left' id='category7' data-parent='#categoryNav'></ul>
					</li>
					<li class='nav-item'>
						<a class='nav-link nav-link-collapse cv-nav' href='#' id='hasSubItems' data-toggle='collapse' data-target='#services' aria-controls='services' aria-expanded='false'>
							Services
						</a>
						<ul class='nav-second-level z-index-1050 z-index-md p-nav collapse position-absolute' id='services' data-parent='#navAccordion'>
							<li class='nav-item'>
								<a class='nav-link' href='#'>
									<span class='nav-link-text'>Item 2.1</span>
								</a>
							</li>
							<li class='nav-item'>
								<a class='nav-link' href='#'>
									<span class='nav-link-text'>Item 2.2</span>
								</a>
							</li>
						</ul>
					</li>
					<li className='nav-item'>
						<Link to='/contact' class={`nav-link nav-link-collapse cv-nav${href.match(/ontact/) ? 'link-active' : ''}`}>
							contact
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/faq' className={`nav-link cv-nav ${pathname.match('faq') ? 'link-active' : ''}`}>
							faq
						</Link>
					</li>
					<li class='nav-item'>
						<a class='nav-link nav-link-collapse cv-nav' href='#' id='hasSubItems' data-toggle='collapse' data-target='#collapseSubItemsSearch' aria-controls='collapseSubItemsSearch' aria-expanded='false'>
							<FontAwesomeIcon className='mr-1' icon={faSearch} />
						</a>
						<ul class='nav-second-level z-index-1050 p-nav collapse position-absolute shadow-sm' id='collapseSubItemsSearch' data-parent='#navAccordion'>
							<div className='w-75 bg-primary h-auto m-auto nav-cats'>
								<div className='row pt-3' id='navAccordion1'>
									<div className='col-md-4 cat-col'>
										<div class='input-group mb-3'>
											<div class='input-group-prepend'>
												<span class='input-group-text'>Search</span>
											</div>
											<input type='text' class='form-control' aria-label='Amount (to the nearest dollar)' />
											<div class='input-group-append'>
												<span class='input-group-text'>.00</span>
											</div>
										</div>
									</div>
									<div className='col-md-4 cat-col'>
										<div class='input-group mb-3'>
											<div class='input-group-prepend'>
												<span class='input-group-text'>$</span>
											</div>
											<input type='text' class='form-control' aria-label='Amount (to the nearest dollar)' />
											<div class='input-group-append'>
												<span class='input-group-text'>.00</span>
											</div>
										</div>
									</div>
									<div className='col-md-4 cat-col'>
										<div class='input-group mb-3 bg-dark'>
											<div class='input-group-prepend'>
												<span class='input-group-text'>$</span>
											</div>
											<input type='text' class='form-control' aria-label='Amount (to the nearest dollar)' />
											<div class='input-group-append'>
												<span class='input-group-text'>.00</span>
											</div>
										</div>
									</div>
								</div>
								<div className='row pb-3' id='navAccordion1'>
									<div className='col-md-4 cat-col'>
										<div class='input-group mb-3'>
											<div class='input-group-prepend'>
												<span class='input-group-text'>Search</span>
											</div>
											<input type='text' class='form-control' aria-label='Amount (to the nearest dollar)' />
											<div class='input-group-append'>
												<span class='input-group-text'>.00</span>
											</div>
										</div>
									</div>
									<div className='col-md-4 cat-col'>
										<div class='input-group mb-3'>
											<div class='input-group-prepend'>
												<span class='input-group-text'>$</span>
											</div>
											<input type='text' class='form-control' aria-label='Amount (to the nearest dollar)' />
											<div class='input-group-append'>
												<span class='input-group-text'>.00</span>
											</div>
										</div>
									</div>
									<div className='col-md-4 cat-col'>
										<div class='input-group mb-3'>
											<div class='input-group-prepend'>
												<span class='input-group-text'>$</span>
											</div>
											<input type='text' class='form-control' aria-label='Amount (to the nearest dollar)' />
											<div class='input-group-append'>
												<span class='input-group-text'>.00</span>
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

		category: async () => dispatch(await category()),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.categories.payload,
		pending: state.categories.pending,
		error: state.categories.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
