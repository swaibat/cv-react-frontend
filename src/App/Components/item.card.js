import React from 'react';
import AdImg from '../../assets/images/img.png';
import { Icon } from '@iconify/react';
import heart from '@iconify/icons-mdi-light/heart';
import { Link } from 'react-router-dom';
import converter from '../../helper/currency.converter';
import value from '../../helper/thousands.helper';

function Card({ data, visible, all }) {
	const { localPayload, currencyPayload, settingsPayload } = all;
	const localCurrency = settingsPayload.data.autoCurrency ? localPayload && localPayload.alpha2Code : '';
	return data.slice(0, visible).map((e, i) => {
		/**
		 * @params
		 * (currency-settings, product-price, all-currencies-data, local-currency, currency-display-fomat(code/symbol))
		 */
		const converted = currencyPayload && settingsPayload && converter(settingsPayload.data.currencyCountry, e.price, currencyPayload, localCurrency, settingsPayload.data.currencyDisplayBy);
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
						<span className='d-flex align-items-center'>
							{settingsPayload.data.currencyFlagDisplay && <img className='flag-icon mr-1' src={`http://localhost:5000/flags/${converted && converted.flag}`} alt='flag' />}
							<small className='pr-2'>{converted && converted.currencyCode}</small>
							<h5 className='card-text text-primary'>{value((converted && converted.price) || e.price)}</h5>
						</span>
					</div>
				</div>
			</div>
		);
	});
}
export default Card;
