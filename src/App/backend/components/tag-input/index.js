import React from 'react';
import './tags.scss';

export default class InputTag extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tags: [],
		};
		this.handleChange = this.handleChange.bind(this);
	}

	removeTag = i => {
		const newTags = [...this.state.tags];
		newTags.splice(i, 1);
		this.setState({ tags: newTags });
	};

	inputKeyDown = e => {
		const val = e.target.value;
		if (e.key === 'Backspace' && !val) {
			this.removeTag(this.state.tags.length - 1);
		}
	};
	handleChange(event) {
		const { value } = event.target;
		if (value.match(',')) {
			const val = value.replace(',', '');
			this.setState({ tags: [...this.state.tags, val] });
			event.target.value = '';
		}
	}

	render() {
		const { tags } = this.state;

		return (
			<div className='input-tag'>
				<ul className='input-tag__tags'>
					<li className='cv-chev left bg-white'>
						<ion-icon name='pricetags-outline' />
					</li>
					{tags.map((tag, i) => (
						<li key={tag}>
							{tag}
							<button
								type='button'
								onClick={() => {
									this.removeTag(i);
								}}
							>
								+
							</button>
						</li>
					))}
					<li className='input-tag__tags__input'>
						<input
							type='text'
							className='custom-input'
							onKeyDown={this.inputKeyDown}
							onChange={this.handleChange}
							ref={c => {
								this.tagInput = c;
							}}
							required
						/>
						<label className={`cv-label ${tags.length > 0 && 'active-tag'}`} htmlFor='category'>
							{`${this.props.label || 'Enter Tags e.g food, foo,'} separated by commas`}
						</label>
					</li>
				</ul>
			</div>
		);
	}
}
