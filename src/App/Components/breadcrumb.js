import React from 'react';

export default ({ data }) => {
	return (
		<nav aria-label='breadcrumb cv-breadcrumb flex-row p-0 text-sm-left font-weight-light text-sm '>
			<ol className='breadcrumb p-0 mt-3 bg-transparent'>
				<li className='breadcrumb-item'>
					<a href='/'>Home</a>
				</li>
				{data && data.sub ? (
					<li className='breadcrumb-item'>{data && <a href={`/category/${data.name.replace(/-/g, ' ')}`}>{data.name.replace(/-/g, ' ')}</a>}</li>
				) : (
					<li className='breadcrumb-item active' aria-current='page'>
						{data && data.name}
					</li>
				)}
				{data && data.sub && (
					<li className='breadcrumb-item active' aria-current='page'>
						{data && data.sub}
					</li>
				)}
			</ol>
		</nav>
	);
};
