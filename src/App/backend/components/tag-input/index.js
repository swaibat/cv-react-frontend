import React from 'react';
import './tags.scss';

export default class InputTag extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleChange = this.handleChange.bind(this);
	}

	removeTag = i => {
		const newTags = [...this.props.data.state.tags];
		newTags.splice(i, 1);
		this.props.data.setState({ tags: newTags });
	};

	inputKeyDown = e => {
		const val = e.target.value;
		if (e.key === 'Backspace' && !val) {
			this.removeTag(this.props.data.state.tags.length - 1);
		}
	};
	handleChange(event) {
		const { value } = event.target;
		if (value.match(',')) {
			const val = value.replace(',', '');
			this.props.data.setState({ tags: [...this.props.data.state.tags, val] });
			event.target.value = '';
		}
	}

	render() {
		const { tags } = this.props.data.state;

		return (
			<div className='cv-form-group form-group mb-3 mt-4 px-3'>
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
							/>
							<label className={`cv-label ${tags.length > 0 && 'active-tag'}`} htmlFor='category'>
								{`${this.props.label || 'Enter Tags e.g food, foo,'} separated by commas`}
							</label>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}
