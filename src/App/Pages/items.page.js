import React, { Component } from 'react';
import Card from '../Components/item.card';
import { items } from '../../redux/actions/items.action';
import constants from '../../redux/constants/index';
import { connect } from 'react-redux';

class Items extends Component {
	componentDidMount() {
		this.props.init();
		this.props.items();
	}

	render() {
		const { payload } = this.props;
		return (
			<main className='d-flex flex-column align-items-center'>
				<div className='container-fluid bg-secondary slider'>
					<h1>Main Content</h1>
				</div>
				{/* two */}
				<div className='product-title w-100'>
					<h4>Featured</h4>
				</div>
				<div className='sponsor-container d-flex w-100 row justify-content-center align-items-center'>{payload && <Card data={payload.data} />}</div>
			</main>
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

		items: async () => dispatch(await items()),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.Items.payload,
		pending: state.Items.pending,
		error: state.Items.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Items);
