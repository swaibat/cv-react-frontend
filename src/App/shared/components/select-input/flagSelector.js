import React, { Component } from 'react';
import Countries from '../../helper/countries.json';

export default class TextInput extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		const { label, icon, iconRight, name, type, value, data } = this.props;
		return (
			<div className='cv-form-group cv-country-select input-group mb-3 mt-4'>
				<div className='input-group mb-3'>
					<div
						className='input-group-prepend cv-chev-flag'
						id='dropdownMenuButton'
						data-toggle='dropdown'
						aria-haspopup='true'
						aria-expanded='false'
					>
						<span className='cv-input-group-text input-group-text p-0 bg-white rounded-0'>
							<img
								height='20'
								width='25'
								src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1200' height='600' viewBox='0 0 6 3'%3E%3Crect fill='%23436F4D' width='6' height='3'/%3E%3Crect fill='%23FFF' width='6' height='2'/%3E%3Crect fill='%23CD2A3E' width='6' height='1'/%3E%3C/svg%3E"
								alt='country'
							/>
						</span>
						<span
							className='cv-input-group-text px-1 input-group-text bg-white rounded-0'
							id='basic-addon2'
						>
							+ 1
						</span>
						<span className='cv-input-group-text input-group-text bg-white pl-0 dropdown-toggle' />
						<div className='dropdown-menu dropdown-menu select-dropdown border-0 rounded-0 shadow-sm'>
							{Countries.map(country => {
								return (
									<span
										onClick={() => data.setState({ country })}
										className='dropdown-item d-flex align-items-center'
									>
										<img height='20' width='30' src={country.flag} alt='country' />
										<span className='ml-2'>
											+ {country.callingCodes} <small>{country.name}</small>
										</span>
									</span>
								);
							})}
						</div>
					</div>
					<input
						name={name}
						type={type}
						className='form-control custom-input px-3'
						required
						value={value}
					/>
					<span className='bar' />
					<label className='cv-label text-capitalize flag-label'>{this.props.label}</label>
				</div>
			</div>
		);
	}
}
