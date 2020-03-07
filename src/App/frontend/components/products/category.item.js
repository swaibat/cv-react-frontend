/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { connect } from 'react-redux';
import Card from '../products/item.card';
import constants from '../../../shared/redux/constants';
import Product from '../../../backend/components/products/redux/actions';
import Bread from '../breadcrumb';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Local from '../../../shared/redux/locations/actions';
import Settings from '../../../backend/components/settings/redux/actions';
import dummy from '../../../shared/helper/preloader.helper.json';
import { withRouter } from 'react-router-dom';

class CategoryItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: 12,
			pending: true,
			payload: dummy,
		};

		this.loadMore = this.loadMore.bind(this);
	}

	loadMore() {
		this.setState(prev => {
			return { visible: prev.visible + 8 };
		});
	}
	componentDidMount() {
		const { name, sub } = this.props.match.params;
		this.props.items(sub || name);
		this.props.getCurrency();
		this.props.local();
		this.props.settings();
	}

	render() {
		const { settingsPayload } = this.props;
		const { payload } = this.state;
		return (
			<>
				<Header />
				<main className={`d-flex flex-column align-items-center justify-content-start text-left`}>
					<div className='container p-1 p-md-2 min-vh-80 d-flex w-100 row justify-content-center align-items-center'>
						{this.props.error ? (
							<h1>{this.props.error.message}</h1>
						) : (
							payload &&
							payload.data &&
							settingsPayload && (
								<>
									<div className='w-100'>
										<Bread data={payload && this.props.match.params} />
									</div>
									<div className='row w-100'>
										<Card data={this} />
									</div>
									<div
										onClick={this.loadMore}
										className='btn bg-white text-primary btn-block text-center py-3 mt-3 mb-4 shadow-xs'
									>
										<span>load more</span>
									</div>
								</>
							)
						)}
					</div>
				</main>
				<Footer {...{ state: this.state }} />
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

		items: async name => dispatch(await Product.getProductsByCategory(name)),
		getCurrency: async () => dispatch(await Local.getCurrency()),
		local: async () => dispatch(await Local.getClientInfo()),
		settings: async () => dispatch(await Settings.getSettings()),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.CatItems.payload,
		pending: state.CatItems.pending,
		error: state.CatItems.error,
		currencyPayload: state.GetCurrency.payload,
		currencyPending: state.GetCurrency.pending,
		currencyError: state.GetCurrency.error,
		localPayload: state.getIp.payload,
		localPending: state.getIp.pending,
		localError: state.getIp.error,
		settingsPayload: state.GetSettings.payload,
		settingsPpending: state.GetSettings.pending,
		settingsError: state.GetSettings.error,
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CategoryItem));
