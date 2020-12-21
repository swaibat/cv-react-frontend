/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import Arrow from '@iconify/icons-mdi/chevron-right';

class Others extends Component {
	render() {
		return (
			<>
				<li className='nav-item'>
					<a
						className='nav-link nav-link-collapse bg-white text-bold d-flex justify-content-between px-2 rounded-top'
						href='#'
						id='hasSubItems'
						data-toggle='collapse'
						data-target='#collapseSubItems2'
						aria-controls='collapseSubItems2'
						aria-expanded='true'
					>
						Shop By Brand
					</a>
					<ul
						className='nav-second-level nav-second-level-cv collapse  show'
						id='collapseSubItems2'
					>
						<li className='form-check nav-item py-1 ml-2'>
							<input className='form-check-input' type='checkbox' value='' id='defaultCheck1' />
							<label className='form-check-label' htmlhtmlFor='defaultCheck1'>
								Apple
							</label>
						</li>
						<li className='form-check nav-item py-1 ml-2'>
							<input className='form-check-input' type='checkbox' value='' id='defaultCheck1' />
							<label className='form-check-label' htmlhtmlFor='defaultCheck1'>
								Samsung
							</label>
						</li>
						<li className='form-check nav-item py-1 ml-2'>
							<input className='form-check-input' type='checkbox' value='' id='defaultCheck1' />
							<label className='form-check-label' htmlhtmlFor='defaultCheck1'>
								Huawei
							</label>
						</li>
						<li className='form-check nav-item py-1 ml-2'>
							<input className='form-check-input' type='checkbox' value='' id='defaultCheck1' />
							<label className='form-check-label' htmlhtmlFor='defaultCheck1'>
								Techno
							</label>
						</li>
						<li className='form-check nav-item py-1 ml-2'>
							<input className='form-check-input' type='checkbox' value='' id='defaultCheck1' />
							<label className='form-check-label' htmlhtmlFor='defaultCheck1'>
								infinix
							</label>
						</li>
						<li className='form-check nav-item py-1 ml-2'>
							<input className='form-check-input' type='checkbox' value='' id='defaultCheck1' />
							<label className='form-check-label' htmlhtmlFor='defaultCheck1'>
								LG
							</label>
						</li>
						<li className='form-check nav-item py-1 ml-2'>
							<input className='form-check-input' type='checkbox' value='' id='defaultCheck1' />
							<label className='form-check-label' htmlhtmlFor='defaultCheck1'>
								Nokia
							</label>
						</li>
						<li className='form-check nav-item py-1 ml-2'>
							<input className='form-check-input' type='checkbox' value='' id='defaultCheck1' />
							<label className='form-check-label' htmlhtmlFor='defaultCheck1'>
								One plus
							</label>
						</li>
						<li className='form-check nav-item py-1 ml-2'>
							<input className='form-check-input' type='checkbox' value='' id='defaultCheck1' />
							<label className='form-check-label' htmlhtmlFor='defaultCheck1'>
								Itel
							</label>
						</li>
						<li className='form-check nav-item py-1 ml-2'>
							<input className='form-check-input' type='checkbox' value='' id='defaultCheck1' />
							<label className='form-check-label' htmlhtmlFor='defaultCheck1'>
								Black berry
							</label>
						</li>
						<li className='form-check nav-item py-1 ml-2'>
							<input className='form-check-input' type='checkbox' value='' id='defaultCheck1' />
							<label className='form-check-label' htmlhtmlFor='defaultCheck1'>
								Motorolla
							</label>
						</li>
						<li className='form-check nav-item py-1 ml-2'>
							<input className='form-check-input' type='checkbox' value='' id='defaultCheck1' />
							<label className='form-check-label' htmlhtmlFor='defaultCheck1'>
								others
							</label>
						</li>
					</ul>
				</li>
				<li className='nav-item'>
					<a
						className='nav-link nav-link-collapse border-bottom  text-white d-flex justify-content-between px-2'
						href='#'
						id='hasSubItems'
						data-toggle='collapse'
						data-target='#collapseSubItems3'
						aria-controls='collapseSubItems3'
						aria-expanded='false'
					>
						Shop By Price
						<span>
							<Icon icon={Arrow} />
						</span>
					</a>
					<ul className='nav-second-level collapse' id='collapseSubItems3'>
						<li className='my-3'>
							<div className='form-group mb-2 flex-fill'>
								<input
									type='number'
									className='form-control form-control-sm'
									placeholder='Enter min price'
								/>
							</div>
						</li>
						<li className='my-3'>
							<div className='form-group mb-2 flex-fill'>
								<input
									type='number'
									className='form-control form-control-sm'
									placeholder='Enter max price'
								/>
							</div>
						</li>
					</ul>
				</li>
				<li className='nav-item'>
					<a
						className='nav-link nav-link-collapse border-bottom  text-white d-flex justify-content-between px-2'
						href='#'
						id='hasSubItems'
						data-toggle='collapse'
						data-target='#collapseSubItems33'
						aria-controls='collapseSubItems33'
						aria-expanded='false'
					>
						Shop By Condition
						<span>
							<Icon icon={Arrow} />
						</span>
					</a>
					<ul className='nav-second-level collapse' id='collapseSubItems33'>
						<li className='form-check nav-item py-1 ml-2'>
							<input className='form-check-input' type='checkbox' value='' id='defaultCheck1' />
							<label className='form-check-label' htmlhtmlFor='defaultCheck1'>
								New
							</label>
						</li>
						<li className='form-check nav-item py-1 ml-2'>
							<input className='form-check-input' type='checkbox' value='' id='defaultCheck1' />
							<label className='form-check-label' htmlhtmlFor='defaultCheck1'>
								Used
							</label>
						</li>
					</ul>
				</li>
				<li className='nav-item'>
					<a
						className='nav-link nav-link-collapse border-bottom  text-white d-flex justify-content-between px-2'
						href='#'
						id='hasSubItems'
						data-toggle='collapse'
						data-target='#collapseSubItems34'
						aria-controls='collapseSubItems34'
						aria-expanded='false'
					>
						Shop By location
						<span>
							<Icon icon={Arrow} />
						</span>
					</a>
					<ul className='nav-second-level collapse' id='collapseSubItems34'>
						<li className='my-3'>
							<div className='form-group mb-2 flex-fill'>
								<select id='inputState' className='form-control form-control-sm'>
									<option value=''>Min Eng.cc</option>
									<option value='700'>700cc</option>
									<option value='1000'>1000cc</option>
									<option value='1500'>1500cc</option>
									<option value='1800'>1800cc</option>
									<option value='2000'>2000cc</option>
									<option value='2500'>2500cc</option>
									<option value='3000'>3000cc</option>
									<option value='4000'>4000cc</option>
								</select>
							</div>
						</li>
						<li className='my-3'>
							<div className='form-group mb-2 flex-fill'>
								<select id='inputState' className='form-control form-control-sm'>
									<option value=''>Min Eng.cc</option>
									<option value='700'>700cc</option>
									<option value='1000'>1000cc</option>
									<option value='1500'>1500cc</option>
									<option value='1800'>1800cc</option>
									<option value='2000'>2000cc</option>
									<option value='2500'>2500cc</option>
									<option value='3000'>3000cc</option>
									<option value='4000'>4000cc</option>
								</select>
							</div>
						</li>
					</ul>
				</li>
			</>
		);
	}
}

export default Others;
