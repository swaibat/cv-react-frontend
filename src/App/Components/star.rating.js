import React, { Component } from 'react';

class RatingStars extends Component {
	state = {
		rank: 3.4,
	};

	changeStarsRatingHandler = e => {
		const newRank = e.target.value;
		this.setState({ rank: newRank });
	};

	render() {
		const { rank } = this.state,
			// 					set how many stars we need in our rating
			amount = 5;
		let stars = [],
			style;

		for (let i = amount; i > 0; i--) {
			if (i < rank) {
				style = 'star gold checkedStar';
			} else if (i === rank) {
				style = 'star gold checkedStar checkedLastStar';
			} else {
				style = 'star';
			}

			stars.push(
				<label className={style} onChange={e => this.changeStarsRatingHandler(e)}>
					<input type='radio' name='rating' value={i} />
				</label>,
			);
		}

		return <div className='stars'>{stars}</div>;
	}
}
export default RatingStars;
