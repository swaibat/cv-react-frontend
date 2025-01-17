/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import constants from '../../../shared/redux/constants';
import Favourite from '../../components/favourite/redux/actions';
import { connect } from 'react-redux';
import { token } from '../../../shared/helper';

export class Like extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	componentDidMount() {
		this.props.favourites(token);
	}
	handleFavourite(product, e) {
		e.target.checked
			? this.props.favourite(product.id, token)
			: this.props.delFavourite(product.id, token);
		this.props.data.setState({ favourite: [...this.props.data.state.favourite, product] });
	}

	render() {
		const { favourite } = this.props.data.state;
		const { product } = this.props;
		return (
			<>
				<input
					onChange={this.handleFavourite.bind(this, product)}
					className='like-checkbox'
					type='checkbox'
					id={`checkbox-${product.id}`}
					checked={favourite.find(e => e.id === product.id)}
				/>
				<label className='like-label' htmlhtmlFor={`checkbox-${product.id}`}>
					<svg id='heart-svg' viewBox='467 392 58 57' xmlns='http://www.w3.org/2000/svg'>
						<g id='Group' fill='none' fill-rule='evenodd' transform='translate(467 392)'>
							<path
								d='M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z'
								id='heart'
								fill='#AAB8C2'
							/>
							<circle id='main-circ' fill='#E2264D' opacity='0' cx='29.5' cy='29.5' r='1.5' />

							<g id='grp7' opacity='0' transform='translate(7 6)'>
								<circle id='oval1' fill='#9CD8C3' cx='2' cy='6' r='2' />
								<circle id='oval2' fill='#8CE8C3' cx='5' cy='2' r='2' />
							</g>

							<g id='grp6' opacity='0' transform='translate(0 28)'>
								<circle id='oval1' fill='#CC8EF5' cx='2' cy='7' r='2' />
								<circle id='oval2' fill='#91D2FA' cx='3' cy='2' r='2' />
							</g>

							<g id='grp3' opacity='0' transform='translate(52 28)'>
								<circle id='oval2' fill='#9CD8C3' cx='2' cy='7' r='2' />
								<circle id='oval1' fill='#8CE8C3' cx='4' cy='2' r='2' />
							</g>

							<g id='grp2' opacity='0' transform='translate(44 6)'>
								<circle id='oval2' fill='#CC8EF5' cx='5' cy='6' r='2' />
								<circle id='oval1' fill='#CC8EF5' cx='2' cy='2' r='2' />
							</g>

							<g id='grp5' opacity='0' transform='translate(14 50)'>
								<circle id='oval1' fill='#91D2FA' cx='6' cy='5' r='2' />
								<circle id='oval2' fill='#91D2FA' cx='2' cy='2' r='2' />
							</g>

							<g id='grp4' opacity='0' transform='translate(35 50)'>
								<circle id='oval1' fill='#F48EA7' cx='6' cy='5' r='2' />
								<circle id='oval2' fill='#F48EA7' cx='2' cy='2' r='2' />
							</g>

							<g id='grp1' opacity='0' transform='translate(24)'>
								<circle id='oval1' fill='#9FC7FA' cx='2.5' cy='3' r='2' />
								<circle id='oval2' fill='#9FC7FA' cx='7.5' cy='2' r='2' />
							</g>
						</g>
					</svg>
				</label>
			</>
		);
	}
}

export function mapStateToProps(state) {
	return {
		payload: state.AddToFavourite.payload,
		error: state.AddToFavourite.error,
		pending: state.AddToFavourite.pending,
		viewPayload: state.ViewFavourite.payload,
		viewError: state.ViewFavourite.error,
		viewPending: state.ViewFavourite.pending,
		delPayload: state.RemoveFavourite.payload,
		delError: state.RemoveFavourite.error,
		delPending: state.RemoveFavourite.pending,
	};
}
export const mapDispatchToProps = dispatch => {
	return {
		inits: () =>
			dispatch({
				type: constants.ADD_FAVOURITE_PENDING,
				pending: true,
			}),
		favourites: async token => dispatch(await Favourite.viewFavourite(token)),
		favourite: async (id, token) => dispatch(await Favourite.addToFavourite(id, token)),
		delFavourite: async (id, token) => dispatch(await Favourite.removeFavourite(id, token)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Like);
