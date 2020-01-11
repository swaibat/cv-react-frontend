/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import constants from '../../redux/constants/index';
import { category } from '../../redux/actions/items.action';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faSearch } from '@fortawesome/free-solid-svg-icons';

class Category extends Component {
	componentDidMount() {
		this.props.init();
		this.props.category();
	}

	render() {
		const { payload } = this.props;
		const page = window.location.href.match(/(login|register)/);
		return (
			<div className={page ? 'd-none' : 'nav-scroller bg-white'}>
				<nav className='nav nav-underline text-capitalize justify-content-center cv-category-nav' id='navAccordion'>
					<li className='nav-item'>
						<a class='nav-link nav-link-collapse cv-nav' href='/' id='hasSubItems' data-toggle='collapse' data-target='#Home' aria-controls='Home' aria-expanded='false'>
							Home
						</a>
					</li>
					<li class='nav-item'>
						<a class='nav-link nav-link-collapse cv-nav' href='#' id='hasSubItems' data-toggle='collapse' data-target='#collapseSubItemsCategories' aria-controls='collapseSubItemsCategories' aria-expanded='false'>
							categories
						</a>
						<ul class='nav-second-level  p-nav collapse position-absolute' id='collapseSubItemsCategories' data-parent='#navAccordion'>
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
						<a className='nav-link nav-link-collapse nav-link-show cv-nav' onClick={e => e.target.classList.toggle('active')} href='/category/Agriculture &amp; Foods' id='hasSubItems' data-toggle='collapse' data-target='#category7' aria-controls='category7' aria-expanded='false'>
							Shops
						</a>
						<ul className='nav-second-level  p-nav collapse bg-white position-absolute text-left' id='category7' data-parent='#categoryNav'></ul>
					</li>
					<li className='nav-item'>
						<a className='nav-link nav-link-collapse nav-link-show cv-nav' onClick={e => e.target.classList.toggle('active')} href='/category/Agriculture &amp; Foods' id='hasSubItems' data-toggle='collapse' data-target='#category7' aria-controls='category7' aria-expanded='false'>
							services
						</a>
						<ul className='nav-second-level  p-nav collapse bg-white position-absolute text-left' id='category7' data-parent='#categoryNav'></ul>
					</li>
					<li className='nav-item'>
						<a className='nav-link nav-item  nav-link-collapse nav-link-show cv-nav' onClick={e => e.target.classList.toggle('active')} href='/category/Agriculture &amp; Foods' id='hasSubItems' data-toggle='collapse' data-target='#category7' aria-controls='category7' aria-expanded='false'>
							Blog
						</a>
						<ul className='nav-second-level  p-nav collapse bg-white position-absolute text-left' id='category7' data-parent='#categoryNav'></ul>
					</li>
					<li className='nav-item'>
						<a className='nav-link nav-link-collapse nav-link-show cv-nav' onClick={e => e.target.classList.toggle('active')} href='/category/Agriculture &amp; Foods' id='hasSubItems' data-toggle='collapse' data-target='#category7' aria-controls='category7' aria-expanded='false'>
							contact
						</a>
						<ul className='nav-second-level  p-nav collapse bg-white position-absolute text-left' id='category7' data-parent='#categoryNav'></ul>
					</li>
					<li className='nav-item'>
						<a className='nav-link nav-link-collapse nav-link-show cv-nav' onClick={e => e.target.classList.toggle('active')} href='/category/Agriculture &amp; Foods' id='hasSubItems' data-toggle='collapse' data-target='#category7' aria-controls='category7' aria-expanded='false'>
							faq
						</a>
						<ul className='nav-second-level  p-nav collapse bg-white position-absolute text-left' id='category7' data-parent='#categoryNav'></ul>
					</li>
					<li class='nav-item'>
						<a class='nav-link nav-link-collapse cv-nav' href='#' id='hasSubItems' data-toggle='collapse' data-target='#collapseSubItemsSearch' aria-controls='collapseSubItemsSearch' aria-expanded='false'>
							<FontAwesomeIcon className='mr-1' icon={faSearch} />
						</a>
						<ul class='nav-second-level p-nav collapse position-absolute' id='collapseSubItemsSearch' data-parent='#navAccordion'>
							<div className='w-75 bg-white h-auto m-auto nav-cats'>
								<div className='row  ' id='navAccordion1'>
									<div className='col-md-2 cat-col '>
										<li className='nav-item'>
											<a class='nav-link nav-link-collapse' href='#' id='hasSubItems' data-toggle='collapse' data-target='#One' aria-controls='One' aria-expanded='false'>
												One
											</a>
											<ul className='nav-second-level bg-white position-absolute  show text-left' id='One' data-parent='#navAccordion1'>
												<li class='nav-item pl-0'>
													<a class='nav-link py-1' href='#'>
														<span class='nav-link-text'>Title</span>
													</a>
												</li>
												<li class='nav-item pl-0'>
													<a class='nav-link py-1' href='#'>
														<span class='nav-link-text'>Item 3.2</span>
													</a>
												</li>
											</ul>
										</li>
									</div>
									<div className='col-md-2 cat-col '>
										<li className='nav-item pl-0'>
											<a class='nav-link nav-link-collapse' href='#' id='hasSubItems' data-toggle='collapse' data-target='#One' aria-controls='One' aria-expanded='false'>
												One
											</a>
											<ul className='nav-second-level  bg-white position-absolute  show text-left' id='One' data-parent='#navAccordion1'>
												<li class='nav-item pl-0'>
													<a class='nav-link py-1' href='#'>
														<span class='nav-link-text'>Title</span>
													</a>
												</li>
												<li class='nav-item pl-0'>
													<a class='nav-link py-1' href='#'>
														<span class='nav-link-text'>Item 3.2</span>
													</a>
												</li>
											</ul>
										</li>
									</div>
									<div className='col-md-2 cat-col '>
										<li className='nav-item pl-0'>
											<a class='nav-link nav-link-collapse' href='#' id='hasSubItems' data-toggle='collapse' data-target='#One' aria-controls='One' aria-expanded='false'>
												One
											</a>
											<ul className='nav-second-level bg-white position-absolute  show text-left' id='One' data-parent='#navAccordion1'>
												<li class='nav-item pl-0'>
													<a class='nav-link py-1' href='#'>
														<span class='nav-link-text'>Title</span>
													</a>
												</li>
												<li class='nav-item pl-0'>
													<a class='nav-link py-1' href='#'>
														<span class='nav-link-text'>Item 3.2</span>
													</a>
												</li>
											</ul>
										</li>
									</div>
									<div className='col-md-2 cat-col '>
										<li className='nav-item pl-0'>
											<a class='nav-link nav-link-collapse' href='#' id='hasSubItems' data-toggle='collapse' data-target='#One' aria-controls='One' aria-expanded='false'>
												One
											</a>
											<ul className='nav-second-level bg-white position-absolute  show text-left' id='One' data-parent='#navAccordion1'>
												<li class='nav-item pl-0'>
													<a class='nav-link py-1' href='#'>
														<span class='nav-link-text'>Title</span>
													</a>
												</li>
												<li class='nav-item pl-0'>
													<a class='nav-link py-1' href='#'>
														<span class='nav-link-text'>Item 3.2</span>
													</a>
												</li>
											</ul>
										</li>
									</div>
									<div className='col-md-2 cat-col '>
										<li className='nav-item pl-0'>
											<a class='nav-link nav-link-collapse' href='#' id='hasSubItems' data-toggle='collapse' data-target='#One' aria-controls='One' aria-expanded='false'>
												One
											</a>
											<ul className='nav-second-level bg-white position-absolute  show text-left' id='One' data-parent='#navAccordion1'>
												<li class='nav-item pl-0'>
													<a class='nav-link py-1' href='#'>
														<span class='nav-link-text'>Title</span>
													</a>
												</li>
												<li class='nav-item pl-0'>
													<a class='nav-link py-1' href='#'>
														<span class='nav-link-text'>Item 3.2</span>
													</a>
												</li>
											</ul>
										</li>
									</div>
									<div className='col-md-2 cat-col '>
										<li className='nav-item pl-0'>
											<a class='nav-link nav-link-collapse' href='#' id='hasSubItems' data-toggle='collapse' data-target='#One' aria-controls='One' aria-expanded='false'>
												One
											</a>
											<ul className='nav-second-level bg-white position-absolute  show text-left' id='One' data-parent='#navAccordion1'>
												<li class='nav-item pl-0'>
													<a class='nav-link py-1' href='#'>
														<span class='nav-link-text'>Title</span>
													</a>
												</li>
												<li class='nav-item pl-0'>
													<a class='nav-link py-1' href='#'>
														<span class='nav-link-text'>Item 3.2</span>
													</a>
												</li>
											</ul>
										</li>
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
