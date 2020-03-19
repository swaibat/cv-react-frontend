import Location from './google';

export default (defaultCurrency, price, payload, localCountry, type) => {
	const country = Location.getCountry(defaultCurrency);
	const currencyCountry = country.currencies && country.currencies[0].code;
	const actualCountry = Location.getCountry(localCountry || defaultCurrency);
	const Asymbol = actualCountry.currencies[0][type];
	const actualCurrencyCountry = actualCountry.currencies[0].code;
	return {
		flag: actualCountry.flag,
		currencyCode: Asymbol,
		price: parseInt(
			(price / payload.data.rates[currencyCountry]) * payload.data.rates[actualCurrencyCountry],
		),
	};
};
