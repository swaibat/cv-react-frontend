import React, { Component } from 'react';
import { connect } from 'react-redux';
import constants from '../../../shared/redux/constants';
import { token } from '../../../shared/helper';
import Auth from '../../../shared/components/auth/redux/actions';

class DeleteModal extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleDelete(event) {
		event.preventDefault();
		const {
			actionUser: { id },
		} = this.props.state;
		this.props.deleteUser(token, id);
	}
	render() {
		const { state } = this.props;
		return (
			<div
				className='modal fade'
				id='deleteModal'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='deleteModal'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-header border-0'>
							<h5 className='modal-title cv-title' id='exampleModalLongTitle'>
								Delete User
							</h5>
							<button type='button' className='close' data-dismiss='modal' aria-label='Close'>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='modal-body text-center'>
							<p>
								Are you sure you wan to delete user
								<emp className='text-primary text-capitalize ml-3'>
									{state.actionUser.firstName}
								</emp>
							</p>
						</div>
						<div className='modal-footer'>
							<button
								type='button'
								className='btn btn-sm btn-secondary mr-auto'
								data-dismiss='modal'
							>
								Cancel
							</button>
							<button type='button' onClick={this.handleDelete} className='btn btn-sm btn-danger'>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		init: () =>
			dispatch({
				type: constants.DELETE_USER_PENDING,
				pending: true,
			}),
		deleteUser: async (data, id) => dispatch(await Auth.deleteUser(data, id)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.DeleteUser.payload,
		pending: state.DeleteUser.pending,
		error: state.DeleteUser.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
