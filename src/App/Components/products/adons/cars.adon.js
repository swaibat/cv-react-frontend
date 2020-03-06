import React, { Component } from 'react';
import CreatableSelect from 'react-select/creatable';
import { brands, models } from '../../../helper/cars.helper';
import { getSub, years } from '../../../helper/category.helper';

class Footer extends Component {
	render() {
		return (
			<div className='form-row'>
				<div className='form-group col-md-2'>
					<label htmlFor='color'>Color</label>
					<CreatableSelect
						isClearable
						onChange={this.handleInputChang}
						options={[
							{ value: 'one', label: 'One' },
							{ value: 'two', label: 'Two' },
							{ value: 'three', label: 'Three' },
						]}
					/>
				</div>
				<div className='form-group col-md-2'>
					<label htmlFor='milage'>milage</label>
					<input
						type='text'
						name='milage'
						className='form-control form-control-sm'
						onChange={this.handleInput}
					/>
				</div>
				<div className='form-group col-md-2'>
					<label htmlFor='transition'>Transition</label>
					<select
						type='text'
						name='transition'
						className='form-control form-control-sm'
						onChange={this.handleInput}
					>
						<option value=''>select transition</option>
						<option value='automatic'>automatic</option>
						<option value='manual'>manual</option>
					</select>
				</div>
				<div className='form-group col-md-2'>
					<label htmlFor='inputZip'>fuel</label>
					<select
						name='fuel'
						type='text'
						className='form-control form-control-sm'
						onChange={this.handleInput}
					>
						<option value=''>select year</option>
						<option value='petrol'>petrol</option>
						<option value='diesel'>diesel</option>
						<option value='electric'>electric</option>
						<option value='hybrid(diesel)'>hybrid(diesel)</option>
						<option value='hybrid(electric)'>hybrid(electric)</option>
						<option value='others'>others</option>
					</select>
				</div>
				<div className='form-group col-md-2'>
					<label htmlFor='inputZip'>engine size</label>
					<select
						name='engine'
						className='form-control form-control-sm'
						onChange={this.handleInput}
					>
						<option value=''>select engine size</option>
						<option>700</option>
						<option>1000</option>
						<option>1300</option>
						<option>1500</option>
						<option>1800</option>
						<option>2000</option>
						<option>2500</option>
						<option>3000</option>
						<option>4000</option>
					</select>
				</div>
				<div className='form-group col-md-2'>
					<label htmlFor='year'>Year</label>
					<select name='year' className='form-control form-control-sm' onChange={this.handleInput}>
						{years()}
					</select>
				</div>
				<div className='form-group col-md-2'>
					<label htmlFor='brand'>Car brand</label>
					<input
						list='carsData'
						type='text'
						name='brand'
						className='form-control form-control-sm'
						onChange={this.handleInput}
					/>
				</div>
				<div className='form-group col-md-2'>
					<label htmlFor='model'>car model</label>
					<input
						list='car-model'
						type='text'
						name='model'
						className='form-control form-control-sm'
						onChange={this.handleInput}
					/>
					<datalist id='car-model'>{this.state && models(this.state.brand)}</datalist>
				</div>
			</div>
		);
	}
}

export default Footer;
