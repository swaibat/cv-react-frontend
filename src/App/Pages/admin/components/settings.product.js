/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import notify from './../../../../assets/images/alert.svg';
import Compare from '../../../../helper/comapre.changes';
import countries from '../../../../helper/countries.json';
import location from '../../../../helper/google';

function ProductSettings({ data }) {
	const { state } = data;
	const { payload } = data.props;
	const country = location.getCountry(payload.data.currencyCountry);

	const changes = Compare(state, payload.data);
	return (
		<>
			<div className='tab-pane bg-white rounded p-3 fade shadow-xs show active' id='v-pills-products' role='tabpanel' aria-labelledby='v-pills-products-tab'>
				<form className='h-100' onSubmit={data.handleSubmit}>
					<li className='d-flex justify-content-between align-items-center py-3 border-bottom'>
						<div className=''>
							<h6>Seletect default currency</h6>
							<small className='font-weight-light w-75'>
								this is the innitial currency for your system which can later be automatically converted according tou your users location if{' '}
								<strong className='font-weight-bold'>Auto detect countries currency</strong> is enabaled or else or users will get product prices in this curency
							</small>
						</div>
						<div className='input-group w-25 flex-row-reverse'>
							<div className='input-group-append'>
								<span className='input-group-text cv-input-group-text rounded-0 bg-transparent p-0 text-secondary pl-2' id='basic-addon2'>
									{(data.state.currencies && data.state.currencies[0].name) || country.currencies[0].name}
								</span>
							</div>
							<div className='input-group-prepend'>
								<button
									className='btn btn-link dropdown-toggle d-flex align-items-center rounded-0 bg-transparent p-0 border-bottom  text-secondary'
									type='button'
									data-toggle='dropdown'
									aria-haspopup='true'
									aria-expanded='false'
								>
									<img height='17' width='30' className='pr-1' src={`http://localhost:5000/flags/${data.state.flag || country.flag}`} alt='flag' />{' '}
									{(state.currencies && state.currencies[0].symbol) || country.currencies[0].symbol}
								</button>
								<div className='dropdown-menu country-select rounded-sm shadow-xs'>
									{countries.map((e, index) => {
										return (
											<a key={index} onClick={() => data.setState({ ...e })} className='dropdown-item d-flex align-items-center' href='#'>
												<img height='17' width='30' className='pr-1' src={`http://localhost:5000/flags/${e.flag}`} alt='flag' />
												<span className='px-1'>{e.name}</span>
												<small className='text-secondary'>{e.currencies[0].symbol}</small>
											</a>
										);
									})}
								</div>
							</div>
						</div>
					</li>
					<li className='d-flex justify-content-between py-3 border-bottom'>
						<div className=''>
							<h6>Auto detect countries currency</h6>
							<small className='font-weight-light'>these feature automatically detects and converts currency to local currency if disabled you will have to add currency manually</small>
						</div>
						<div className='custom-control custom-switch'>
							<input name='autoCurrency' checked={state.autoCurrency} type='checkbox' className='custom-control-input ml-auto' id='autoCurrency' onChange={data.handleInput} />
							<label className='custom-control-label' for='autoCurrency' />
						</div>
					</li>
					<li className='d-flex justify-content-between py-3 border-bottom'>
						<div className=''>
							<h6>Display country currency flag on the product</h6>
							<small className='font-weight-light'>
								this willl enable all products to have the countries currency flag <mark>if you fill like it conjesting the poduct card disable it</mark>
							</small>
						</div>
						<div className='custom-control custom-switch'>
							<input name='currencyFlagDisplay' checked={state.currencyFlagDisplay} type='checkbox' className='custom-control-input ml-auto' id='currencyFlagDisplay' onChange={data.handleInput} />
							<label className='custom-control-label' for='currencyFlagDisplay' />
						</div>
					</li>
					<li className='d-flex justify-content-between align-items-center border-bottom py-3'>
						<div className=''>
							<h6>Type fo currency display</h6>
							<small className='font-weight-light'>
								this willl enable all products to have the countries currency flag <mark>if you fill like it conjesting the poduct card disable it</mark>
							</small>
						</div>
						<div className=''>
							<div className='custom-control custom-radio custom-control-inline'>
								<input type='radio' checked={state.currencyDisplayBy === 'code'} id='currencyDisplayBy-code' name='code' className='custom-control-input' onChange={data.handleInput} />
								<label className='custom-control-label' for='currencyDisplayBy-code'>
									code <small>( USD )</small>
								</label>
							</div>
							<div className='custom-control custom-radio custom-control-inline'>
								<input type='radio' checked={state.currencyDisplayBy === 'symbol'} id='currencyDisplayBy-symbol' name='code' className='custom-control-input' onChange={data.handleInput} />
								<label className='custom-control-label' for='currencyDisplayBy-symbol'>
									symbol <small>( &#36; )</small>
								</label>
							</div>
						</div>
					</li>
					<li className='d-flex justify-content-between py-3'>
						<div className=''>
							<h6>Automatic Product Approval</h6>
							<small className='font-weight-light'>if you set this on all products will be aproved automatically and visible by everyone on your website</small>
						</div>
						<div className='custom-control custom-switch'>
							<input name='autoProductApproval' checked={state.autoProductApproval} type='checkbox' className='custom-control-input ml-auto' id='autoProductApproval' onChange={data.handleInput} />
							<label className='custom-control-label' for='autoProductApproval' />
						</div>
					</li>
					<div className='form-row'>
						<button type='submit' className='btn btn-primary btn-sm' disabled={!changes}>
							Save
						</button>
						{!data.props.updatePayload && changes && <span className='badge badge-success position-absolute ml-5 mt-n1'>1+ changes</span>}
					</div>
				</form>
			</div>
		</>
	);
}

export default ProductSettings;
