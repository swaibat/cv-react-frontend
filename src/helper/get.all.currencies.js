import Location from './google';

export const getCurrencies = () => {
	const countries = Location.getCountries();
	const currencies = countries.map(e => {
		return { country: e.name, flag: e.flag, currency: e.currencies[0] };
	});
	return currencies;
};
