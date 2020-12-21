import { useSelector } from 'react-redux';

let state = true;

const UseReduxSelector = (data, setProducts) => {
	const payload = useSelector(state => state[data].payload);
	if (payload && state) {
		state = false;
		setProducts(payload);
	}
};

export default UseReduxSelector;
