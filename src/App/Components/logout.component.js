import React from 'react';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import constants from '../../redux/constants';
import LogoutAction from '../../redux/actions/logout.action';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { delToken, token } from '../../helper';

export class Logout extends React.Component {
	logout = () => {
		this.props.inits();
		this.props.logout(token);
	};
	render() {
		const { payload, pending } = this.props;
		if (payload && payload.status === 200) {
			delToken();
			window.location.reload();
		}
		return (
			<div className='btn-group' role='group' aria-label='Basic example'>
				<Link type='button' onClick={() => this.logout()} className='btn btn-sm btn-outline-primary' to='/'>
					<FontAwesomeIcon className='mr-2' icon={faSignOutAlt} />
					{pending ? 'loging out...' : 'logout'}
				</Link>
			</div>
		);
	}
}

export function mapStateToProps(state) {
	return {
		payload: state.Logout.payload,
		pending: state.Logout.pending,
	};
}
export const mapDispatchToProps = dispatch => {
	return {
		inits: () =>
			dispatch({
				type: constants.LOGOUT_PENDING,
				pending: true,
			}),
		logout: async token => dispatch(await LogoutAction(token)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
