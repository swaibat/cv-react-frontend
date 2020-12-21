import React, { Component } from 'react';

export default class Phone extends Component {
	render() {
		return (
			<>
				<h6>product variables</h6>
				<hr />
				<div className='row variants'>
					<div className='col-md-3'>
						<div className='cv-form-group input-group mb-3 mt-3'>
							<div className='input-group-prepend'>
								<span
									className='input-group-text bg-white rounded-0 cv-chev left'
									id='basic-addon1'
								>
									<ion-icon name='rocket-outline' />
								</span>
							</div>
							<input
								name='price'
								type='number'
								className='form-control custom-input'
								aria-describedby='basic-addon1'
								onChange={this.handleInput}
								required
							/>
							<span className='bar' />
							<label className='cv-label left' htmlhtmlFor='price'>
								Brand
							</label>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='cv-form-group input-group mb-3 mt-3'>
							<div className='input-group-prepend'>
								<span
									className='input-group-text bg-white rounded-0 cv-chev left'
									id='basic-addon1'
								>
									<ion-icon src="data:image/svg+xml,%0A%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M503.927,320.323l-20.438-5.115l10.833-18.063c2.521-4.198,1.854-9.573-1.604-13.031l-23.385-23.385v-26.063 c0-12.805-5.784-24.174-14.741-32c8.957-7.826,14.741-19.195,14.741-32V85.333c0-23.531-19.135-42.667-42.667-42.667h-384 C19.135,42.667,0,61.802,0,85.333v85.333c0,12.805,5.784,24.174,14.741,32C5.784,210.492,0,221.862,0,234.667V320 c0,23.531,19.135,42.667,42.667,42.667h234.667v10.667c0,4.896,3.333,9.156,8.073,10.344l20.438,5.115l-10.833,18.063 c-2.521,4.198-1.854,9.573,1.604,13.031l30.167,30.167c3.438,3.458,8.823,4.094,13.031,1.604l18.063-10.833l5.115,20.438 c1.188,4.74,5.448,8.073,10.344,8.073H416c4.896,0,9.156-3.333,10.344-8.073l5.115-20.438l18.063,10.833 c4.208,2.5,9.583,1.865,13.031-1.604l30.167-30.167c3.458-3.458,4.125-8.833,1.604-13.031l-10.833-18.063l20.438-5.115 c4.74-1.188,8.073-5.448,8.073-10.344v-42.667C512,325.771,508.667,321.51,503.927,320.323z M21.333,85.333 C21.333,73.573,30.906,64,42.667,64h384C438.427,64,448,73.573,448,85.333v85.333c0,11.76-9.573,21.333-21.333,21.333h-384 c-11.76,0-21.333-9.573-21.333-21.333V85.333z M277.333,330.667v10.667H42.667c-11.76,0-21.333-9.573-21.333-21.333v-85.333 c0-11.76,9.573-21.333,21.333-21.333h384c11.76,0,21.333,9.573,21.333,21.333v18.59l-16.542,9.921l-5.115-20.438 c-1.188-4.74-5.448-8.073-10.344-8.073h-42.667c-4.896,0-9.156,3.333-10.344,8.073l-5.115,20.438l-18.063-10.833 c-4.198-2.5-9.573-1.865-13.031,1.604l-30.167,30.167c-3.458,3.458-4.125,8.833-1.604,13.031l10.833,18.063l-20.438,5.115 C280.667,321.51,277.333,325.771,277.333,330.667z M490.667,365.01l-18.323,4.583c-3.479,0.865-6.292,3.427-7.479,6.823 c-0.948,2.729-1.99,5.396-3.25,7.979c-1.573,3.25-1.406,7.063,0.448,10.156l9.688,16.135l-18.396,18.396l-16.135-9.688 c-3.104-1.875-6.917-2.052-10.156-0.448c-2.583,1.26-5.25,2.302-7.979,3.25c-3.396,1.188-5.958,4-6.823,7.479L407.677,448 h-26.021l-4.583-18.323c-0.865-3.479-3.427-6.292-6.823-7.479c-2.729-0.948-5.396-1.99-7.979-3.25 c-3.26-1.583-7.052-1.406-10.156,0.448l-16.135,9.688l-18.396-18.396l9.688-16.135c1.854-3.094,2.021-6.906,0.448-10.156 c-1.26-2.583-2.302-5.25-3.25-7.979c-1.188-3.396-4-5.958-7.479-6.823l-18.323-4.583V338.99l18.323-4.583 c3.479-0.865,6.292-3.427,7.479-6.823c0.948-2.729,1.99-5.396,3.25-7.979c1.573-3.25,1.406-7.063-0.448-10.156l-9.688-16.135 l18.396-18.396l16.135,9.688c3.083,1.854,6.885,2.01,10.156,0.448c2.583-1.26,5.25-2.302,7.979-3.25 c3.396-1.188,5.958-4,6.823-7.479L381.656,256h26.021l4.583,18.323c0.865,3.479,3.427,6.292,6.823,7.479 c2.729,0.948,5.396,1.99,7.979,3.25c3.25,1.573,7.073,1.417,10.156-0.448l16.135-9.688l18.396,18.396l-9.688,16.135 c-1.854,3.094-2.021,6.906-0.448,10.156c1.26,2.583,2.302,5.25,3.25,7.979c1.188,3.396,4,5.958,7.479,6.823l18.323,4.583V365.01z '/%3E%3Cpath d='M394.667,298.667c-29.406,0-53.333,23.927-53.333,53.333s23.927,53.333,53.333,53.333S448,381.406,448,352 S424.073,298.667,394.667,298.667z M394.667,384c-17.646,0-32-14.354-32-32c0-17.646,14.354-32,32-32s32,14.354,32,32 C426.667,369.646,412.313,384,394.667,384z'/%3E%3Cpath d='M74.667,170.667c5.896,0,10.667-4.771,10.667-10.667V96c0-5.896-4.771-10.667-10.667-10.667 C68.771,85.333,64,90.104,64,96v64C64,165.896,68.771,170.667,74.667,170.667z'/%3E%3Cpath d='M117.333,170.667c5.896,0,10.667-4.771,10.667-10.667V96c0-5.896-4.771-10.667-10.667-10.667 c-5.896,0-10.667,4.771-10.667,10.667v64C106.667,165.896,111.438,170.667,117.333,170.667z'/%3E%3Cpath d='M160,170.667c5.896,0,10.667-4.771,10.667-10.667V96c0-5.896-4.771-10.667-10.667-10.667S149.333,90.104,149.333,96v64 C149.333,165.896,154.104,170.667,160,170.667z'/%3E%3Ccircle cx='384' cy='128' r='21.333'/%3E%3Ccircle cx='320' cy='128' r='21.333'/%3E%3Cpath d='M74.667,234.667c-5.896,0-10.667,4.771-10.667,10.667v64C64,315.229,68.771,320,74.667,320 c5.896,0,10.667-4.771,10.667-10.667v-64C85.333,239.438,80.563,234.667,74.667,234.667z'/%3E%3Cpath d='M117.333,234.667c-5.896,0-10.667,4.771-10.667,10.667v64c0,5.896,4.771,10.667,10.667,10.667 c5.896,0,10.667-4.771,10.667-10.667v-64C128,239.438,123.229,234.667,117.333,234.667z'/%3E%3Cpath d='M160,234.667c-5.896,0-10.667,4.771-10.667,10.667v64c0,5.896,4.771,10.667,10.667,10.667s10.667-4.771,10.667-10.667 v-64C170.667,239.438,165.896,234.667,160,234.667z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A" />
								</span>
							</div>
							<input
								name='price'
								type='number'
								className='form-control custom-input'
								aria-describedby='basic-addon1'
								onChange={this.handleInput}
								required
							/>
							<span className='bar' />
							<label className='cv-label left' htmlhtmlFor='price'>
								Operation System
							</label>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='cv-form-group input-group mb-3 mt-3'>
							<input
								type='number'
								className='custom-input form-control'
								required='required'
								aria-label="Recipient's username"
								aria-describedby='basic-addon2'
							/>
							<div className='input-group-append'>
								<span className='input-group-text bg-white cv-chev right' id='basic-addon2'>
									M2
								</span>
							</div>
							<span className='bar' />
							<label className='cv-label' htmlhtmlFor='category'>
								Surface Area
							</label>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='cv-form-group input-group mb-3 mt-3'>
							<div className='input-group-prepend'>
								<span
									className='input-group-text bg-white rounded-0 cv-chev left'
									id='basic-addon1'
								>
									<ion-icon name='camera-outline' />
								</span>
							</div>
							<input
								name='price'
								type='number'
								className='form-control custom-input'
								aria-describedby='basic-addon1'
								onChange={this.handleInput}
								required
							/>
							<span className='bar' />
							<label className='cv-label left' htmlhtmlFor='price'>
								Main Camera size in (Pixels)
							</label>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='cv-form-group input-group mb-3 mt-3'>
							<div className='input-group-prepend'>
								<span
									className='input-group-text bg-white rounded-0 cv-chev left'
									id='basic-addon1'
								>
									<ion-icon src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cg%3E%3Cg%3E%3Cg%3E%3Cpath d='M281.6,375.467h-51.2c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533h51.2c4.71,0,8.533-3.823,8.533-8.533 S286.31,375.467,281.6,375.467z'/%3E%3Cpath d='M136.533,76.8c0,3.678,2.347,6.929,5.828,8.098l47.155,15.718l15.718,47.147c1.161,3.49,4.42,5.837,8.098,5.837 c3.669,0,6.929-2.347,8.09-5.837l15.727-47.147l47.147-15.718c3.482-1.169,5.837-4.42,5.837-8.098s-2.355-6.938-5.837-8.098 L237.15,52.983L221.423,5.837c-1.161-3.49-4.42-5.837-8.09-5.837c-3.678,0-6.938,2.347-8.098,5.837l-15.718,47.147 l-47.155,15.718C138.88,69.862,136.533,73.122,136.533,76.8z M198.963,67.831c2.551-0.853,4.548-2.85,5.393-5.402l8.977-26.914 l8.969,26.914c0.845,2.551,2.842,4.548,5.393,5.402l26.923,8.969l-26.923,8.969c-2.551,0.853-4.548,2.85-5.393,5.402 l-8.969,26.914l-8.977-26.914c-0.845-2.552-2.842-4.548-5.393-5.402L172.049,76.8L198.963,67.831z'/%3E%3Cpath d='M358.4,76.8c0-14.114-11.486-25.6-25.6-25.6c-14.123,0-25.6,11.486-25.6,25.6s11.477,25.6,25.6,25.6 C346.914,102.4,358.4,90.914,358.4,76.8z M324.267,76.8c0-4.702,3.823-8.533,8.533-8.533c4.702,0,8.533,3.831,8.533,8.533 c0,4.702-3.831,8.533-8.533,8.533C328.09,85.333,324.267,81.502,324.267,76.8z'/%3E%3Cpath d='M375.723,469.333c0-4.71-3.823-8.533-8.533-8.533h-0.094c-4.702,0-8.482,3.823-8.482,8.533s3.857,8.533,8.576,8.533 C371.9,477.867,375.723,474.044,375.723,469.333z'/%3E%3Cpath d='M366.933,17.067h-115.2c-4.719,0-8.533,3.823-8.533,8.533c0,4.71,3.814,8.533,8.533,8.533h115.2 c14.114,0,25.6,11.486,25.6,25.6v409.6c0,14.114-11.486,25.6-25.6,25.6H145.067c-14.123,0-25.6-11.486-25.6-25.6v-409.6 c0-14.114,11.477-25.6,25.6-25.6h29.867c4.71,0,8.533-3.823,8.533-8.533c0-4.71-3.823-8.533-8.533-8.533h-29.867 c-23.526,0-42.667,19.14-42.667,42.667v409.6c0,23.526,19.14,42.667,42.667,42.667h221.867c23.526,0,42.667-19.14,42.667-42.667 v-409.6C409.6,36.207,390.46,17.067,366.933,17.067z'/%3E%3Cpath d='M145.229,460.8c-4.702,0-8.482,3.823-8.482,8.533s3.857,8.533,8.576,8.533c4.71,0,8.533-3.823,8.533-8.533 s-3.823-8.533-8.533-8.533H145.229z'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A" />
								</span>
							</div>
							<input
								name='price'
								type='number'
								className='form-control custom-input'
								aria-describedby='basic-addon1'
								onChange={this.handleInput}
								required
							/>
							<span className='bar' />
							<label className='cv-label left' htmlhtmlFor='price'>
								Front Camera size in (Pixels)
							</label>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='cv-form-group input-group mb-3 mt-3'>
							<div className='input-group-prepend'>
								<span
									className='input-group-text bg-white rounded-0 cv-chev left'
									id='basic-addon1'
								>
									<ion-icon name='battery-half-outline' />
								</span>
							</div>
							<input
								name='price'
								type='number'
								className='form-control custom-input'
								aria-describedby='basic-addon1'
								onChange={this.handleInput}
								required
							/>
							<span className='bar' />
							<label className='cv-label left' htmlhtmlFor='price'>
								Battery (mAh)
							</label>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='cv-form-group input-group mb-3 mt-3'>
							<div className='input-group-prepend'>
								<span
									className='input-group-text bg-white rounded-0 cv-chev left'
									id='basic-addon1'
								>
									<ion-icon src="data:image/svg+xml,%3Csvg id='Layer_1' enable-background='new 0 0 512 512' height='512' viewBox='0 0 512 512' width='512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m451.313 84.686-80-80c-3-3-7.07-4.686-11.313-4.686h-288c-8.837 0-16 7.164-16 16v480c0 8.836 7.163 16 16 16h368c8.837 0 16-7.164 16-16v-400c0-4.244-1.686-8.313-4.687-11.314zm-27.313 395.314h-336v-448h265.373l70.627 70.627z'/%3E%3Cpath d='m160 184c-22.056 0-40 17.944-40 40v192c0 22.056 17.944 40 40 40h192c22.056 0 40-17.944 40-40 0-10.677 0-181.33 0-192 0-22.056-17.944-40-40-40zm136 88v96h-80c0-26.09 0-80.75 0-96zm64 0v32h-32v-32zm-32 64h32v32h-32zm-176 32v-32h32v32zm32-64h-32v-32h32zm176 112c0 4.411-3.589 8-8 8h-192c-4.411 0-8-3.589-8-8v-16h208zm0-192v16c-18.484 0-180.319 0-208 0v-16c0-4.411 3.589-8 8-8h192c4.411 0 8 3.589 8 8z'/%3E%3C/svg%3E" />
								</span>
							</div>
							<input
								name='price'
								type='number'
								className='form-control custom-input'
								aria-describedby='basic-addon1'
								onChange={this.handleInput}
								required
							/>
							<span className='bar' />
							<label className='cv-label left' htmlhtmlFor='price'>
								Sim-card Type
							</label>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='cv-form-group input-group mb-3 mt-3'>
							<div className='input-group-prepend'>
								<span
									className='input-group-text bg-white rounded-0 cv-chev left'
									id='basic-addon1'
								>
									<ion-icon name='hardware-chip-outline' />
								</span>
							</div>
							<input
								name='price'
								type='number'
								className='form-control custom-input'
								aria-describedby='basic-addon1'
								onChange={this.handleInput}
								required
							/>
							<span className='bar' />
							<label className='cv-label left' htmlhtmlFor='price'>
								Ram in (GB)
							</label>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='cv-form-group input-group mb-3 mt-3'>
							<div className='input-group-prepend'>
								<span
									className='input-group-text bg-white rounded-0 cv-chev left'
									id='basic-addon1'
								>
									<ion-icon name='tv-outline' />
								</span>
							</div>
							<input
								name='price'
								type='number'
								className='form-control custom-input'
								aria-describedby='basic-addon1'
								onChange={this.handleInput}
								required
							/>
							<span className='bar' />
							<label className='cv-label left' htmlhtmlFor='price'>
								Display Size in (pixels)
							</label>
						</div>
					</div>
					<div className='col-md-3'>
						<div className='cv-form-group input-group mb-3 mt-3'>
							<div className='input-group-prepend'>
								<span
									className='input-group-text bg-white rounded-0 cv-chev left'
									id='basic-addon1'
								>
									<ion-icon name='save-outline' />
								</span>
							</div>
							<input
								name='price'
								type='number'
								className='form-control custom-input'
								aria-describedby='basic-addon1'
								onChange={this.handleInput}
								required
							/>
							<span className='bar' />
							<label className='cv-label left' htmlhtmlFor='price'>
								Internal Storage in (GB)
							</label>
						</div>
					</div>
				</div>
			</>
		);
	}
}

// Surface size
// 175 m2
// Bedrooms
// 3
// Bathrooms
// 2
// Type of Property
// Flat
// Listed by
// Owner
// Parking Lot
// Yes
// Broker fee
// No
// Furnished
// No
// Pets allowed
// Yes
