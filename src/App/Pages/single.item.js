import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Components/item.card';
import constants from '../../redux/constants/index';
import { singleItems } from '../../redux/actions/items.action';

class Item extends Component {
	componentDidMount() {
		const { name } = this.props.match.params;
		this.props.init();
		this.props.item(name);
	}

	toggleMenu() {
		this.setState({ visible: !this.state.visible });
	}

	render() {
		const { payload } = this.props;
		console.log('new', payload);
		return (
			<>
				<div className='container vh-50'>
					<main className=' row'>
						<div className='container-fluid row m-auto'>
							<div className='col-md-10 py-5 bg-secondary vh-50'></div>
							<div className='col-md-2 py-5 bg-warning'></div>
						</div>
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
				type: constants.SINGLE_PENDING,
				pending: true,
			}),

		item: async name => dispatch(await singleItems(name)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.singleItem.payload,
		pending: state.singleItem.pending,
		error: state.singleItem.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
