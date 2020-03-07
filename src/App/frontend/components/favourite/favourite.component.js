/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import image from '../../../shared/assets/images/img.png';
import constants from '../../../shared/redux/constants';
import Favourites from '../favourite/redux/actions';
import { connect } from 'react-redux';
import { token } from '../../../shared/helper';

class Favourite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pending: true,
			data: [],
			items: [],
			navOpen: false,
		};
		this.handleClick = this.handleClick.bind(this);
		this.openNav = this.openNav.bind(this);
	}
	componentDidMount() {
		this.props.favourites(token);
	}
	componentWillReceiveProps(nextProps) {
		// Any time props.email changes, update state.
		if (nextProps.payloads !== this.props.payloads) {
			this.setState({
				data: nextProps.payloads.data,
			});
		} else if (nextProps.payload !== this.props.payload) {
			this.setState({
				items: nextProps.payload.data,
			});
		}
	}
	openNav() {
		this.setState({ navOpen: !this.state.navOpen });
	}
	handleClick(e) {
		e.preventDefault();
		const targetId = e.target.id;
		const id = targetId.split('-')[1];
		this.props.delFavourite(id, token);
		const index = targetId.split('-')[0];
		const { data } = this.state;
		data.splice(index, 1);
		this.setState({ data });
	}
	render() {
		const { data, items, navOpen } = this.state;
		// console.log(this.props);
		// const favourite = this.props.payload && this.props.payload.data.filter(e => data.map((x, i) => e.id === x.ProductId));
		const favourite = data.map(e => items.find(x => x.id === e.ProductId));
		return (
			<>
				<div
					className={`fav-sidenav p-3 bg-white shadow text-secondary ${
						navOpen ? 'opened' : 'closed'
					}`}
				>
					<span
						className='btn border-0 bg-white fav-side-btn pr-4 pt-3 shadow-sm'
						onClick={this.openNav}
					>
						<FontAwesomeIcon className='cv-nav-icons' icon={faHeart} />
						<span className='badge badge-light position-absolute ml-n1 mt-2'>3</span>
					</span>

					<span className=''>
						<h5 className='text'>My favourite</h5>
					</span>
					<hr />
					<ul className='list-unstyled'>
						{favourite[0] &&
							favourite.map((e, i) => {
								return (
									<li key={i} className='media p-1 my-2 border-bottom'>
										<img height='45' width='60' className='mr-3' src={image} alt='mage' />
										<div className='media-body d-flex justify-content-between'>
											<span className='d-flex flex-column'>
												<span className='mt-0 mb-1 text-capitalize text-secondary text-truncate cart-text'>
													{e.name}
												</span>
												<span className='text-primary'>{e.price}</span>
											</span>
											<span id={`${i}-${e.id}`} onClick={this.handleClick} className='btn btn-sm'>
												&times;
											</span>
										</div>
									</li>
								);
							})}
					</ul>
				</div>
			</>
		);
	}
}

export function mapStateToProps(state) {
	return {
		payloads: state.ViewFavourite.payload,
		error: state.ViewFavourite.error,
		pending: state.ViewFavourite.pending,
		delPayload: state.RemoveFavourite.payload,
		delError: state.RemoveFavourite.error,
		delPending: state.RemoveFavourite.pending,
	};
}
export const mapDispatchToProps = dispatch => {
	return {
		inits: () =>
			dispatch({
				type: constants.REMOVE_FAVOURITE_PENDING,
				pending: true,
			}),
		favourites: async token => dispatch(await Favourites.viewFavourite(token)),
		delFavourite: async (id, token) => dispatch(await Favourites.removeFavourite(id, token)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
