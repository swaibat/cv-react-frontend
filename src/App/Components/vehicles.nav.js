/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import CarsBrand from './car.brands';
import { Icon } from '@iconify/react';
import Arrow from '@iconify/icons-mdi/chevron-right';

class Vehicle extends Component {
	render() {
		return (
			<ul className='navbar-nav mr-auto sidenav pl-0' id='navAccordion'>
				<li className='nav-item'>
					<a className='nav-link nav-link-collapse bg-primary text-white d-flex justify-content-between px-2' href='#' id='hasSubItems' data-toggle='collapse' data-target='#collapseSubItems1' aria-controls='collapseSubItems1' aria-expanded='false'>
						Car Make
						<span>
							<Icon icon={Arrow} />
						</span>
					</a>
					<ul className='nav-second-level collapse show' id='collapseSubItems1' data-parent='#navAccordion'>
						<CarsBrand />
					</ul>
				</li>
				<li className='nav-item'>
					<a className='nav-link nav-link-collapse border-bottom text-secondary text-white d-flex justify-content-between px-2' href='#' id='hasSubItems' data-toggle='collapse' data-target='#collapseSubItems2' aria-controls='collapseSubItems2' aria-expanded='false'>
						Body type
						<span>
							<Icon icon={Arrow} />
						</span>
					</a>
					<ul className='nav-second-level collapse' id='collapseSubItems2' data-parent='#navAccordion'>
						<li className='form-group my-3'>
							<select id='inputState' className='form-control form-control-sm'>
								<option value=''>Body type (all)</option>
								<option value='4'>Sedan</option>
								<option value='3'>Hatchback</option>
								<option value='6'>SUV</option>
								<option value='15'>Mini Van</option>
								<option value='8'>Van</option>
								<option value='9'>Truck</option>
								<option value='5'>Wagon</option>
								<option value='1'>Coupe</option>
								<option value='18'>Mini Vehicle</option>
								<option value='17'>Bus</option>
								<option value='10'>Mini Bus</option>
								<option value='7'>Pick up</option>
								<option value='2'>Convertible</option>
								<option value='26'>Motorcycle</option>
								<option value='27'>Tractor</option>
								<option value='28'>Forklift</option>
								<option value='16'>Machinery</option>
								<option value='11'>Bus 20 Seats</option>
								<option value='20'>Unspecified</option>
								<option value='31'>Others</option>
							</select>
						</li>
					</ul>
				</li>
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
				<li className='nav-item'>
					<a className='nav-link nav-link-collapse border-bottom text-secondary text-white d-flex justify-content-between px-2' href='#' id='hasSubItems' data-toggle='collapse' data-target='#collapseSubItems4' aria-controls='collapseSubItems4' aria-expanded='false'>
						Engine Size
						<span>
							<Icon icon={Arrow} />
						</span>
					</a>
					<ul className='nav-second-level collapse' id='collapseSubItems4' data-parent='#navAccordion'>
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
				<li className='nav-item'>
					<a className='nav-link nav-link-collapse border-bottom text-secondary text-white d-flex justify-content-between px-2' href='#' id='hasSubItems' data-toggle='collapse' data-target='#collapseSubItems5' aria-controls='collapseSubItems5' aria-expanded='false'>
						Milage
						<span>
							<Icon icon={Arrow} />
						</span>
					</a>
					<ul className='nav-second-level collapse' id='collapseSubItems5' data-parent='#navAccordion'>
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
				<li className='nav-item'>
					<a className='nav-link nav-link-collapse border-bottom text-secondary text-white d-flex justify-content-between px-2' href='#' id='hasSubItems' data-toggle='collapse' data-target='#collapseSubItems6' aria-controls='collapseSubItems6' aria-expanded='false'>
						Year of Manfacture
						<span>
							<Icon icon={Arrow} />
						</span>
					</a>
					<ul className='nav-second-level collapse' id='collapseSubItems6' data-parent='#navAccordion'>
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
			</ul>
		);
	}
}

export default Vehicle;
