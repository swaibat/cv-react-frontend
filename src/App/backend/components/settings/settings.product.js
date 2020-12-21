/* eslint-disable react/require-render-return */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
// import notify from './../../../../assets/images/alert.svg';
import Compare from '../../../shared/helper/comapre.changes';
import countries from '../../../shared/helper/countries.json';
import Location from '../../../shared/helper/google';

class ProductSettings extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: '',
			answer: '',
			id: '',
		};
	}
	render() {
		const { handleInput, handleSubmit, state } = this.props;
		const { data, location } = state;
		const country = Location.getCountry(data.currencyCountry);
		console.log('state', location);
		return (
			<div
				className='tab-pane bg-white rounded p-3 fade shadow-xs'
				id='v-pills-products'
				role='tabpanel'
				aria-labelledby='v-pills-products-tab'
			>
				<form className='h-100' onSubmit={handleSubmit}>
					<div className='form-group form-row align-items-center'>
						<label htmlhtmlFor='inputPassword' className='col-md-8 col-form-label'>
							<div className=''>
								<h6>Seletect default currency</h6>
								<small className='font-weight-light'>
									this is the innitial currency for your system which can later be automatically
									converted according tou your users location if{' '}
									<strong className='font-weight-bold'>Auto detect countries currency</strong> is
									enabaled or else or users will get product prices in this curency
								</small>
							</div>
						</label>
						<div className='col-md-4'>
							<div className='input-group flex-row-reverse'>
								<div className='input-group-append'>
									<span
										className='input-group-text cv-input-group-text rounded-0 bg-transparent p-0  pl-2'
										id='basic-addon2'
									>
										{(location && location.currencies[0].name) || country.currencies[0].name}
									</span>
								</div>
								<div className='input-group-prepend'>
									<button
										className='btn btn-link dropdown-toggle d-flex align-items-center rounded-0 bg-transparent p-0 border-bottom  '
										type='button'
										data-toggle='dropdown'
										aria-haspopup='true'
										aria-expanded='false'
									>
										<img
											height='17'
											width='30'
											className='pr-1'
											src={`http://localhost:5000/flags/${location.flag || country.flag}`}
											alt='flag'
										/>{' '}
										{(location && location.currencies[0].symbol) || country.currencies[0].symbol}
									</button>
									<div className='dropdown-menu country-select rounded-sm shadow-xs'>
										{countries.map((e, index) => {
											return (
												<a
													key={index}
													onClick={() => this.props.set.setState({ location: e })}
													className='dropdown-item d-flex align-items-center'
													href='#'
												>
													<img
														height='17'
														width='30'
														className='pr-1'
														src={`http://localhost:5000/flags/${e.flag}`}
														alt='flag'
													/>
													<span className='px-1'>{e.name}</span>
													<small className=''>{e.currencies[0].symbol}</small>
												</a>
											);
										})}
									</div>
								</div>
							</div>
						</div>
					</div>
					<li className='d-flex justify-content-between py-3 border-bottom'>
						<div className=''>
							<h6>Auto detect countries currency</h6>
							<small className='font-weight-light'>
								these feature automatically detects and converts currency to local currency if
								disabled you will have to add currency manually
							</small>
						</div>
						<div className='custom-control custom-switch'>
							<input
								name='autoCurrency'
								checked={state.autoCurrency}
								type='checkbox'
								className='custom-control-input ml-auto'
								id='autoCurrency'
								onChange={handleInput}
							/>
							<label className='custom-control-label' htmlhtmlFor='autoCurrency' />
						</div>
					</li>
					<li className='d-flex justify-content-between py-3 border-bottom'>
						<div className=''>
							<h6>Display country currency flag on the product</h6>
							<small className='font-weight-light'>
								this willl enable all products to have the countries currency flag{' '}
								<mark>if you fill like it conjesting the poduct card disable it</mark>
							</small>
						</div>
						<div className='custom-control custom-switch'>
							<input
								name='currencyFlagDisplay'
								checked={state.currencyFlagDisplay}
								type='checkbox'
								className='custom-control-input ml-auto'
								id='currencyFlagDisplay'
								onChange={handleInput}
							/>
							<label className='custom-control-label' htmlhtmlFor='currencyFlagDisplay' />
						</div>
					</li>
					<li className='d-flex justify-content-between align-items-center border-bottom py-3'>
						<div className=''>
							<h6>Type fo currency display</h6>
							<small className='font-weight-light'>
								this willl enable all products to have the countries currency flag{' '}
								<mark>if you fill like it conjesting the poduct card disable it</mark>
							</small>
						</div>
						<div className=''>
							<div className='custom-control custom-radio custom-control-inline'>
								<input
									type='radio'
									checked={state.currencyDisplayBy === 'code'}
									id='currencyDisplayBy-code'
									name='code'
									className='custom-control-input'
									onChange={handleInput}
								/>
								<label className='custom-control-label' htmlhtmlFor='currencyDisplayBy-code'>
									code <small>( USD )</small>
								</label>
							</div>
							<div className='custom-control custom-radio custom-control-inline'>
								<input
									type='radio'
									checked={state.currencyDisplayBy === 'symbol'}
									id='currencyDisplayBy-symbol'
									name='code'
									className='custom-control-input'
									onChange={handleInput}
								/>
								<label className='custom-control-label' htmlhtmlFor='currencyDisplayBy-symbol'>
									symbol <small>( &#36; )</small>
								</label>
							</div>
						</div>
					</li>
					<li className='d-flex justify-content-between py-3'>
						<div className=''>
							<h6>Automatic Product Approval</h6>
							<small className='font-weight-light'>
								if you set this on all products will be aproved automatically and visible by
								everyone on your website
							</small>
						</div>
						<div className='custom-control custom-switch'>
							<input
								name='autoProductApproval'
								checked={state.autoProductApproval}
								type='checkbox'
								className='custom-control-input ml-auto'
								id='autoProductApproval'
								onChange={handleInput}
							/>
							<label className='custom-control-label' htmlhtmlFor='autoProductApproval' />
						</div>
					</li>
					<div className='form-row'>
						<button type='submit' className='btn btn-primary btn-sm'>
							Save
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default ProductSettings;
