import React, { Component } from 'react';
import { token } from '../../../shared/helper';
import { connect } from 'react-redux';
import Categorys from '../../../backend/components/categories/redux/actions';
import TextInput from '../../../shared/components/text-input';

class CategoryCreate extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {},
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput = e => {
		const { value, name } = e.target;
		this.setState({ [name]: value });
	};

	handleSubmit = async e => {
		e.preventDefault();
		const {
			name,
			data: { id },
		} = this.state;
		this.props.createCat({ name, ParentId: id }, token);
	};

	componentWillReceiveProps(nextProps) {
		if (nextProps.data !== this.props.data) {
			this.setState({ data: nextProps.data });
		}
	}

	render() {
		const { data } = this.state;
		console.log(this.state);
		return (
			<div
				className='modal fade'
				id='exampleModalCenter'
				tabIndex='-1'
				role='dialog'
				aria-labelledby='exampleModalCenterTitle'
				aria-hidden='true'
			>
				<div className='modal-dialog modal-dialog-centered' role='document'>
					<div className='modal-content'>
						<div className='modal-header border-0'>
							<h5 className='modal-title cv-title' id='exampleModalLongTitle'>
								{data.parentname ? 'Add Sub category' : 'Add Category'}
							</h5>
							<button type='button' className='close' data-dismiss='modal' aria-label='Close'>
								<span aria-hidden='true'>&times;</span>
							</button>
						</div>
						<form onSubmit={this.handleSubmit}>
							<div className='modal-body text-center'>
								{!data.ParentId && <h4>{data.name}</h4>}
								<TextInput
									{...{
										label: 'Sub Category Name',
										name: 'name',
										type: 'text',
										icon: { name: 'person-add-outline' },
										onChange: this.handleInput,
									}}
								/>
							</div>
							<div className='modal-footer'>
								<button
									type='button'
									className='btn btn-sm btn-secondary mr-auto'
									data-dismiss='modal'
								>
									Close
								</button>
								<button type='submit' className='btn btn-sm btn-primary'>
									Save
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		createCat: async (data, token) => dispatch(await Categorys.createCategory(data, token)),
	};
};

const mapStateToProps = state => {
	return {
		createPayload: state.createCategory.payload,
		createPending: state.createCategory.pending,
		createError: state.createCategory.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCreate);
