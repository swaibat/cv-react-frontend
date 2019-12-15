import React from 'react';
import AdImg from '../../assets/images/img.png';
import { Icon } from '@iconify/react';
import heart from '@iconify/icons-mdi-light/heart';

function Card({ data }) {
	return data.map((e, i) => {
		return (
			<a href={`/products/${e.id}`} class='p-0 flex-fill card text-secondary' key={i}>
				<img src={AdImg} className='img-thumbnail' alt='...' />
				<div className='card-footer'>
					<span className='heart text-primary shadow-sm'>
						<Icon icon={heart} />
					</span>
					<p className='card-text mb-1'>{e.name}</p>
					<h5 className='card-text'>{e.price}</h5>
				</div>
			</a>
		);
	});
}
export default Card;
