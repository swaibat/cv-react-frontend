export default (state, props) => {
	for (const key in state) {
		if (props[key] !== state[key] && key !== 'id' && props[key] !== 'updatedAt') {
			return true;
		}
	}
};
