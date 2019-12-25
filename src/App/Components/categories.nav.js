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
		return (
			<div className='nav-scroller bg-white shadow-sm'>
				<nav className='nav nav-underline text-capitalize' id='categoryNav'>
					{payload &&
						payload.data.map((e, i) => {
							return (
								<li className='nav-item ' key={i}>
									<a className='nav-link nav-link-collapse nav-link-show' href={`/category/${e.name}`} id={'hasSubItems'} data-toggle='collapse' data-target={`#category${i}`} aria-controls={`category${i}`} aria-expanded='true'>
										{e.name}
										{e.sub.length !== 0 && <Icon icon={Arrow} />}
									</a>
									<ul className='nav-second-level collapse bg-white position-absolute shadow text-left' id={`category${i}`} data-parent='#categoryNav'>
										{e.sub.map((sub, index) => {
											return (
												<li className='nav-item text-left' key={index}>
													<a className='nav-link text-left' href={`/category/${e.name}/${sub.name}`}>
														<span className='nav-link-text'>{sub.name}</span>
													</a>
												</li>
											);
										})}
									</ul>
								</li>
							);
						})}
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
