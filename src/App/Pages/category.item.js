/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Components/item.card';
import Filter from '../Components/filter.nav';
import constants from '../../redux/constants/index';
import { itemsByCategory } from '../../redux/actions/items.action';
import Bread from '../Components/breadcrumb';
import Header from './../Components/Header';
import Footer from './../Components/Footer';

class CategoryItem extends Component {
	componentDidMount() {
		const { name, sub } = this.props.match.params;
		this.props.init();
		this.props.items(sub || name);
	}

	toggleMenu() {
		this.setState({ visible: !this.state.visible });
	}

	render() {
		const { payload } = this.props;
		return (
			<>
				<Header />
				<main className='row'>
					<div className='container min-vh-85'>
						<Bread data={payload && this.props.match.params} />
						<div className='row'>
							<Filter data={payload && this.props.match.params.name} />
							<div className='row col-10 pr-0 pl-3'>{payload && <Card data={payload.data} />}</div>
						</div>
					</div>
				</main>
				<Footer />
			</>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		init: () =>
			dispatch({
				type: constants.ITEMS_PENDING,
				pending: true,
			}),

		items: async name => dispatch(await itemsByCategory(name)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.CatItems.payload,
		pending: state.CatItems.pending,
		error: state.CatItems.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
