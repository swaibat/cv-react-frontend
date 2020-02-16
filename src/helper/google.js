import countries from './countries.json';
import Geocode from 'react-geocode';
import DeviceDetector from 'device-detector-js';
import api from '../Api';

const deviceDetector = new DeviceDetector();
const device = deviceDetector.parse(navigator.userAgent);

Geocode.setApiKey('AIzaSyCcAP0GrIyhCe_kJfKY1Cb4OYOeP5vmhsQ');

export default {
	getCountry(name) {
		const country = countries.find(e => e.alpha2Code === name);
		return country;
	},
	async getLocation() {
		const { data } = await api.getClient();
		const { flag, callingCodes } = countries.find(country => country.alpha2Code === data.countryCode);
		const local = await Geocode.fromLatLng(data.latitude, data.longitude);
		return {
			address1: local.results[5].formatted_address,
			address2: local.results[6].formatted_address,
			...data,
			flag,
			device,
			callingCodes,
		};
	},
};
