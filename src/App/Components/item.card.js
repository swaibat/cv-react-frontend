import React from 'react';
import AdImg from '../../assets/images/img.png';
import { Icon } from '@iconify/react';
import heart from '@iconify/icons-mdi-light/heart';

function Card({ data }) {
	return data.map((e, i) => {
		return (
			<div className='col-6 col-md-3 col-sm-4 p-2'>
				<a key={i} href={`/products/${e.name}`} className='card text-secondary w-100 bg-white border-0 shadow-xs'>
					<div className='banner_holder rounded'>
						<div className='banner_holderImage img-thumbnail' style={{ backgroundImage: `url(${e.productFiles.length !== 0 ? e.productFiles[0].link : AdImg})` }}></div>
					</div>
					<div className='card-footer bg-transparent'>
						<span className='heart text-primary shadow-sm'>
							<Icon icon={heart} />
						</span>
						<p className='card-text mb-1 text-truncate'>{e.name}</p>
						<h5 className='card-text text-primary'>{e.price}</h5>
					</div>
				</a>
			</div>
		);
	});
}
export default Card;
