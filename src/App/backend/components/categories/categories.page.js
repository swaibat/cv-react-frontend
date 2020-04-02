/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Categorys from '../../../backend/components/categories/redux/actions';
import constants from '../../../shared/redux/constants';
import Sidenav from '../navigation/sidenav';
import { token } from '../../../shared/helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faGlobeAfrica,
	faTrash,
	faPlus,
	faEdit,
	faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import { DeleteModal, CreateModal, UpdateModal, BulkDel } from '../faq/modals';

class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ParentId: '',
			name: '',
			parentname: '',
			visible: false,
			categories: [],
			currentCategories: [],
			currentPage: null,
			totalPages: null,
			bulk: [],
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
	}
	async componentDidMount() {
		this.props.init();
		this.props.getCat();
		const categories = await Categorys.getCategories();
		this.setState({ categories: categories.payload.data });
	}

	handleClick = e => {
		e.stopPropagation();
		this.setState({
			ParentId: e.target.id,
			parentname: e.target.name.split('>')[0],
			name: e.target.name.split('>')[1],
		});
	};
	handleDelete = e => {
		e.preventDefault();
		const { ParentId } = this.state;
		ParentId
			? this.props.delete(token, ParentId)
			: this.state.bulk.map(sub => this.props.delete(token, sub.split('>')[1]));
	};
	handleUpdate = e => {
		e.preventDefault();
		const { name, ParentId, parentname } = this.state;
		const data = name || parentname;
		this.props.update({ name: data }, token, ParentId);
	};
	handleInput = e => {
		const target = e.target;
		const value = target.type === 'checkbox' ? target.checked : target.value;
		const name = target.name;
		name === 'CategoryId' && value === true ? this.state.bulk.push(e.target.id) : '';
		this.setState({ [name]: value });
	};
	handleSubmit = async e => {
		e.preventDefault();
		this.props.init();
		const { name, ParentId } = this.state;
		const id = !ParentId ? null : ParentId;
		this.props.createCat({ name, ParentId: id }, token);
	};
	render() {
		const { payload, pending } = this.props;
		console.log(payload);

		return (
			<>
				<div className='w-100 bg-white p-3 mt-4 rounded'>
					<button
						className='btn btn-sm btn-success'
						data-toggle='modal'
						data-target='#exampleModalCenter'
						onClick={this.handleClick}
					>
						<FontAwesomeIcon className='mr-2' icon={faPlus} />
						Add Category
					</button>
					<div className='row p-2'>
						{payload &&
							payload.data.map((category, index) => {
								return (
									<div key={index} className='col-md-4 p-0 m-0'>
										<div className='card rounded-0 border-bottom-0 border-right-0'>
											<div className='card-header shadow-xs p-2 d-flex align-items-center bg-white border-0'>
												<span className='icons-md d-flex justify-content-center align-items-center'>
													<ion-icon name='gift-outline' />
												</span>
												<span className='card-text ml-2 text-truncate'>
													{this.state && category.id === parseInt(this.state.ParentId)
														? this.state.parentname
														: category.name}
												</span>
												<span className='badge badge-primary badge-pill ml-auto'>
													{category.sub.length}
												</span>
												<button
													name={`${category.name}>${''}`}
													id={category.id}
													className='btn btn-sm ml-1'
													data-toggle='modal'
													data-target='#exampleModalCenter'
													onClick={this.handleClick}
												>
													<FontAwesomeIcon className='' icon={faPlus} />
												</button>
											</div>
											<div className='card-body p-1'>
												<div className='d-flex w-100'>
													<span className='cv-title '>sub categories</span>
													{this.state.bulk.length !== 0 &&
														this.state.bulk.find(e => e.split('>')[2] === category.name) && (
															<button
																className='btn btn-sm ml-auto btn-outline-secondary'
																data-toggle='modal'
																data-target='#bulkDelete'
															>
																<FontAwesomeIcon icon={faTrash} />
																<spam className='badge badge-danger'>
																	{
																		this.state.bulk.filter(e => e.split('>')[2] === category.name)
																			.length
																	}
																</spam>
															</button>
														)}
												</div>
												<ul className='list-group list-group-flush mt-2 hr-9 overflow-y-scroll '>
													{category.sub.map((sub, key) => {
														return (
															<li
																key={key}
																className='list-group-item list-group-item-sm border-0 d-flex align-items-center category-list text-capitalize'
															>
																<span className='custom-control custom-checkbox'>
																	<input
																		name='CategoryId'
																		type='checkbox'
																		className='custom-control-input'
																		id={`${sub.name}>${sub.id}>${category.name}`}
																		onChange={this.handleInput}
																	/>
																	<label
																		className='custom-control-label'
																		for={`${sub.name}>${sub.id}>${category.name}`}
																	>
																		{this.state && sub.id === parseInt(this.state.ParentId)
																			? this.state.name
																			: sub.name}
																	</label>
																</span>
																<div
																	className='btn-group btn-group-sm ml-auto mr-1'
																	role='group'
																	aria-label='Basic example'
																	onClick={this.handleClick}
																>
																	<button
																		name={`${category.name}>${sub.name}`}
																		id={sub.id}
																		type='button'
																		className='btn text-primary'
																		data-toggle='modal'
																		data-target='#updateModel'
																		onClick={this.handleClick}
																	>
																		<FontAwesomeIcon className='' icon={faEdit} />
																	</button>
																	<button
																		name={`${category.name}>${sub.name}`}
																		id={sub.id}
																		type='button'
																		className='btn text-danger'
																		data-toggle='modal'
																		data-target='.bd-example-modal-sm'
																		onClick={this.handleClick}
																	>
																		<FontAwesomeIcon icon={faTrash} />
																	</button>
																</div>
															</li>
														);
													})}
													{this.state.name && category.id === parseInt(this.state.ParentId) ? (
														<li className='list-group-item list-group-item-sm border-0'>
															<span className='custom-control custom-checkbox '>
																<input
																	type='checkbox'
																	className='custom-control-input'
																	id={this.state.name}
																/>
																<label className='custom-control-label' for={this.state.name}>
																	{this.state.name}
																</label>
															</span>
														</li>
													) : category.sub.length === 0 ? (
														<li
															className={`list-group-item list-group-item-sm border-0 text-center m-auto`}
														>
															<p className='mb-1 mt-n3'>Oops No sub Categories</p>
															<button
																name={category.name}
																id={category.id}
																className='btn btn-secondary btn-sm'
																data-toggle='modal'
																data-target='#exampleModalCenter'
																onClick={this.handleClick}
															>
																<FontAwesomeIcon className='mr-2' icon={faPlus} />
																add one
															</button>
														</li>
													) : (
														''
													)}
												</ul>
												{category.sub.length > 4 && (
													<span className='d-flex justify-content-center bg-secondary'>
														<small className='d-flex align-items-center position-absolute bg-light rounded-sm px-2 py-0  border'>
															<FontAwesomeIcon icon={faChevronDown} />
															<span className='ml-1'>{category.sub.length - 4} more row(s)</span>
														</small>
													</span>
												)}
											</div>
											<div className='card-footer shadow-top-xs rounded-0 d-flex p-2 align-items-center bg-white border-0'>
												<span className='card-text text-truncate'>
													{this.state && category.id === parseInt(this.state.ParentId)
														? this.state.parentname
														: category.name}
												</span>
												<div
													className='btn-group btn-group-sm ml-auto'
													role='group'
													aria-label='Basic example'
												>
													<div
														className='btn-group btn-group-sm ml-auto mr-1'
														role='group'
														aria-label='Basic example'
														onClick={this.handleClick}
													>
														<button
															name={`${category.name}>${''}`}
															id={category.id}
															type='button'
															className='btn text-primary'
															data-toggle='modal'
															data-target='#updateModel'
															onClick={this.handleClick}
														>
															<FontAwesomeIcon className='' icon={faEdit} />
														</button>
														<button
															name={`${category.name}>${''}`}
															id={category.id}
															type='button'
															className='btn text-danger'
															data-toggle='modal'
															data-target='.bd-example-modal-sm'
															onClick={this.handleClick}
														>
															<FontAwesomeIcon icon={faTrash} />
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>

				<CreateModal data={this} />
				<DeleteModal data={this} />
				<UpdateModal data={this} />
				<BulkDel data={this} />
			</>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		init: () =>
			dispatch({
				type: constants.CREATE_CATEGORY_PENDING,
				pending: true,
			}),
		getCat: async () => dispatch(await Categorys.getCategories()),
		createCat: async (data, token) => dispatch(await Categorys.createCategory(data, token)),
		update: async (data, token, id) => dispatch(await Categorys.updateCategory(data, token, id)),
		delete: async (data, token, id) => dispatch(await Categorys.deleteCategory(data, token, id)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.GetCategories.payload,
		pending: state.GetCategories.pending,
		error: state.GetCategories.error,
		createPayload: state.createCategory.payload,
		createPending: state.createCategory.pending,
		createError: state.createCategory.error,
		updatePayload: state.updateCategory.payload,
		updatePending: state.updateCategory.pending,
		updateError: state.updateCategory.error,
		deletePayload: state.deleteCategory.payload,
		deletePending: state.deleteCategory.pending,
		deleteError: state.deleteCategory.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
