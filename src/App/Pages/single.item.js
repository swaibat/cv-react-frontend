/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Components/item.card';
import constants from '../../redux/constants/index';
import { singleItems } from '../../redux/actions/items.action';
import Bread from '../Components/breadcrumb';
import AdImg from '../../assets/images/img.png';

class Item extends Component {
	componentDidMount() {
		console.log(window.location.host.split('.')[0]);
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
				<div className='container'>
					<Bread data={payload && this.props.match.params} />
					<main className='d-flex'>
						<div className='item-holder d-flex w-100'>
							<div className='col-md-2 bg-warning'></div>
							<div className='col-md-7'>{/* <img className='h-100 w-100 px-1' src={AdImg} alt='img' /> */}</div>
							<div className='col-md-3 bg-warning'>
								<div class='card'>
									<img class='card-img-top' src='...' alt='cap' />
									<div class='card-body'>
										<h5 class='card-title'>Card title</h5>
										<p class='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									</div>
									<ul class='list-group list-group-flush'>
										<li class='list-group-item'>Cras justo odio</li>
										<li class='list-group-item'>Dapibus ac facilisis in</li>
										<li class='list-group-item'>Vestibulum at eros</li>
									</ul>
									<div class='card-body'>
										<a href='#' class='card-link'>
											Card link
										</a>
										<a href='#' class='card-link'>
											Another link
										</a>
									</div>
								</div>
							</div>
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
