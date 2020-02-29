/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import constants from '../../redux/constants';
import {
	addToFavourite,
	viewFavourite,
	removeFavourite,
} from '../../redux/actions/favourite.action';
import { connect } from 'react-redux';
import { token } from '../../helper';

export class Like extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			pending: true,
			data: [],
			id: this.props.id,
		};
		this.handleFavourite = this.handleFavourite.bind(this);
	}
	componentDidMount() {
		this.props.favourites(token);
	}
	handleFavourite(e) {
		const id = e.target.id.split('-')[1];
		this.setState({ id });
		e.target.checked ? this.props.favourite(id, token) : this.props.delFavourite(id, token);
	}
	componentWillReceiveProps(nextProps) {
		// Any time props.email changes, update state.
		if (nextProps.viewPayload !== this.props.viewPayload) {
			this.setState({
				data: nextProps.viewPayload.data,
			});
		}
	}
	render() {
		const { id, data } = this.state;
		return (
			<>
				<input
					onChange={this.handleFavourite}
					className='like-checkbox'
					type='checkbox'
					id={`checkbox-${id}`}
					checked={data.find(e => e.ProductId === id)}
				/>
				<label className='like-label' htmlFor={`checkbox-${id}`}>
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
		favourites: async token => dispatch(await viewFavourite(token)),
		favourite: async (id, token) => dispatch(await addToFavourite(id, token)),
		delFavourite: async (id, token) => dispatch(await removeFavourite(id, token)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Like);
