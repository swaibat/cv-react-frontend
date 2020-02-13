/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import image from '../../assets/images/img.png';
import constants from '../../redux/constants';
import { viewFavourite, removeFavourite } from '../../redux/actions/favourite.action';
import { connect } from 'react-redux';
import { token } from '../../helper';

class Favourite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pending: true,
			data: [],
		};
		this.handleClick = this.handleClick.bind(this);
	}
	componentDidMount() {
		this.props.favourites(token);
	}
	componentWillReceiveProps(nextProps) {
		// Any time props.email changes, update state.
		if (nextProps.payload !== this.props.payload) {
			this.setState({
				data: nextProps.payload.data,
			});
		}
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
		const { data } = this.state;
		// const items = this.props.props.data.props.payload.data;
		return (
			<>
				<span className='btn border-0 btn-primary fav-side-btn collapsed pr-4 pt-3' data-toggle='collapse' data-target='#collapseExample' aria-expanded='false' aria-controls='collapseExample'>
					<FontAwesomeIcon className='cv-nav-icons' icon={faHeart} />
					<span className='badge badge-light position-absolute ml-n1 mt-2'>3</span>
				</span>
				<div id='collapseExample' className='fav-sidenav collapse no-transition p-3 bg-white shadow text-secondary' data-parent='#categoriesAccordion'>
					<span className=''>
						<h5 className='text'>My favourite</h5>
					</span>
					<hr />
					<ul className='list-unstyled bg-light'>
						{data.map((e, i) => {
							return (
								<li key={i} className='media shadow-xs p-1 my-2 rounded-sm bg-white'>
									<img height='50' width='70' className='mr-3' src={image} alt='mage' />
									<div className='media-body d-flex justify-content-between'>
										<span className='d-flex flex-column'>
											<span className='mt-0 mb-1 text-capitalize text-secondary'>Toyota Spacio</span>
											<span className='text-primary'>shs 5000</span>
										</span>
										<span id={`${i}-${e.ProductId}`} onClick={this.handleClick} className='btn btn-sm'>
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
		payload: state.ViewFavourite.payload,
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
		favourites: async token => dispatch(await viewFavourite(token)),
		delFavourite: async (id, token) => dispatch(await removeFavourite(id, token)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
