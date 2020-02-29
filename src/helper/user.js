import apis from '../Api';

export default async userId => {
	try {
		const res = await apis.getUser();
		if (res.status === 200) {
			return res.data.data;
		}
	} catch (error) {
		return false;
	}
};
