import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchProducts } from '../../../redux/actions/fetchData';
import { changePageLimit } from '../../../redux/actions/pagination.action';

import ItemList from './components/itemList';
import Pagination from './components/pagination';

class Main extends Component {
	componentDidMount() {
		this.props.dispatch(fetchProducts());
	}

	render() {
		const { currentCountries, totalCountries, currentPage, totalPages } = this.props;

		if (totalCountries === 0) return null;

		return (
			<div>
				<h2>
					<strong>{totalCountries}</strong> Countries
				</h2>
				<div>
					{currentPage && (
						<span>
							Page <span>{currentPage}</span> / <span>{totalPages}</span>
						</span>
					)}
					<div>
						<Pagination />
					</div>
					<div>
						<select id='dropdown' onChange={e => this.props.dispatch(changePageLimit(e.target.value))}>
							<option value='10'>10</option>
							<option value='20'>20</option>
							<option value='30'>30</option>
							<option value='40'>40</option>
							<option value='50'>50</option>
						</select>
					</div>
				</div>
				{currentCountries.map((country, i) => (
					<ItemList key={i} country={country} />
				))}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	currentCountries: state.products.currentCountries,
	currentPage: state.products.currentPage,
	totalCountries: state.products.totalCountries,
	totalPages: state.products.totalPages,
});

export default connect(mapStateToProps)(Main);
