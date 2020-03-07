import React, { Component } from 'react';
import { connect } from 'react-redux';
import constants from '../../../shared/redux/constants';
import { token } from '../../../shared/helper';
import Product from './redux/actions';

class DeleteModal extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleDelete = this.handleDelete.bind(this);
	}
	handleDelete() {
		const {
			actionProduct: { id },
		} = this.props.state;
		this.props.deleteProduct(token, id);
	}
	render() {
		const {
			state: { actionProduct },
		} = this.props;
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
								Delete Product
							</h5>
							<button type='button' className='close' data-dismiss='modal' aria-label='Close'>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='modal-body text-center'>
							<p className='mb-2'>Are you sure you wan to delete</p>
							<emp className='text-primary text-capitalize text-truncate'>{actionProduct.name}</emp>
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
				type: constants.DELETE_PRODUCT_PENDING,
				pending: true,
			}),
		deleteProduct: async (token, id) => dispatch(await Product.deleteProduct(token, id)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.DeleteProduct.payload,
		pending: state.DeleteProduct.pending,
		error: state.DeleteProduct.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal);
