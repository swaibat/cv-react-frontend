import countries from './countries.json';

export default {
	getCountries() {
		return countries;
	},
	getCountry(name) {
		const country = countries.find(e => e.alpha2Code === name);
		return country;
	},
};
