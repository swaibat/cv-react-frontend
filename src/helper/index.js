import jwt from 'jsonwebtoken';

export const setToken = token => {
	localStorage.setItem('cv-token', token);
};

export const delToken = () => {
	localStorage.removeItem('cv-token');
};

export const token = localStorage.getItem('cv-token');

const getToken = token => {
	const data = jwt.verify(
		token || localStorage.getItem('cv-token'),
		'ssdhjcbbjkssndahjkfcbcjdsdh',
		(err, decoded) => {
			if (err) return '';
			return decoded;
		},
	);
	return data;
};

export default getToken;
