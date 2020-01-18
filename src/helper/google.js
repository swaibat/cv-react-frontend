import loadScript from 'load-script';

const HOST = 'https://maps.googleapis.com/maps/api/js';
const KEY = 'YOUR API KEY';
const URL = `${HOST}?key=${KEY}&libraries=places`;

const loadGoogleMapApi = (success = () => {}, error = () => {}) => {
	if (window.google) {
		success();
	} else {
		loadScript(URL, err => {
			const callback = err ? error : success;
			callback();
		});
	}
};

export default loadGoogleMapApi;
