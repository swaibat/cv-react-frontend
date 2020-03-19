import React, { Component } from 'react';

import { connect } from 'react-redux';

import { onPageChangedAction } from '../../../../redux/actions/pagination.action';

const range = (from, to, step = 1) => {
	let i = from;
	const range = [];

	while (i <= to) {
		range.push(i);
		i += step;
	}

	return range;
};

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

class Pagination extends Component {
	componentDidMount() {
		this.gotoPage(1);
	}

	gotoPage = page => {
		this.props.dispatch(onPageChangedAction(page));
	};

	handleClick = (page, evt) => {
		evt.preventDefault();
		this.gotoPage(page);
	};

	handleMoveLeft = evt => {
		evt.preventDefault();
		const { currentPage, pageNeighbours } = this.props;
		this.gotoPage(currentPage - pageNeighbours * 2 - 1);
	};

	handleMoveRight = evt => {
		evt.preventDefault();
		const { currentPage, pageNeighbours } = this.props;
		this.gotoPage(currentPage + pageNeighbours * 2 + 1);
	};

	fetchPageNumbers = () => {
		const { totalPages, currentPage, pageNeighbours } = this.props;

		const totalNumbers = pageNeighbours * 2 + 3;
		const totalBlocks = totalNumbers + 2;

		if (totalPages > totalBlocks) {
			let pages = [];

			const leftBound = currentPage - pageNeighbours;
			const rightBound = currentPage + pageNeighbours;
			const beforeLastPage = totalPages - 1;

			const startPage = leftBound > 2 ? leftBound : 2;
			const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

			pages = range(startPage, endPage);

			const pagesCount = pages.length;
			const singleSpillOffset = totalNumbers - pagesCount - 1;

			const leftSpill = startPage > 2;
			const rightSpill = endPage < beforeLastPage;

			const leftSpillPage = LEFT_PAGE;
			const rightSpillPage = RIGHT_PAGE;

			if (leftSpill && !rightSpill) {
				const extraPages = range(startPage - singleSpillOffset, startPage - 1);
				pages = [leftSpillPage, ...extraPages, ...pages];
			} else if (!leftSpill && rightSpill) {
				const extraPages = range(endPage + 1, endPage + singleSpillOffset);
				pages = [...pages, ...extraPages, rightSpillPage];
			} else if (leftSpill && rightSpill) {
				pages = [leftSpillPage, ...pages, rightSpillPage];
			}

			return [1, ...pages, totalPages];
		}

		return range(1, totalPages);
	};

	render() {
		const { totalCountries, totalPages } = this.props;

		if (!totalCountries) return null;
		if (totalPages === 1) return null;

		const pages = this.fetchPageNumbers();

		return (
			<ul>
				{pages.map((page, index) => {
					if (page === LEFT_PAGE)
						return (
							<li key={index} onClick={this.handleMoveLeft}>
								<span aria-hidden='true'>&laquo;</span>
								<span>Previous</span>
							</li>
						);

					if (page === RIGHT_PAGE)
						return (
							<li key={index} onClick={this.handleMoveRight}>
								<span aria-hidden='true'>&raquo;</span>
								<span>Next</span>
							</li>
						);

					return (
						<li key={index} onClick={e => this.handleClick(page, e)}>
							{page}
						</li>
					);
				})}
			</ul>
		);
	}
}

const mapStateToProps = state => ({
	currentPage: state.products.currentPage,
	pageNeighbours: state.products.pageNeighbours,
	totalCountries: state.products.totalCountries,
	totalPages: state.products.totalPages,
});

export default connect(mapStateToProps)(Pagination);
