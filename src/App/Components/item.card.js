import React from 'react';
import AdImg from '../../assets/images/img.png';
import { Icon } from '@iconify/react';
import heart from '@iconify/icons-mdi-light/heart';

function Card({ data }) {
	return data.map((e, i) => {
		return (
			<a key={i} href={`/products/${e.id}`} className='border-0 card text-secondary col-6 col-md-3 col-sm-4  p-0 bg-transparent'>
				<img src={AdImg} className='img-thumbnail bg-transparent' alt='...' />
				<div className='card-footer bg-transparent'>
					<span className='heart text-primary shadow-sm'>
						<Icon icon={heart} />
					</span>
					<p className='card-text mb-1 text-truncate'>{e.name}</p>
					<h5 className='card-text'>{e.price}</h5>
				</div>
			</a>
		);
	});
}
export default Card;
