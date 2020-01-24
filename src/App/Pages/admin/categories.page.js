/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { category, createCategory, updateCategory, deleteCategory } from '../../../redux/actions/items.action';
import constants from '../../../redux/constants/index';
import Sidenav from './components/sidenav';
import AdminNav from './components/admin.nav.component';
import { token } from '../../../helper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAfrica, faTrash, faPlus, faEdit, faChevronDown } from '@fortawesome/free-solid-svg-icons';

class Categories extends Component {
	constructor(props) {
		super(props);
		this.state = {
			ParentId: '',
			name: '',
			parentname: '',
			visible: false,
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
	}
	componentDidMount() {
		this.props.init();
		this.props.getCat();
	}
	handleClick = e => {
		e.stopPropagation();
		this.setState({ ParentId: e.target.id, parentname: e.target.name.split('>')[0], name: e.target.name.split('>')[1] });
	};
	handleDelete = e => {
		e.preventDefault();
		const { ParentId } = this.state;
		this.props.delete(token, ParentId);
	};
	handleUpdate = e => {
		e.preventDefault();
		const { name, ParentId, parentname } = this.state;
		const data = name || parentname;
		this.props.update({ name: data }, token, ParentId);
	};
	handleInput = e => {
		const target = e.target;
		const value = target.name === 'images' ? e.target.files : target.value;
		const name = target.name;
		this.setState({ [name]: value });
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.init();
		const { name, ParentId } = this.state;
		const id = !ParentId ? null : ParentId;
		this.props.createCat({ name, ParentId: id }, token);
	};
	render() {
		const { payload } = this.props;
		return (
			<>
				<Sidenav />
				<div className='header-bg' />
				<main className='content-wrapper d-flex flex-column align-items-center min-h-display'>
					<AdminNav />
					<div className='container-fluid mt-n2'>
						<h5 className='cv-title title-light'>Categories</h5>
						<div className='w-100 bg-default p-3 mt-4 rounded'>
							<button className='btn btn-sm btn-success add-btn shadow-xs' data-toggle='modal' data-target='#exampleModalCenter' onClick={this.handleClick}>
								<FontAwesomeIcon className='mr-2' icon={faPlus} />
								Add Category
							</button>
							<div className='row'>
								{payload &&
									payload.data.map((category, index) => {
										return (
											<div key={index} className='col-md-3 p-2'>
												<div className='card border-0 shadow-sm'>
													<div className='card-header p-2 d-flex align-items-center bg-white shadow-sm border-0 text-secondary'>
														<span className='text-primary category-icon d-flex justify-content-center align-items-center shadow-xs '>
															<FontAwesomeIcon className='admin-nav-icons' icon={faGlobeAfrica} />
														</span>
														<span className='card-text ml-2 text-truncate'>{this.state && category.id === parseInt(this.state.ParentId) ? this.state.parentname : category.name}</span>
														<span className='badge badge-primary badge-pill ml-auto'>{category.sub.length}</span>
														<button name={`${category.name}>${''}`} id={category.id} className='btn btn-sm ml-1' data-toggle='modal' data-target='#exampleModalCenter' onClick={this.handleClick}>
															<FontAwesomeIcon className='text-secondary' icon={faPlus} />
														</button>
													</div>
													<div className='card-body p-1'>
														<span className='cv-title text-secondary'>sub categories</span>
														<ul class='list-group list-group-flush mt-2 hr-9 overflow-y-scroll text-secondary'>
															{category.sub.map((sub, key) => {
																return (
																	<li key={key} class='list-group-item list-group-item-sm border-0 d-flex align-items-center category-list text-capitalize'>
																		<span class='custom-control custom-checkbox '>
																			<input type='checkbox' class='custom-control-input' id={sub.id} onClick={this.handleClick} />
																			<label class='custom-control-label' for={sub.id}>
																				{this.state && sub.id === parseInt(this.state.ParentId) ? this.state.name : sub.name}
																			</label>
																		</span>
																		<div class='btn-group btn-group-sm ml-auto mr-1' role='group' aria-label='Basic example' onClick={this.handleClick}>
																			<button
																				name={`${category.name}>${sub.name}`}
																				id={sub.id}
																				type='button'
																				class='btn text-primary'
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
																				class='btn text-danger'
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
																<li class='list-group-item list-group-item-sm border-0'>
																	<span class='custom-control custom-checkbox '>
																		<input type='checkbox' class='custom-control-input' id={this.state.name} />
																		<label class='custom-control-label' for={this.state.name}>
																			{this.state.name}
																		</label>
																	</span>
																</li>
															) : category.sub.length === 0 ? (
																<li class={`list-group-item list-group-item-sm border-0 text-center m-auto`}>
																	<p>Oops No sub Categories</p>
																	<button
																		name={category.name}
																		id={category.id}
																		className='btn btn-sm btn-outline-primary'
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
																<small className='d-flex align-items-center position-absolute bg-light rounded-sm px-2 py-0 text-secondary border'>
																	<FontAwesomeIcon icon={faChevronDown} />
																	<span className='ml-1'>{category.sub.length - 4} more row(s)</span>
																</small>
															</span>
														)}
													</div>
													<div className='card-footer d-flex p-2 align-items-center shadow-sm-top bg-white text-secondary'>
														<span className='card-text text-truncate'>{this.state && category.id === parseInt(this.state.ParentId) ? this.state.parentname : category.name}</span>
														<div class='btn-group btn-group-sm ml-auto' role='group' aria-label='Basic example'>
															<div class='btn-group btn-group-sm ml-auto mr-1' role='group' aria-label='Basic example' onClick={this.handleClick}>
																<button
																	name={`${category.name}>${''}`}
																	id={category.id}
																	type='button'
																	class='btn text-primary'
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
																	class='btn text-danger'
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
							{/* <Pagination /> */}
						</div>
					</div>
					<div class='modal fade' id='exampleModalCenter' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>
						<div class='modal-dialog modal-dialog-centered' role='document'>
							<div class='modal-content'>
								<div class='modal-header border-0'>
									<h5 class='modal-title cv-title' id='exampleModalLongTitle'>
										{this.state.parentname ? 'Add Sub category' : 'Add Category'}
									</h5>
									<button type='button' class='close' data-dismiss='modal' aria-label='Close'>
										<span aria-hidden='true'>&times;</span>
									</button>
								</div>
								<form onSubmit={this.handleSubmit}>
									<div class='modal-body'>
										<div className={this.state.parentname ? 'form-group' : 'd-none'}>
											<input id={this.state.ParentId} type='text' value={this.state.parentname} className='form-control rounded-sm' onChange={this.handleInput} disabled />
										</div>
										<div className='form-group'>
											<input type='text' name='name' placeholder='enter sub category' value={this.state.name} className='form-control rounded-sm' onChange={this.handleInput} />
										</div>
									</div>
									<div class='modal-footer'>
										<button type='button' class='btn btn-sm btn-secondary mr-auto' data-dismiss='modal'>
											Close
										</button>
										<button type='submit' class='btn btn-sm btn-primary'>
											Save
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div class='modal fade bd-example-modal-sm' tabindex='-1' role='dialog' aria-labelledby='mySmallModalLabel' aria-hidden='true'>
						<div class='modal-dialog modal-dialog-centered'>
							<div class='modal-content'>
								<div class='modal-header border-0'>
									<h5 class='modal-title cv-title' id='exampleModalLongTitle'>
										{!this.state.name ? 'Delete category' : 'Delete sub category'}
									</h5>
									<button type='button' class='close' data-dismiss='modal' aria-label='Close'>
										<span aria-hidden='true'>&times;</span>
									</button>
								</div>
								<div class='modal-body'>
									<p>
										Are you sure you wan to delete <emp className='text-primary text-capitalize'>{this.state.name || this.state.parentname}</emp>
									</p>
								</div>
								<div class='modal-footer'>
									<button type='button' class='btn btn-sm btn-secondary mr-auto' data-dismiss='modal'>
										Cancel
									</button>
									<button type='button' onClick={this.handleDelete} class='btn btn-sm btn-danger'>
										Delete
									</button>
								</div>
							</div>
						</div>
					</div>
					<div class='modal fade' id='updateModel' tabindex='-1' role='dialog' aria-labelledby='exampleModalCenterTitle' aria-hidden='true'>
						<div class='modal-dialog modal-dialog-centered' role='document'>
							<div class='modal-content'>
								<div class='modal-header border-0'>
									<h5 class='modal-title cv-title text-capitalize' id='exampleModalLongTitle'>
										{!this.state.name ? 'Update category' : 'Update sub category'}
									</h5>
									<button type='button' class='close' data-dismiss='modal' aria-label='Close'>
										<span aria-hidden='true'>&times;</span>
									</button>
								</div>
								<form onSubmit={this.handleUpdate}>
									{!this.state.name ? (
										<div class='modal-body'>
											<div className='form-group'>
												<input id={this.state.ParentId} name='parentname' type='text' value={this.state.parentname} className='form-control rounded-sm' onChange={this.handleInput} />
											</div>
										</div>
									) : (
										<div class='modal-body'>
											<div className='form-group'>
												<input id={this.state.ParentId} type='text' value={this.state.parentname} className='form-control rounded-sm' onChange={this.handleInput} disabled />
											</div>
											<div className='form-group'>
												<input type='text' name='name' placeholder='enter sub category' value={this.state.name} className='form-control rounded-sm' onChange={this.handleInput} />
											</div>
										</div>
									)}
									<div class='modal-footer'>
										<button type='button' class='btn btn-sm btn-secondary mr-auto' data-dismiss='modal'>
											Close
										</button>
										<button type='submit' class='btn btn-sm btn-primary'>
											Save
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</main>
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
		getCat: async () => dispatch(await category()),
		createCat: async (data, token) => dispatch(await createCategory(data, token)),
		update: async (data, token, id) => dispatch(await updateCategory(data, token, id)),
		delete: async (data, token, id) => dispatch(await deleteCategory(data, token, id)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.categories.payload,
		pending: state.categories.pending,
		error: state.categories.error,
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
