import React, { Component } from 'react';
import Card from './item.card';
import Products from '../../../backend/components/products/redux/actions';
import constants from '../../../shared/redux/constants';
import { connect } from 'react-redux';
import Header from '../header/Header';
import Footer from '../footer/Footer';

class Items extends Component {
	componentDidMount() {
		this.props.init();
		this.props.items();
	}

	render() {
		const { payload } = this.props;
		return (
			<>
				<Header />
				<main className='d-flex flex-column align-items-center'>
					<div className='container-fluid bg-secondary slider'>
						<h1>Main Content</h1>
					</div>
					{/* two */}
					<div className='product-title w-100'>
						<h4>Featured</h4>
					</div>
					<div className='sponsor-container d-flex w-100 row justify-content-center align-items-center'>
						{payload && <Card data={payload.data} />}
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
				type: constants.PRODUCTS_PENDING,
				pending: true,
			}),

		items: async () => dispatch(await Products.items()),
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
