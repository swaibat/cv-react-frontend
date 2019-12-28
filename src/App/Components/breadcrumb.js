import React from 'react';

export default ({ data }) => {
	return (
		<nav aria-label='breadcrumb cv-breadcrumb flex-row p-0 text-sm-left font-weight-light text-sm'>
			<ol className='breadcrumb p-0 mt-3 bg-transparent align-items-center'>
				<li className='breadcrumb-item cv-breadcrumb-item'>
					<a href='/'>Home</a>
				</li>
				{data && data.sub ? (
					<li className='breadcrumb-item cv-breadcrumb-item'>{data && <a href={`/category/${data.name.replace(/-/g, ' ')}`}>{data.name.replace(/-/g, ' ')}</a>}</li>
				) : (
					<li className='breadcrumb-item active cv-breadcrumb-item' aria-current='page'>
						{data && data.name}
					</li>
				)}
				{data && data.sub && (
					<li className='breadcrumb-item cv-breadcrumb-item active' aria-current='page'>
						{data && data.sub}
					</li>
				)}

				<select id='inputState' className='filter-nav form-control form-control-sm ml-auto'>
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
};
