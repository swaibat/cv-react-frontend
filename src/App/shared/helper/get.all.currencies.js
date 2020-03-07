import Location from './google';

export default () => {
	const countries = Location.getLocation();
	const currencies = countries.map(e => {
		return { country: e.name, flag: e.flag, currency: e.currencies[0] };
	});
	return currencies;
};
