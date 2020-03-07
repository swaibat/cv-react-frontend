import React, { Component } from 'react';
import TagInput from './../tag-input';

export default class Fashion extends Component {
	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			selectedCategory: {},
			sub: [],
		};
	}

	render() {
		return (
			<>
				<h6>product variables</h6>
				<hr />
				<div className='row'>
					<div className='col-md-12 ml-0'>
						<div className='cv-form-group form-group mt-3 '>
							<TagInput label='Available colors' />
						</div>
					</div>
					<div className='col-md-12 ml-0'>
						<div className='cv-form-group form-group mt-3 '>
							<TagInput label='Available sizes like S, L, XXL,' />
						</div>
					</div>
					<div className='col-md-12 ml-0'>
						<div className='cv-form-group form-group mt-3 '>
							<TagInput label='Available Material' />
						</div>
					</div>
				</div>
			</>
		);
	}
}
