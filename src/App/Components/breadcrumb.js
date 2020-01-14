import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTh, faList } from '@fortawesome/free-solid-svg-icons';

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
				<div className='btn-group ml-auto'>
					<a href='/' id='list' className='btn btn-outline-primary  btn-sm'>
						<FontAwesomeIcon className='mr-1' icon={faTh} />
						Grid
					</a>{' '}
					<a href='/' id='grid' className='btn btn-outline-secondary  btn-sm'>
						<FontAwesomeIcon className='mr-1' icon={faList} />
						List
					</a>
				</div>
			</ol>
		</nav>
	);
};
