import React, { Component } from 'react';
import { createAbout, deleteAbout, updateAbout } from '../../../redux/actions/about.action';
import constants from '../../../redux/constants/index';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidenav from './components/sidenav';
import AdminNav from './components/admin.nav.component';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { token } from './../../../helper';
import { getUser } from '../../../redux/actions/user.action';

class About extends Component {
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
		this.props.about(token);
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
		this.props.createAbout({ question, answer }, token);
	};

	render() {
		const { payload } = this.props;
		console.log(payload);
		return (
			<>
				<Sidenav />
				<div className='header-bg' />
				<main className='content-wrapper d-flex flex-column align-items-center min-h-display'>
					<AdminNav />
					<div className='container-fluid mt-n2'>
						<h5 className='cv-title title-light'>Categories</h5>
						<div className='w-100 bg-default p-3 mt-4 rounded'>
							<button
								className='btn btn-sm btn-success add-btn shadow-xs'
								data-toggle='modal'
								data-target='#exampleModalCenter'
								onClick={this.handleClick}
							>
								<FontAwesomeIcon className='mr-2' icon={faPlus} />
								Add About
							</button>
							<div className='row'>
								<div className='col-md-3 '></div>
								<div className='col-md-7'>
									<p>{payload && payload.data.About.employees}</p>
									<p>{payload && payload.data.About.startDate}</p>
									<p>{payload && payload.data.About.description}</p>
								</div>
							</div>
						</div>
					</div>
				</main>
				{/* create model */}
				<div
					className='modal fade'
					id='exampleModalCenter'
					tabindex='-1'
					role='dialog'
					aria-labelledby='exampleModalCenter'
					aria-hidden='true'
				>
					<div className='modal-dialog modal-dialog-centered' role='document'>
						<div className='modal-content'>
							<div className='modal-header border-0'>
								<h5 className='modal-title cv-title' id='exampleModalCenter'>
									Add About
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
					tabindex='-1'
					role='dialog'
					aria-labelledby='mySmallModalLabel'
					aria-hidden='true'
				>
					<div className='modal-dialog modal-dialog-centered'>
						<div className='modal-content'>
							<div className='modal-header border-0'>
								<h5 className='modal-title cv-title' id='exampleModalLongTitle'>
									Delete About
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
					tabindex='-1'
					role='dialog'
					aria-labelledby='updateModal'
					aria-hidden='true'
				>
					<div className='modal-dialog modal-dialog-centered' role='document'>
						<div className='modal-content'>
							<div className='modal-header border-0'>
								<h5 className='modal-title cv-title' id='updateModal'>
									Edit About
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
				type: constants.USER_PENDING,
				pending: true,
			}),

		about: async token => dispatch(await getUser(token)),
		createAbout: async (data, token) => dispatch(await createAbout(data, token)),
		delete: async (id, token) => dispatch(await deleteAbout(id, token)),
		update: async (id, data, token) => dispatch(await updateAbout(id, data, token)),
	};
};

const mapStateToProps = state => {
	return {
		payload: state.getUser.payload,
		pending: state.getUser.pending,
		error: state.getUser.error,
		createPayload: state.createAbout.payload,
		createPending: state.createAbout.pending,
		createError: state.createAbout.error,
		delPayload: state.deleteAbout.payload,
		delPending: state.deleteAbout.pending,
		delError: state.deleteAbout.error,
		updatePayload: state.updateAbout.payload,
		updatePending: state.updateAbout.pending,
		updateError: state.updateAbout.error,
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
