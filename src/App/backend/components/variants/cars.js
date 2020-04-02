import React, { Component } from 'react';
import { brands, models } from '../../../shared/helper/cars.helper';
import { getc, years } from '../../../shared/helper/category.helper';
import Select from '../../../shared/components/select-input';

export default class CarsVariants extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pending: true,
			navOpen: false,
		};
	}
	render() {
		return (
			<>
				<h6>product variables</h6>
				<hr />
				<div className='form-row mt-4'>
					<div className='form-group col-md-2'>
						<Select title='Brand' name='brand' data={brands} pam={this} />
					</div>
					<div className='form-group col-md-2'>
						<Select title='Model' name='model' data={brands} pam={this} />
					</div>
					<div className='form-group col-md-2'>
						<Select title='Body Type' name='bodyType' data={[]} pam={this} />
					</div>
					<div className='form-group col-md-2'>
						<Select
							title='Transition'
							name='transition'
							data={[
								{ id: 'automatic', name: 'automatic' },
								{ id: 'manual', name: 'manual' },
							]}
							pam={this}
						/>
					</div>
					<div className='form-group col-md-2'>
						<Select
							title='Fuel Type'
							name='fuelType'
							data={[
								{ id: 'petrol', name: 'petrol' },
								{ id: 'diesel', name: 'diesel' },
								{ id: 'electric', name: 'electric' },
								{ id: 'others', name: 'others' },
							]}
							pam={this}
						/>
					</div>
					<div className='form-group col-md-2'>
						<Select
							title='engine size'
							name='engineSize'
							data={[
								{ id: '700', name: '700' },
								{ id: '1000', name: '1000' },
								{ id: '1300', name: '1300' },
								{ id: '1500', name: '1500' },
								{ id: '1800', name: '1800' },
								{ id: '2000', name: '2000' },
								{ id: '2500', name: '2500' },
								{ id: '3000', name: '3000' },
								{ id: '4000', name: '4000' },
							]}
							pam={this}
						/>
					</div>
					<div className='form-group col-md-2'>
						<Select title='Year of Man' name='YearOfManufacture' data={years()} pam={this} />
					</div>
					<div className='form-group col-md-2'>
						<Select title='Milage' name='milage' data={brands} pam={this} />
					</div>
					<div className='form-group col-md-2'>
						<Select
							title='Steering'
							name='steering'
							data={[
								{ id: 'left', name: 'left' },
								{ id: 'right', name: 'right' },
							]}
							pam={this}
						/>
					</div>
				</div>
			</>
		);
	}
}
