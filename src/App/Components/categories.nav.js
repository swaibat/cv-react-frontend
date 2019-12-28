/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import constants from '../../redux/constants/index';
import { category } from '../../redux/actions/items.action';
import { Icon } from '@iconify/react';
import Arrow from '@iconify/icons-mdi/chevron-right';

class Category extends Component {
	componentDidMount() {
		this.props.init();
		this.props.category();
	}

	render() {
		const { payload } = this.props;
		const page = window.location.href.match(/(login|register)/);
		return (
			<div className={page ? 'd-none' : 'nav-scroller bg-white shadow-sm'}>
				<nav className='nav nav-underline text-capitalize justify-content-center' id='categoryNav'>
					<li className='nav-item border-top cv-nav'>
						<a className='nav-link nav-link-collapse nav-link-show' href='/category/Agriculture &amp; Foods' id='hasSubItems' data-toggle='collapse' data-target='#category7' aria-controls='category7' aria-expanded='true'>
							Home
						</a>
						<ul className='nav-second-level collapse bg-white position-absolute shadow text-left' id='category7' data-parent='#categoryNav'></ul>
					</li>
					<li className='nav-item border-top cv-nav'>
						<a className='nav-link nav-link-collapse nav-link-show' href='/category/Agriculture &amp; Foods' id='hasSubItems' data-toggle='collapse' data-target='#category7' aria-controls='category7' aria-expanded='true'>
							categories
						</a>
						<ul className='nav-second-level collapse bg-white position-absolute shadow text-left' id='category7' data-parent='#categoryNav'>
							<li className='nav-item'>
								<div className='container'>
									<div className='row'>
										{payload &&
											payload.data.map((e, i) => {
												return (
													<li className='nav-item col-md-3' key={i}>
														<a className='nav-link nav-link-show text-primary' href={`/category/${e.name}`} id={'hasSubItems'}>
															{e.name}
															{e.sub.length !== 0 && <Icon icon={Arrow} />}
														</a>
														<ul className='nav-second-level  bg-white text-left'>{/* {e.sub.map((sub, index) => {
																return (
																	<li className='nav-item' key={index}>
																		<a className='nav-link text-left' href={`/category/${e.name}/${sub.name}`}>
																			<span className='nav-link-text'>{sub.name}</span>
																		</a>
																	</li>
																);
															})} */}</ul>
													</li>
												);
											})}
									</div>
								</div>
							</li>
						</ul>
					</li>
					<li className='nav-item border-top cv-nav'>
						<a className='nav-link nav-link-collapse nav-link-show' href='/category/Agriculture &amp; Foods' id='hasSubItems' data-toggle='collapse' data-target='#category7' aria-controls='category7' aria-expanded='true'>
							Shops
						</a>
						<ul className='nav-second-level collapse bg-white position-absolute shadow text-left' id='category7' data-parent='#categoryNav'></ul>
					</li>
					<li className='nav-item border-top cv-nav'>
						<a className='nav-link nav-link-collapse nav-link-show' href='/category/Agriculture &amp; Foods' id='hasSubItems' data-toggle='collapse' data-target='#category7' aria-controls='category7' aria-expanded='true'>
							services
						</a>
						<ul className='nav-second-level collapse bg-white position-absolute shadow text-left' id='category7' data-parent='#categoryNav'></ul>
					</li>
					<li className='nav-item border-top cv-nav'>
						<a className='nav-link nav-link-collapse nav-link-show' href='/category/Agriculture &amp; Foods' id='hasSubItems' data-toggle='collapse' data-target='#category7' aria-controls='category7' aria-expanded='true'>
							Blog
						</a>
						<ul className='nav-second-level collapse bg-white position-absolute shadow text-left' id='category7' data-parent='#categoryNav'></ul>
					</li>
					<li className='nav-item border-top cv-nav'>
						<a className='nav-link nav-link-collapse nav-link-show' href='/category/Agriculture &amp; Foods' id='hasSubItems' data-toggle='collapse' data-target='#category7' aria-controls='category7' aria-expanded='true'>
							contact
						</a>
						<ul className='nav-second-level collapse bg-white position-absolute shadow text-left' id='category7' data-parent='#categoryNav'></ul>
					</li>
					<li className='nav-item border-top cv-nav'>
						<a className='nav-link nav-link-collapse nav-link-show' href='/category/Agriculture &amp; Foods' id='hasSubItems' data-toggle='collapse' data-target='#category7' aria-controls='category7' aria-expanded='true'>
							faq
						</a>
						<ul className='nav-second-level collapse bg-white position-absolute shadow text-left' id='category7' data-parent='#categoryNav'></ul>
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
