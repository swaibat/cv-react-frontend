import Location from './google';
import local from '../redux/actions/local.action';

export const getLocal = async () => {
	const countries = Location.getCountries();
	const defaultCountry = await local();
	if (defaultCountry) {
		const locIndex = defaultCountry.payload.indexOf('loc=');
		const CountryName = defaultCountry.payload.slice(locIndex + 4, locIndex + 6).trim();
		const country = Location.getCountry(CountryName);
		return { country, flag: country.flag, callingCodes: country.callingCodes[0], currencyCode: country.currencies[0].code, countries };
	}

	return 'null';
};
