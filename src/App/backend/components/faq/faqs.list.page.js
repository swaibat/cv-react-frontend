import React, { Component } from 'react';
import Faqs from './redux/actions';
import constants from '../../../shared/redux/constants';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidenav from '../navigation/sidenav';
import AdminNav from '../navigation/admin.nav';
import { faPlus, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { token } from '../../../shared/helper';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

class Faq extends Component {
	constructor(props) {
		super(props);
		this.state = {
			question: '',
			answer: '',
			id: '',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
	}
	componentDidMount() {
		this.props.init();
		this.props.faq();
	}
	handleDelete = e => {
		e.preventDefault();
		this.props.delete(this.state.id, token);
	};
	handleClick = e => {
		e.stopPropagation();
		this.setState({
			id: e.target.id,
			question: e.target.name.split('>')[0],
			answer: e.target.name.split('>')[1],
		});
	};
	handleUpdate = e => {
		e.preventDefault();
		const { id, question, answer } = this.state;
		console.log(this.state);
		this.props.update(id, { question, answer }, token);
	};
	handleInput = e => {
		e.preventDefault();
		const target = e.target;
		const value = target.value;
		const name = target.name;
		this.setState({ [name]: value });
	};
	handleSubmit = e => {
		e.preventDefault();
		this.props.init();
		const { question, answer } = this.state;
		this.props.createFaq({ question, answer }, token);
	};

	render() {
		const { payload } = this.props;
		return (
			<>
				<h5 className='cv-title title-light'>Categories</h5>
				<div className='w-100 bg-default p-3 mt-4 rounded'>
					<button
						className='btn btn-sm btn-success add-btn shadow-xs'
						data-toggle='modal'
						data-target='#exampleModalCenter'
						onClick={this.handleClick}
					>
						<FontAwesomeIcon className='mr-2' icon={faPlus} />
						Add Faq
					</button>
					<div className='accordion' id='accordionExample'>
						{payload &&
							payload.data.map((faq, index) => {
								return (
									<div
										key={index}
										className='card mb-3 overflow-hidden rounded shadow-xs bg-white border-0'
									>
										<div className='d-flex card-header border-bottom bg-white' id='headingOne'>
											<button
												className='btn btn-link w-100 text-left d-flex'
												type='button'
												data-toggle='collapse'
												data-target={`#faq${index}`}
												aria-expanded='true'
												aria-controls={`faq${index}`}
											>
												{faq.question}
												<span className='ml-auto'>
													<FontAwesomeIcon className='mr-1' icon={faChevronDown} />
												</span>
											</button>
											<div
												className='btn-group btn-group-sm mr-n2 ml-auto'
												role='group'
												aria-label='First group'
											>
												<button
													id={faq.id}
													name={`${faq.question}>${faq.answer}`}
													type='button'
													className='btn text-primary'
													data-toggle='modal'
													data-target='#updateModal'
													onClick={this.handleClick}
												>
													<FontAwesomeIcon icon={faEdit} />
												</button>
												<button
													id={faq.id}
													name={`${faq.question}>${faq.answer}`}
													type='button'
													className='btn '
													data-toggle='modal'
													data-target='.bd-example-modal-sm'
													onClick={this.handleClick}
												>
													<FontAwesomeIcon icon={faTrash} />
												</button>
											</div>
										</div>

										<div
											id={`faq${index}`}
											className='collapse'
											aria-labelledby='headingOne'
											data-parent='#accordionExample'
										>
											<div className='card-body'>{faq.answer}</div>
										</div>
									</div>
								);
							})}
					</div>
				</div>

				{/* create model */}
				<div
					className='modal fade'
					id='exampleModalCenter'
					tabIndex='-1'
					role='dialog'
					aria-labelledby='exampleModalCenter'
					aria-hidden='true'
				>
					<div className='modal-dialog modal-dialog-centered' role='document'>
						<div className='modal-content'>
							<div className='modal-header border-0'>
								<h5 className='modal-title cv-title' id='exampleModalCenter'>
									Add Faq
								</h5>
								<button type='button' className='close' data-dismiss='modal' aria-label='Close'>
									<span aria-hidden='true'>&times;</span>
								</button>
							</div>
							<form onSubmit={this.handleSubmit}>
								<div className='modal-body'>
									<div className='form-group'>
										<input
											name='question'
											placeholder='enter question'
											type='text'
											className='form-control rounded-sm'
											onChange={this.handleInput}
										/>
									</div>
									<div className='form-group'>
										<textarea
											name='answer'
											rows='4'
											className='form-control'
											placeholder='enter the answer'
											onChange={this.handleInput}
										/>
									</div>
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
				{/* delete model */}
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
									Delete Faq
								</h5>
								<button type='button' className='close' data-dismiss='modal' aria-label='Close'>
									<span aria-hidden='true'>&times;</span>
								</button>
							</div>
							<div className='modal-body'>
								<p>
									Are you sure you wan to delete{' '}
									<emp className='text-primary text-capitalize'>{this.state.name}</emp>
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
				{/* update model */}
				<div
					className='modal fade'
					id='updateModal'
					tabIndex='-1'
					role='dialog'
					aria-labelledby='updateModal'
					aria-hidden='true'
				>
					<div className='modal-dialog modal-dialog-centered' role='document'>
						<div className='modal-content'>
							<div className='modal-header border-0'>
								<h5 className='modal-title cv-title' id='updateModal'>
									Edit Faq
								</h5>
								<button type='button' className='close' data-dismiss='modal' aria-label='Close'>
									<span aria-hidden='true'>&times;</span>
								</button>
							</div>
							<form onSubmit={this.handleUpdate}>
								<div className='modal-body'>
									<div className='form-group'>
										<input
											name='question'
											value={this.state.question}
											placeholder='enter question'
											type='text'
											className='form-control rounded-sm'
											onChange={this.handleInput}
										/>
									</div>
									<div className='form-group'>
										<textarea
											name='answer'
											value={this.state.answer}
											rows='4'
											className='form-control'
											placeholder='enter the answer'
											onChange={this.handleInput}
										/>
									</div>
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
			</>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		init: () =>
			dispatch({
				type: constants.FAQ_PENDING,
				pending: true,
			}),

		faq: async () => dispatch(await Faqs.GetFaq()),
		createFaq: async (data, token) => dispatch(await Faqs.createFaq(data, token)),
		delete: async (id, token) => dispatch(await Faqs.deleteFaq(id, token)),
		update: async (id, data, token) => dispatch(await Faqs.updateFaq(id, data, token)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.GetFaq.payload,
		pending: state.GetFaq.pending,
		error: state.GetFaq.error,
		createPayload: state.createFaq.payload,
		createPending: state.createFaq.pending,
		createError: state.createFaq.error,
		delPayload: state.deleteFaq.payload,
		delPending: state.deleteFaq.pending,
		delError: state.deleteFaq.error,
		updatePayload: state.updateFaq.payload,
		updatePending: state.updateFaq.pending,
		updateError: state.updateFaq.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Faq);
