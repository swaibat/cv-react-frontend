import React, { Component } from 'react';
import { token } from '../../../shared/helper';
import { connect } from 'react-redux';
import Categorys from '../../../backend/components/categories/redux/actions';

class CategoryDelete extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
		};
		this.handleDelete = this.handleDelete.bind(this);
	}

	handleDelete = e => {
		e.preventDefault();
		const { id } = this.state.data;
		this.props.delete(token, id);
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.data !== this.props.data) {
			this.setState({ data: nextProps.data });
		}
	}

	render() {
		const { data } = this.state;
		console.log(data);
		return (
			<div
				className='modal fade bd-example-modal-sm'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='mySmallModalLabel'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-dialog-centered'>
					<div className='modal-content'>
						<div className='modal-header border-0'>
							<h5 className='modal-title cv-title' id='exampleModalLongTitle'>
								{!data.name ? 'Delete category' : 'Delete sub category'}
							</h5>
							<button type='button' className='close' data-dismiss='modal' aria-label='Close'>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<div className='modal-body'>
							<p>
								Are you sure you wan to delete{' '}
								<emp className='text-primary text-capitalize'>{data.name || data.parentname}</emp>
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
		delete: async (data, token, id) => dispatch(await Categorys.deleteCategory(data, token, id)),
	};
};

const mapStateToProps = state => {
	return {
		deletePayload: state.deleteCategory.payload,
		deletePending: state.deleteCategory.pending,
		deleteError: state.deleteCategory.error,
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryDelete);
