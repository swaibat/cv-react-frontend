import React, { Component } from 'react';

export default class TextInput extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { label, icon, iconRight, name, type, value, onChange } = this.props;
		return (
			<div className='cv-form-group input-group mb-3 mt-4'>
				<div className='input-group-prepend'>
					<span className='input-group-text bg-white rounded-0 cv-chev left'>
						{icon.name ? <ion-icon name={icon.name} /> : <ion-icon src={icon.src} />}
					</span>
				</div>
				<input
					name={name}
					type={type}
					className='form-control custom-input'
					required
					autoComplete='new-password'
					value={value}
					onChange={onChange}
				/>
				{iconRight && (
					<div className='input-group-prepend'>
						<span className='input-group-text bg-white rounded-0 cv-chev right'>
							{iconRight.name ? (
								<ion-icon name={iconRight.name} />
							) : (
								<ion-icon src={iconRight.src} />
							)}
						</span>
					</div>
				)}
				<span className='bar' />
				<label className='cv-label left text-capitalize'>{this.props.label}</label>
			</div>
		);
	}
}
