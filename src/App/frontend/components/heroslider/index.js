/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import PlaceHoplder from './slider-img.png';

export default class componentName extends Component {
	render() {
		return (
			<div
				className='slideshow-container d-flex justify-content-between align-items-center'
				style={{
					backgroundImage: `url(${PlaceHoplder})`,
				}}
			>
				<div className='mx-auto text-white text-center mt-n5 z-ndex-1'>
					<h1>World's Lagest Classified Market Place</h1>
					<p>search in over 100 millon products available in our macket place</p>
					<div className='row '>
						<div className='row mb-3 py-2 px-3 bg-white rounded shadow-sm'>
							<div className='form-row'>
								<div className='input-group form-group mb-0 col-md-6'>
									<div className='input-group-prepend rounded-0'>
										<span className='input-group-text cv-input-group-text rounded-0 bg-transparent p-0 '>
											<ion-icon name='search' />
										</span>
									</div>
									<input
										type='search'
										className='form-control custom-input'
										placeholder='search for anything'
										// onChange={this.handleInput}
									/>
								</div>
								<div className='input-group form-group mb-0 col-md-6'>
									<div className='input-group-prepend rounded-0'>
										<span className='input-group-text cv-input-group-text rounded-0 bg-transparent p-0 '>
											<ion-icon name='locate' />
										</span>
									</div>
									<input
										name='address'
										type='text'
										className='form-control custom-input'
										placeholder='select location'
										// onChange={this.handleInput}
									/>
								</div>
							</div>
							<span className='pl-1'>
								<button className='btn' type='button'>
									Categories
								</button>
							</span>
							<span className='pl-1 mr-n2'>
								<button className='btn btn-primary' type='button'>
									search
								</button>
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
