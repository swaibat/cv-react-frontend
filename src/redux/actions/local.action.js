import constant from '../constants';
import Api from '../../Api/index';
import location from '../../helper/google';

const getIp = async () => {
	try {
		const result = await Api.getIp();
		const { data } = result;
		const locIndex = data.indexOf('loc=');
		const CountryName = data.slice(locIndex + 4, locIndex + 7).trim();
		const country = location.getCountry(CountryName);
		return { type: constant.IP_SUCCESS, payload: country };
	} catch (error) {
		const message = error.response ? error.response : 'No internet access';
		return { type: constant.IP_ERROR, error: message };
	}
};

export default getIp;
