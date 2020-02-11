import countries from './countries.json';
import Axios from 'axios';
// var NodeGeocoder = require('node-geocoder');

export default {
	getCountries() {
		return countries;
	},
	getCountry(name) {
		const country = countries.find(e => e.alpha2Code === name);
		return country;
	},
};
// var options = {
// 	provider: 'google',
// 	httpAdapter: 'https', // Default
// 	apiKey: 'AIzaSyCcAP0GrIyhCe_kJfKY1Cb4OYOeP5vmhsQ', // for Mapquest, OpenCage, Google Premier
// 	formatter: null, // 'gpx', 'string', ...
// };
// var geocoder = NodeGeocoder(options);
export const getIpDetails = () => {
	Axios.get('').then(myJson => {
		return myJson;
		// geocoder.reverse({ lat: latitude, lon: longitude }, function(err, payload) {
		// 	if (err) return { status: 400, message: err };
		// 	const { formattedAddress, latitude, longitude, country, countryCode, city, administrativeLevels } = payload[0];
		// 	// const countryDetails = countries.find(
		// 	//   country => country.alpha2Code === countryCode
		// 	// );
		// 	return {
		// 		clientIP,
		// 		address: formattedAddress,
		// 		address2: administrativeLevels.level2long,
		// 		country,
		// 		countryCode,
		// 		city,
		// 		latitude,
		// 		longitude,
		// 	};
		// });
	});
};
