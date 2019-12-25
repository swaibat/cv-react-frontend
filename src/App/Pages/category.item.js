/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Components/item.card';
import Filter from '../Components/filter.nav';
import constants from '../../redux/constants/index';
import { itemsByCategory } from '../../redux/actions/items.action';
import Bread from '../Components/breadcrumb';

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
				<div className='container'>
					<Bread data={payload && this.props.match.params} />
					<Filter data={payload && this.props.match.params.name} />
					<main className='content-wrapper row'>
						<div className='container-fluid row m-auto'>{payload && <Card data={payload.data} />}</div>
					</main>
				</div>
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
