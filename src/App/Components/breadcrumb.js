/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class BreadCrumb extends Component {
	render() {
		return (
			<nav aria-label='breadcrumb flex-row p-0'>
				<ol class='breadcrumb bg-transparent p-0 pt-2'>
					<li class='breadcrumb-item'>
						<a href='#'>Home</a>
					</li>
					<li class='breadcrumb-item'>
						<a href='#'>Category</a>
					</li>
					<li class='breadcrumb-item active' aria-current='page'>
						vehicles
					</li>
					<select id='inputState' class='filter-nav form-control form-control-sm ml-auto'>
						<option value=''>Filter by</option>
						<option value='700'>700cc</option>
						<option value='1000'>1000cc</option>
						<option value='1500'>1500cc</option>
						<option value='1800'>1800cc</option>
						<option value='2000'>2000cc</option>
						<option value='2500'>2500cc</option>
						<option value='3000'>3000cc</option>
						<option value='4000'>4000cc</option>
					</select>
				</ol>
			</nav>
		);
	}
}

export default BreadCrumb;
