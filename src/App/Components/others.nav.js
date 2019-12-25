/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Icon } from '@iconify/react';
import Arrow from '@iconify/icons-mdi/chevron-right';

class Others extends Component {
	render() {
		return (
			<li className='nav-item'>
				<a className='nav-link nav-link-collapse border-bottom text-secondary text-white d-flex justify-content-between px-2' href='#' id='hasSubItems' data-toggle='collapse' data-target='#collapseSubItems3' aria-controls='collapseSubItems3' aria-expanded='false'>
					Shop By Price
					<span>
						<Icon icon={Arrow} />
					</span>
				</a>
				<ul className='nav-second-level collapse' id='collapseSubItems3' data-parent='#navAccordion'>
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
		);
	}
}

export default Others;
