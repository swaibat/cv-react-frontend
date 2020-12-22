import React, { useMemo } from 'react';
import AdminApp from './backend';
import UserApp from './frontend';
import Auth from './shared/components/auth/redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
	const dispatch = useDispatch();
	useMemo(() => {
		dispatch(Auth.currentUser);
	}, [dispatch]);
	const payload = useSelector(({ User }) => User.payload);
	console.log('====================================');
	console.log(payload);
	console.log('====================================');
	return (
		<>
			<AdminApp />
			<UserApp />
			{/* <Route path='/admin/*' component={AdminApp} /> */}
		</>
	);
};

export default App;
