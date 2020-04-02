import React from 'react';
import AdImg from '../../../shared/assets/images/img.png';
import { Link } from 'react-router-dom';
import converter from '../../../shared/helper/currency.converter';
import value from '../../../shared/helper/thousands.helper';
import Like from './like.button';

function Card({ data }) {
	const { localPayload, currencyPayload, settingsPayload, payload } = data.props;
	const localCurrency = settingsPayload.data.autoCurrency
		? localPayload && localPayload.alpha2Code
		: '';
	return (
		payload &&
		payload.data.slice(0, data.state.visible).map((e, i) => {
			/**
			 * @params
			 * (currency-settings, product-price, all-currencies-data, local-currency, currency-display-fomat(code/symbol))
			 */
			const converted =
				currencyPayload &&
				settingsPayload &&
				converter(
					settingsPayload.data.currencyCountry,
					e.price,
					currencyPayload,
					localCurrency,
					settingsPayload.data.currencyDisplayBy,
				);
			return (
				<div className='item-card-md p-1 p-md-2 flex-fill'>
					<div key={i} className='card  w-100 bg-white border-0 shadow-xs p-md-2'>
						<a href={`/products/${e.id}`} className='banner_holder rounded'>
							<div
								className='banner_holderImage img-thumbnail'
								style={{
									backgroundImage: `url(${(e.productFiles.length && e.productFiles[0].link) ||
										AdImg})`,
								}}
							></div>
						</a>
						<div className='card-footer bg-transparent overflow-hidden text-truncate'>
							<span className='heart text-primary shadow-sm'>
								<Like data={data} product={e} />
							</span>
							<a href={`/products/${e.id}`} className='card-text mb-1 text-truncate '>
								{e.name}
							</a>
							<span className='d-flex align-items-center'>
								{settingsPayload.data.currencyFlagDisplay && (
									<img className='flag-icon mr-1' src={converted && converted.flag} alt='flag' />
								)}
								<small className='pr-2'>{converted && converted.currencyCode}</small>
								<h6 className='card-text'>{value((converted && converted.price) || e.price)}</h6>
							</span>
						</div>
					</div>
				</div>
			);
		})
	);
}

export default Card;
