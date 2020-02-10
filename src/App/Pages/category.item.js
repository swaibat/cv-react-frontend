/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Components/item.card';
import constants from '../../redux/constants/index';
import { itemsByCategory } from '../../redux/actions/items.action';
import Bread from '../Components/breadcrumb';
import Header from './../Components/Header';
import Footer from './../Components/Footer';
import { GetCurrency } from '../../redux/actions/currency.action';
import local from '../../redux/actions/local.action';
import { getSettings } from '../../redux/actions/settings.action';

class CategoryItem extends Component {
	constructor(props) {
		super(props);

		this.state = {
			visible: 12,
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
		this.props.init();
		this.props.items(sub || name);
		this.props.getCurrency();
		this.props.local();
		this.props.settings();
	}

	render() {
		const { payload, settingsPayload } = this.props;
		return (
			<>
				<Header />
				<main className='d-flex flex-column align-items-center'>
					<div className='container p-1 p-md-2 min-vh-80 d-flex w-100 row justify-content-center align-items-center'>
						<Bread data={payload && this.props.match.params} />
						<div className='row'>
							<div className='row'>{payload && settingsPayload && <Card data={payload.data} visible={this.state.visible} all={this.props} />}</div>
							<button onClick={this.loadMore} className='btn bg-white text-primary btn-block text-center py-3 mt-3 mb-4 shadow-xs'>
								load more
							</button>
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
		getCurrency: async () => dispatch(await GetCurrency()),
		local: async () => dispatch(await local()),
		settings: async () => dispatch(await getSettings()),
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryItem);
