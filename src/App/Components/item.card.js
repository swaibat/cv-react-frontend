import React from 'react';
import AdImg from '../../assets/images/img.png';
import { Icon } from '@iconify/react';
import heart from '@iconify/icons-mdi-light/heart';
import { Link } from 'react-router-dom';

function Card({ data, visible }) {
	return data.slice(0, visible).map((e, i) => {
		return (
			<div className='col-6 col-md-3 col-sm-4 p-1 p-md-2'>
				<div key={i} className='card text-secondary w-100 bg-white border-0 shadow-xs p-md-2'>
					<Link to={`/products/${e.name}`} className='banner_holder rounded'>
						<div className='banner_holderImage img-thumbnail' style={{ backgroundImage: `url(${e.productFiles.length !== 0 ? e.productFiles[0].link : AdImg})` }}></div>
					</Link>
					<div className='card-footer bg-transparent'>
						<span className='heart text-primary shadow-sm'>
							<Icon icon={heart} />
						</span>
						<Link to={`/products/${e.name}`} className='card-text mb-1 text-truncate text-secondary'>
							{e.name}
						</Link>
						<h5 className='card-text text-primary'>{e.price}</h5>
					</div>
				</div>
			</div>
		);
	});
}
export default Card;
