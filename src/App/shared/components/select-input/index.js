/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/aria-proptypes */
import React, { Component } from 'react';
import './select.scss';

export default class componentName extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pending: true,
			navOpen: false,
		};
	}
	handleClick(data, event) {
		const {
			target: { name, id, text },
		} = event;
		const { pam } = this.props;
		pam.setState({ [name]: id });
		pam.state.selectedCategory && pam.setState({ sub: data.sub });
		this.setState({ title: text, value: id });
	}
	render() {
		const { data, name, value, onChange } = this.props;
		return (
			<div className='dropdown'>
				<div className='cv-form-group input-group mb-3'>
					<button
						className='custom-input form-control text-left'
						id={name}
						name={name}
						data-toggle='dropdown'
						aria-haspopup='true'
						aria-expanded='false'
						value={this.state.title}
						onChange={onChange}
						required='required'
						aria-label="Recipient's username"
						aria-describedby='basic-addon2'
					>
						{this.state.title || value}
					</button>
					<div className='input-group-append'>
						<span
							className='input-group-text bg-white cv-chev right dropdown-toggle'
							id='basic-addon2'
						/>
					</div>
					<span className='bar' />
					<label
						className={`cv-label text-capitalize  ${
							!this.state.title && !value ? 'inactive-tag' : ''
						}`}
						htmlFor='category'
					>
						{this.props.title}
					</label>
					<div
						className='dropdown-menu select-dropdown border-0 rounded-0 shadow'
						aria-labelledby={this.props.title}
					>
						{data.map((element, index) => {
							return (
								<a
									id={element.id}
									name={name}
									key={index}
									className='dropdown-item'
									onClick={this.handleClick.bind(this, element)}
									href='#'
								>
									{element.name}
								</a>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
